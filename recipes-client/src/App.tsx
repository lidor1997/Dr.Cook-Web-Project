import { useEffect } from "react";
import { useUser } from "./context";
import { AppRoutes } from "./routes";
import { appStorage } from "./services";
import { loginByToken } from "./features/auth/api";
import { Header } from "./layout";

function App() {
  const { handleUser } = useUser();

  useEffect(() => {
    const token = appStorage.getToken();

    const executeLoginByToken = async () => {
      if (!token) return;

      const user = await loginByToken();

      if (user) {
        handleUser(user);
      }
    };
    executeLoginByToken();
  }, [handleUser]);

  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="App dark:bg-[#202124] h-screen overflow-auto">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
