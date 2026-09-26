export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";

export interface Enrollment {
  id: string;
  enrollmentNumber: string;
  fullName: string;
  email: string;
  phone: string;
  qualification?: string | null;
  graduationYear?: number | null;
  city?: string | null;
  courseId: string;
  amount: number;
  paymentStatus: PaymentStatus;
  razorpayOrderId?: string | null;
  razorpayPaymentId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
