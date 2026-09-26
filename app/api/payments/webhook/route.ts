import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const event = JSON.parse(rawBody);

    if (!event || !event.event) {
      return NextResponse.json({ success: false, message: 'Invalid webhook payload.' }, { status: 400 });
    }

    const orderId = event.payload?.payment?.entity?.order_id;
    const paymentId = event.payload?.payment?.entity?.id;
    const status = event.payload?.payment?.entity?.status;

    if (!orderId || !paymentId) {
      return NextResponse.json({ success: false, message: 'Webhook payload missing payment identifiers.' }, { status: 400 });
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: { razorpayOrderId: orderId },
      include: { payment: true },
    });

    if (!enrollment) {
      return NextResponse.json({ success: false, message: 'Enrollment not found for webhook event.' }, { status: 404 });
    }

    if (enrollment.paymentStatus === 'SUCCESS' && enrollment.razorpayPaymentId === paymentId) {
      return NextResponse.json({ success: true, data: { processed: false, reason: 'duplicate' } });
    }

    const nextStatus = status === 'captured' ? 'SUCCESS' : 'FAILED';

    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        paymentStatus: nextStatus,
        razorpayPaymentId: paymentId,
      },
    });

    await prisma.payment.upsert({
      where: { enrollmentId: enrollment.id },
      update: {
        razorpayPaymentId: paymentId,
        status: nextStatus,
      },
      create: {
        enrollmentId: enrollment.id,
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        amount: enrollment.amount,
        currency: 'INR',
        status: nextStatus,
      },
    });

    return NextResponse.json({ success: true, data: { processed: true } });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to process webhook.' }, { status: 500 });
  }
}
