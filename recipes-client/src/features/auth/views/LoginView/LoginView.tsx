import { useState } from "react";
import { login } from "../../api";
import { appStorage } from "../../../../services";
import { useUser } from "../../../../context";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

export function LoginView() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleUser } = useUser();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const user = await login({ username, password });

      appStorage.setToken(user.token);
      handleUser(user);
      navigate(routes.recipes.recipes);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegisterRedirect = () => {
    navigate(routes.auth.register);
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
          id="loginForm"
          className="bg-white dark:bg-[#2A3236] shadow-lg rounded-lg p-6 md:p-8 space-y-4 md:space-y-6"
        >
          <h1 className="text-2xl md:text-3xl font-['Pacifico'] text-center text-amber-800 dark:text-white mb-6 md:mb-8">
            Welcome Back!
          </h1>

          <div
            id="errorMessage"
            className="hidden text-red-500 text-center text-sm"
          ></div>

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
            onClick={handleLogin}
            className="w-full rounded-full border border-amber-800 dark:border-white text-amber-800 dark:text-white bg-gray-100 dark:bg-gray-800 p-2 md:p-2.5 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm md:text-base cursor-pointer mt-2"
          >
            Login
          </button>

          <p className="text-center text-amber-800 dark:text-white mt-4 text-sm md:text-base">
            Don't have an account?
            <span
              onClick={handleRegisterRedirect}
              className="text-amber-800 dark:text-white font-semibold hover:text-amber-900 dark:hover:text-gray-300 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
