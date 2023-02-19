import { createContext, useContext, useReducer } from "react";
import { reducer } from "../src/reducer";

const AppContext = createContext(); // create context

const initialState = {
  name: "",
  image: "",
  role: "",
};
const AppProvider = ({ children }) => {
  // provider
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Abhinash",
        image: "./images/hero.svg",
        role: "frontend developer",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Abhinash Bhengra",
        image: "./images/about1.svg",
        role: "frontend developer",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
