import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { User } from "../features/user";

export interface UserContextInterface {
  user: User | null;
  handleUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  handleUser: () => {},
});

export const useUser = () => useContext(UserContext);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const handleUser = useCallback((userData: User | null) => {
    setUser(userData);
  }, []);

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
}
