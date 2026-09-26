export interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  role: "SUPER_ADMIN" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}
