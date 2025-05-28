import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  FiUser,
  FiTrendingUp,
  FiLayers,
  FiRepeat,
  FiMenu,
  FiX,
} from "react-icons/fi";

type MenuItem = {
  to: string;
  label: string;
  icon: React.ElementType;
};

const Sidebar = () => {
  const { ticker } = useParams<{ ticker: string }>(); // Get ticker for dynamic links
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { to: "company-profile", label: "Company Profile", icon: FiUser },
    { to: "income-statement", label: "Income Statement", icon: FiTrendingUp },
    { to: "balance-sheet", label: "Balance Sheet", icon: FiLayers },
    { to: "cashflow-statement", label: "Cashflow Statement", icon: FiRepeat },
  ];

  const baseLinkClasses =
    "flex items-center px-4 py-3 text-gray-700 hover:bg-lightBlue hover:text-white rounded-md transition-colors duration-150 group";
  const activeLinkClasses = "bg-darkBlue text-white shadow-md";

  const sidebarContent = (
    <div className="py-6 px-4 space-y-3">
      <h2 className="px-4 mb-4 text-xl font-semibold text-gray-800">
        {ticker ? ticker.toUpperCase() : "Company"} Menu
      </h2>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive ? activeLinkClasses : "hover:bg-gray-100"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on link click
          >
            <item.icon
              className={`h-5 w-5 mr-3 flex-shrink-0 ${
                activeLinkClasses
                  ? "text-white"
                  : "text-gray-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-5">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-md shadow-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-20 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
                   w-64 md:w-72  /* Width of the sidebar */
                   ${
                     isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                   } /* Mobile slide in/out */
                   md:translate-x-0 /* Always visible on md and up */
                  `}
      >
        {sidebarContent}
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
