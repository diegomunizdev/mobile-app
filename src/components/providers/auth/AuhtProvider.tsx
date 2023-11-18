import React, { ReactNode, useMemo, useState } from 'react';
import { AuthContext } from '../../../contexts/auth/authContext';

type AuthProviderProps = {
  children: ReactNode | ReactNode[];
};

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const value = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
