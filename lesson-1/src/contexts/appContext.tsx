import React, { useState } from 'react';
import { createContext } from 'react';

export type AppType = {
  currentAccount: string | null;
}

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<{
  data: AppType;
  updateData: (newData: Partial<AppType>) => void;
}>({
  data: {} as AppType,
  updateData: () => ({}),
});

export const AppProvider: React.FunctionComponent<IAppProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<AppType>({} as AppType);
  const updateData = (newData: Partial<AppType>) => {
    setData((prevState) => ({ ...prevState, ...newData }));
  };
  const value = { data, updateData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
