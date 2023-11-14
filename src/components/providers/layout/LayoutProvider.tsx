import React, { ReactNode, useMemo } from 'react';
import { LayoutContext } from '../../../contexts/layout/layoutContext';

type LayoutProviderProps = {
  children: ReactNode | ReactNode[];
};

export default function LayoutProvider({ children }: LayoutProviderProps): JSX.Element {
  const value = useMemo(() => ({}), []);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}
