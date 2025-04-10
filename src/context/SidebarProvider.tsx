import React, { useState, useContext, createContext, useEffect } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  isSidebarExpanded: boolean;
  isSidebarHovered: boolean;
  setIsSidebarHovered: (isHovered: boolean) => void;
  toggleSidebar: () => void;
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("Error: useSidebar must be used within a SidebarProvider");
  }
  return context;
};

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };
  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const onMobile = window.innerWidth < 768;
      setIsMobileOpen(onMobile);
      if (!onMobile) {
        setIsMobileOpen(false);
      }
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isSidebarExpanded: isMobile ? false : isSidebarExpanded,
        isSidebarHovered,
        isMobileOpen,
        toggleMobileSidebar,
        toggleSidebar,
        setIsSidebarHovered,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
