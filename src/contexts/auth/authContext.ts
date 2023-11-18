import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type AuthContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuthContext = () => useContext<AuthContextProps>(AuthContext);
