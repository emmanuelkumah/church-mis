import { FieldError, UseFormRegister } from "react-hook-form";
export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormFieldsProps = {
  type: string;
  plcaceholder: string;
  name: string;
  id: string;
  register: UseFormRegister<FormData>;
  error?: FieldError;
  valueAsNumber?: boolean;
};
