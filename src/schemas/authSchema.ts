import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type signupFormValues = z.infer<typeof signupSchema>;


export const loginSchema = z.object({
  email:z.email("Enter valid email"),
  password:z.string().min(6,"Password is required"),
})

export type LoginFormValues = z.infer<typeof loginSchema>