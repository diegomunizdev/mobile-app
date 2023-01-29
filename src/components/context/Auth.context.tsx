import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { IAuthenticationFormField } from "../../application/types";
import { useAuth } from "../../hooks/auth";

interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: (variables: IAuthenticationFormField) => void;
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
  const { state, signIn, signOut } = useAuth();

  const signUp = useCallback(() => {}, []);

  const value = useMemo(
    () => ({ isAuthenticated: state.isAuthenticated, signIn, signOut, signUp }),
    [signIn, signOut, signUp, state.isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
