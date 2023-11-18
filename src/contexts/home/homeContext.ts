import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type HomeContextProps = {
  hideValues: boolean;
  setHideValues: Dispatch<SetStateAction<boolean>>;
};

export const HomeContext = createContext({} as HomeContextProps);

export const useHomeContext = () => useContext(HomeContext);
