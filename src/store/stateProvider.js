import { createContext, useContext, useReducer } from "react";

export const RootContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <RootContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </RootContext.Provider>
  );
};

export const useStateValue = () => useContext(RootContext);
