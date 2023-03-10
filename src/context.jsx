import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../src/reducer";

const AppContext = createContext(); // create context

const API =
  "https://95aba5c2-b487-47cd-b1cc-3ef87a59cc9e.mock.pstmn.io/getServices";

const initialState = {
  name: "",
  image: "",
  role: "",
  services: [],
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
  //api data
  const getServices = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  // api call
  useEffect(() => {
    getServices(API);
  }, []);

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
