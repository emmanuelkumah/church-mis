interface CardComponentProps {
  children?: React.ReactNode;
  className?: string;
}
const CardComponent: React.FC<CardComponentProps> = ({
  children,
  className,
}) => {
  return <div className={`bg-white rounded-xl ${className}`}>{children}</div>;
};

export default CardComponent;
