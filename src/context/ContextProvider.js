import { useContext, createContext } from "react";

export const StateContext = createContext({
  activeMenu: true,
});

export const useStateContext = () => {
  return useContext(StateContext);
};

export const ContextProvider = StateContext.Provider;
