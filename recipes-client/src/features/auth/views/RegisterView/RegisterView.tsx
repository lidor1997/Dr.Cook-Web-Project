import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context";
import { register } from "../../api";
import { appStorage } from "../../../../services";
import { routes } from "../../../../routes";

export function RegisterView() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleUser } = useUser();

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const user = await register({ name, username, password });

      appStorage.setToken(user.token);
      handleUser(user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginRedirect = () => {
    navigate(routes.auth.login);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-[340px] md:max-w-md">
        <div className="flex items-center justify-center gap-2 md:gap-2.5 mb-4 md:mb-6">
          <img
            src="/images/Dr.cook logo.png"
            alt="Dr.Cook Logo"
            className="w-14 h-10 md:w-18 md:h-12"
          />
          <span className="text-2xl md:text-3xl font-['Pacifico'] text-amber-800 dark:text-white">
            Dr.Cook
          </span>
        </div>

        <form
          id="signupForm"
          className="bg-white dark:bg-[#2A3236] shadow-lg rounded-lg p-6 md:p-8 space-y-4 md:space-y-6"
        >
          <h1 className="text-2xl md:text-3xl font-['Pacifico'] text-center text-amber-800 dark:text-white mb-6 md:mb-8">
            Create an Account!
          </h1>

          <div
            id="errorMessage"
            className="hidden text-red-500 text-center text-sm"
          ></div>

          <div>
            <label
              htmlFor="name"
              className="block text-amber-800 dark:text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base"
            >
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Enter your name"
              className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-amber-800 dark:border-white focus:outline-none focus:ring-2 focus:ring-amber-800 dark:focus:ring-white focus:ring-offset-2 placeholder:text-amber-800/60 dark:placeholder:text-black text-sm md:text-base"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-amber-800 dark:text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-amber-800 dark:border-white focus:outline-none focus:ring-2 focus:ring-amber-800 dark:focus:ring-white focus:ring-offset-2 placeholder:text-amber-800/60 dark:placeholder:text-black text-sm md:text-base"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-amber-800 dark:text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-amber-800 dark:border-white focus:outline-none focus:ring-2 focus:ring-amber-800 dark:focus:ring-white focus:ring-offset-2 placeholder:text-amber-800/60 dark:placeholder:text-black text-sm md:text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full rounded-full border border-amber-800 dark:border-white text-amber-800 dark:text-white bg-gray-100 dark:bg-gray-800 p-2 md:p-2.5 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm md:text-base cursor-pointer mt-2"
          >
            Sign Up
          </button>

          <p className="text-center text-amber-800 dark:text-white mt-4 text-sm md:text-base">
            Already have an account?
            <span
              onClick={handleLoginRedirect}
              className="text-amber-800 dark:text-white font-semibold hover:text-amber-900 dark:hover:text-gray-300 cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
