import { redirect } from 'next/navigation';
import { upfrontPaymentUrl } from '@/lib/payment';

export default function EnrollPage() {
  redirect(upfrontPaymentUrl);
}
