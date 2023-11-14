import React, { ReactNode, useMemo } from 'react';
import { AuthContext } from '../../../contexts/auth/authContext';

type AuthProviderProps = {
  children: ReactNode | ReactNode[];
};

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const value = useMemo(() => ({}), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
