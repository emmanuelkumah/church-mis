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
      className={`relative flex flex-col w-full max-w-[120em]  h-screen overflow-hideen mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
export default LayoutWrapper;
