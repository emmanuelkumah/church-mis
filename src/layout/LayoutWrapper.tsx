import { ReactNode } from "react";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full max-w-[120em] h-screen overflow-hideen mx-auto">
      {children}
    </div>
  );
};
export default LayoutWrapper;
