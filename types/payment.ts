export interface PaymentRecord {
  id: string;
  enrollmentId: string;
  razorpayOrderId?: string | null;
  razorpayPaymentId?: string | null;
  amount: number;
  currency: string;
  status: "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";
  signature?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
