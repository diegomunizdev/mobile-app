import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface HomeContextProps {}

const HomeContext = createContext<HomeContextProps>(
  {} as unknown as HomeContextProps
);
export const useHomeContext = () => useContext<HomeContextProps>(HomeContext);

interface HomeProps {
  children?: ReactNode;
}

const HomeProvider = ({ children }: HomeProps) => {
  const value = useMemo(() => ({}), []);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
