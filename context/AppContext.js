import React, { createContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  registros: [],
  favoritos: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};