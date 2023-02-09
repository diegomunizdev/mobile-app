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

interface HomeContextProps {
  state: IUseAccountState;
}

const HomeContext = createContext<HomeContextProps>(
  {} as unknown as HomeContextProps
);
export const useHomeContext = () => useContext<HomeContextProps>(HomeContext);

interface HomeProps {
  children?: ReactNode;
}

const HomeProvider = ({ children }: HomeProps) => {
  const { state, getAccountById } = useAccounts();

  useEffect(() => {
    getAccountById({ id: "907d1585-c6c3-4007-bdd3-a5e6d6725007" });
  }, []);

  const value = useMemo(() => ({ state }), [state]);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
