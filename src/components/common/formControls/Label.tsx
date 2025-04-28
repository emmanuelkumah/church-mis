interface LabelProps {
  children?: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
export default Label;
