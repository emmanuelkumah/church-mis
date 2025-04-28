interface InputControlProps {
  type?: "text" | "email" | "password" | "number";
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
  error?: boolean;
  success?: boolean;
  hint?: string;
  name?: string;
}

const InputControl: React.FC<InputControlProps> = ({
  type,
  placeholder,
  value,
  name,
  className,
  min,
  max,
  id,
  disabled,
  required,
  error = false,
  success = false,
  hint,
}) => {
  let inputClasses = `h-11 w-full border p-2 shadow-theme-xs border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`;
  if (disabled) {
    inputClasses += "bg-gray-200 cursor-not-allowed opacity-50";
  } else if (error) {
    inputClasses += "border-red-500 focus:ring-red-500 focus:border-red-500";
  } else if (success) {
    inputClasses +=
      "border-green-500 focus:ring-green-500 focus:border-green-500";
  } else {
    inputClasses += "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  }
  return (
    <div>
      <input
        type={type}
        id={id}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        max={max}
        min={min}
        disabled={disabled}
        required={required}
        name={name}
      />
      {hint && <p>{hint}</p>}
    </div>
  );
};
export default InputControl;
