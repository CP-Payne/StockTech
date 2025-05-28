import React, { SyntheticEvent, useState } from "react";
import logo from "./StockTechLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import Search from "../Search/Search";
import { useLocation } from "react-router";
import { isSea } from "node:sea";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const [navSearchTerm, setNavSearchTerm] = useState<string>("");

  const isSearchPage = location.pathname === "/search";

  const homePath = isLoggedIn() ? "/search" : "/";

  const handleNavSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavSearchTerm(e.target.value);
  };

  const handleNavSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (navSearchTerm.trim() !== "") {
      if (isSearchPage) {
        navigate(`/search?q=${encodeURIComponent(navSearchTerm.trim())}`, {
          replace: true,
        });
      } else {
        navigate(`/search?q=${encodeURIComponent(navSearchTerm.trim())}`);
      }
      // Clear search input
      // setNavSearchTerm("");
    }
  };

  return (
    <nav className="relative w-full p-1 px-10 bg-gray-100 shadow-md">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-between space-x-12 w-[50%]">
          <Link to={homePath}>
            <img className="w-24" src={logo} alt="logo" />
          </Link>

          {isLoggedIn() && (
            <div className="flex-grow max-w-md mx-4">
              {isSearchPage ? (
                <Search
                  search={navSearchTerm}
                  handleSearchChange={handleNavSearchChange}
                  onSearchSubmit={handleNavSearchSubmit}
                />
              ) : (
                <Link
                  to="/search"
                  className="text-black hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
                >
                  Search
                </Link>
              )}
            </div>
          )}
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.username}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
