import { createContext, useContext, useReducer } from "react";

const RootContext = createContext<any>({} as any);

export const StateProvider = ({ initialState, reducer, children }: any) => {
  return (
    <RootContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </RootContext.Provider>
  );
};

export const useStateValue = () => useContext(RootContext);
