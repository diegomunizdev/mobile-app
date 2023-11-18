import React, { ReactNode, useMemo, useState } from 'react';
import { HomeContext } from '../../../contexts/home/homeContext';

type HomeProviderProps = {
  children: ReactNode | ReactNode[];
};

export default function HomeProvider({ children }: HomeProviderProps): JSX.Element {
  const [hideValues, setHideValues] = useState<boolean>(false);

  const value = useMemo(() => ({ hideValues, setHideValues }), [hideValues, setHideValues]);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
