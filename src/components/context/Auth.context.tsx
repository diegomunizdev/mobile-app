import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import {
  IAuthenticationFormField,
  IUseAuthState,
} from "../../application/types";
import { useAuth } from "../../hooks/auth";

interface AuthContextProps {
  state: IUseAuthState;
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
    () => ({
      state,
      isAuthenticated: state.isAuthenticated,
      signIn,
      signOut,
      signUp,
    }),
    [state, signIn, signOut, signUp]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
