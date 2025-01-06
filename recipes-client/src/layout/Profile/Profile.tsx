import React, { useState, useRef } from "react";
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { appStorage } from "../../services";

export const Profile = () => {
  const { user, handleUser } = useUser();
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    handleUser(null);
    setMenuOpen(false);
    appStorage.setToken("");
  };

  // Close the menu if clicked outside
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <button onClick={toggleMenu}>
        <img
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          src={user?.id ? "/images/profile.png" : "/images/graduation.png"}
          alt="User Avatar"
        />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
          <div className="px-4 py-2 text-gray-800 text-sm font-medium">
            Hello, {user?.name || "Guest"}
          </div>
          <hr className="border-gray-200" />

          <button
            onClick={() => {
              if (user?.id) {
                handleSignOut();
                return;
              }
              navigate(routes.auth.login);
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            {user?.id ? "Sign Out" : "Sign In"}
          </button>
        </div>
      )}
    </div>
  );
};
