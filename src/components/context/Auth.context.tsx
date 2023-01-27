import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthenticationFormField } from "../../application/domain/FormFields/auth.formFields";

interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: (data: AuthenticationFormField) => void;
  signOut: () => void;
  signUp: () => void;
}

const AuthContext = createContext<AuthContextProps>(
  {} as unknown as AuthContextProps
);
export const useAuthContext = () => useContext<AuthContextProps>(AuthContext);

interface AuthProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  const signIn = useCallback((data: AuthenticationFormField) => {
    console.log("DATA", data);
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  const signUp = useCallback(() => {}, []);

  const value = useMemo(
    () => ({ isAuthenticated, signIn, signOut, signUp }),
    [isAuthenticated, signIn, signOut, signUp]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
