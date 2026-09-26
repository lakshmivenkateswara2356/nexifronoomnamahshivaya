import { z } from 'zod';

export const courseSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  shortDescription: z.string().min(10),
  description: z.string().min(20),
  fee: z.number().int().positive(),
  status: z.enum(['OPEN', 'CLOSED']),
  duration: z.string().min(2),
  image: z.string().min(1),
  technologies: z.array(z.string()).default([]),
  learningOverview: z.array(z.string()).default([]),
  projects: z.array(z.string()).default([]),
});

export const enrollmentFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone number is required'),
  courseId: z.string().min(1, 'Course is required'),
  qualification: z.string().optional().or(z.literal('')),
  graduationYear: z.coerce.number().int().min(1900).max(new Date().getFullYear() + 10).optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  termsAccepted: z.boolean().refine((value) => value === true, 'Please accept the terms'),
});

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10).optional().or(z.literal('')),
  message: z.string().min(10),
});

export const adminLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const paymentVerificationSchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});
