import React, { useState } from "react";
import { routes } from "../routes";
import { useNavigate } from "react-router-dom";
import { Profile } from "./Profile/Profile";

const menuItems = [
  { title: "All recipes", path: routes.recipes.recipes },
  { title: "Tools", path: routes.recipes.recipes },
  { title: "Rate us", path: routes.recipes.recipes },
];

export const Header = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (itemPath: string) => {
    navigate(itemPath);
    setSidebarOpen(false);
  };

  const handleUpdateMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
      setMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    }
  };

  return (
    <div className="flex items-center bg-gray-800 text-white px-4 py-3 shadow-md">
      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center justify-between">
          {/* Hamburger Icon */}
          <button className="block focus:outline-none" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <img
            className="w-16 h-12"
            src="/images/Dr.cook logo.png"
            alt="Dr.Cook logo"
          />
          <span className="light:text-gray-900 text-3xl font-pacifico text-white">
            Dr.Cook
          </span>
        </div>

        <div className="flex items-center gap-5">
          <img
            onClick={handleUpdateMode}
            className="w-10 h-10 cursor-pointer"
            src={`/images/${mode}.png`}
            alt="mode"
          />
          <Profile />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-700 text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-600">
          <div></div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleItemClick(item.path)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
