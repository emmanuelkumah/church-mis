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

export type CSFormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: string;
  fatherName: string;
  motherName: string;
  contact?: number;
  residence: string;
  image?: string;
};

export type FormFieldsProps<T extends Record<string, any>> = {
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
  name: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  valueAsNumber?: boolean;
};

export type ChildrenServiceFieldProps = {
  type?: ValidInputFieldsType;
  placeholder?: string;
  id?: string;
  className?: string;
  value?: string | number;
  register: UseFormRegister<CSFormData>;
  name: string;
  error?: FieldError;
};
export type ValidInputFieldsType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date";

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

export const csFormSchema: ZodType = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  age: z.coerce.number().min(1, "Age is required"),
  fatherName: z.string().min(1, "Father's name is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  contact: z.string().optional(),
  residence: z.string().min(1, "Residence is required"),
});

// Tables
export type TableProps = {
  children: React.ReactNode;
  className?: string;
};
export type TableHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type TableBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type TableRowProps = {
  children: React.ReactNode;
  className?: string;
};
export type TableCellProps = {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
};
