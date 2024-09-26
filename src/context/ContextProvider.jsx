import { useContext, createContext, useState } from "react";

export const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  // const value = {
  //   activeMenu,
  //   setActiveMenu,
  // };

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};
