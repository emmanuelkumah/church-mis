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
}

const InputControl: React.FC<InputControlProps> = ({
  type,
  placeholder,
  value,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        id="inputField"
        className="form-control"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
export default InputControl;
