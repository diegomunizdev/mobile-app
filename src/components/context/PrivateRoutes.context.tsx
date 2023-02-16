import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAccounts } from "../../hooks/useAccounts";
import { IUseAccountState } from "../../application/types";

interface PrivateRoutesContextProps {
  state: IUseAccountState;
}

const PrivateRoutesContext = createContext<PrivateRoutesContextProps>(
  {} as unknown as PrivateRoutesContextProps
);
export const usePrivateRoutesContext = () =>
  useContext<PrivateRoutesContextProps>(PrivateRoutesContext);

interface PrivateRoutesProps {
  children?: ReactNode;
}

const PrivateRoutesProvider = ({ children }: PrivateRoutesProps) => {
  const { state, getAccountById } = useAccounts();

  useEffect(() => {
    getAccountById({ id: "907d1585-c6c3-4007-bdd3-a5e6d6725007" });
  }, []);

  const value = useMemo(() => ({ state }), [state]);

  return (
    <PrivateRoutesContext.Provider value={value}>
      {children}
    </PrivateRoutesContext.Provider>
  );
};

export default PrivateRoutesProvider;
