import { createContext, useContext } from "react";

const AppContext = createContext(); // create context

const AppProvider = ({ children }) => {
  // provider
  return (
    <AppContext.Provider value="frontend developer">
      {children}
    </AppContext.Provider>
  );
};
//custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
