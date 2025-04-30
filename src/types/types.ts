import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type LoginFormData = {
  email: string;
  password: string;
};
export type SignUpFormFieldsProps = {
  type?: ValidInputFieldsType;
  placeholder?: string;
  id?: string;
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
  success?: boolean;
  hint?: string;
  name: ValidFieldNames;
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
  valueAsNumber?: boolean;
};

export type ValidInputFieldsType = "text" | "email" | "password" | "number";

export type ValidFieldNames =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "confirmPassword";

// Form validation schema using Zod
export const signUpformSchema: ZodType = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginFormSchema: ZodType = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
