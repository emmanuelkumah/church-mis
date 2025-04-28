import { ReactNode } from "react";

const LayoutWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col bg-brand-50  min-h-screen w-full max-w-[120em]  ${className}`}
    >
      {children}
    </div>
  );
};
export default LayoutWrapper;
