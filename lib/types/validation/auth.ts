import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address ").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z.object({
  email: z.email("Invalid email address ").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 character")
    .max(64, "Password must be smaller that 64 characters ")
    .regex(/[A-Z]/, "Password must contained at least one uppercase letter")
    .regex(/[a-z]/, "Password must contained at least one lowercase letter")
    .regex(/[0-9]/, "Password must contained at least one number"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
