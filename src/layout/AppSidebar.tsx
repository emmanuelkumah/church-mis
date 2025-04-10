import { useSidebar } from "../context/SidebarProvider";
import { Link, useLocation } from "react-router";
import { navItems } from "../data/NavItems";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const AppSidebar = () => {
  const [openSubMenus, setOpenSubMenus] = useState<null | number>(null);

  console.log(openSubMenus);
  const {
    isSidebarExpanded,
    isSidebarHovered,
    isSidebarOpen,
    isMobileOpen,
    setIsSidebarHovered,
  } = useSidebar();

  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenus((prevOpenSubMenus) => {
      if (prevOpenSubMenus === index) {
        return null;
      }
      return index;
    });
  };
  const renderMenuItems = (items = navItems) => {
    return (
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => {
          return (
            <li key={item.title}>
              {item.subMenu ? (
                <button
                  onClick={() => handleSubMenuToggle(index)}
                  className={`menu-item group ${
                    !isSidebarExpanded && !isSidebarHovered
                      ? "lg:justify-center"
                      : "lg:justify-start"
                  } ${
                    openSubMenus === index
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  } cursor-pointer`}
                >
                  <span
                    className={`menu-item-icon-size ${
                      openSubMenus === index
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {(isSidebarExpanded || isSidebarHovered || isMobileOpen) && (
                    <span className="menu-item-text">{item.title}</span>
                  )}

                  {(isSidebarExpanded || isSidebarHovered || isMobileOpen) && (
                    <ChevronDoubleDownIcon
                      className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                        openSubMenus === index && "text-brand-500 rotate-180"
                      }`}
                    />
                  )}
                </button>
              ) : (
                item.path && (
                  <Link
                    to={item.path}
                    className={`menu-item group ${
                      isActive(item.path)
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        isActive(item.path)
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {(isSidebarExpanded ||
                      isSidebarHovered ||
                      isMobileOpen) && (
                      <span className={`menu-item-text`}>{item.title}</span>
                    )}
                  </Link>
                )
              )}
              {item.subMenu &&
                (isSidebarExpanded || isSidebarHovered || isMobileOpen) && (
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openSubMenus === index ? "1000px" : "0px",
                    }}
                  >
                    <ul className="mt-2 space-y-1 ml-9">
                      {item.subMenu.map((subItem, index) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.path}
                            className={`menu-dropdown-item ${
                              isActive(subItem.path)
                                ? "menu-dropdown-item-active"
                                : "menu-dropdown-item-inactive"
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <aside
      className={`fixed flex flex-col bg-white h-screen mt-16 lg:mt-0 top-0 left-0 px-5 transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isSidebarExpanded || isMobileOpen
            ? "w-[290px]"
            : isSidebarHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
     lg:translate-x-0 `}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isSidebarExpanded || !isSidebarHovered
            ? "lg:justify-center"
            : "lg:justify-start"
        }`}
      >
        <Link to="/dashboard">
          {isSidebarExpanded || isSidebarHovered || isMobileOpen ? (
            <img src="../../images/pcglogo.png" />
          ) : (
            <img
              src="../../images/pcgIcon.JPG"
              alt="Logo"
              width={40}
              height={40}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto  scrollbar-hidden duration-300 ease-linear">
        <nav>{renderMenuItems()}</nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
