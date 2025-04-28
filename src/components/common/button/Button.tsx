interface ButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger" | "success";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  className,
  onClick,
  type = "submit",
  startIcon,
  endIcon,
  size = "medium",
  variant = "primary",
}) => {
  //Size classes
  const sizeClasses = {
    small: "h-8 px-4 text-sm",
    medium: "h-10 px-6 text-base",
    large: "h-12 px-8 text-lg",
  };
  //Button classes
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className} `}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
      {startIcon && <span className="ml-2">{startIcon}</span>}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
