/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create the context
export const InViewContext = createContext();

// Create the provider component
export const InViewProvider = ({ children }) => {
  // State to store inView status
  const [inViewGlobal, setInViewGlobal] = useState("todo-list");

  return (
    <InViewContext.Provider value={{ inViewGlobal, setInViewGlobal }}>
      {children}
    </InViewContext.Provider>
  );
};

// Custom hook to use the inView context
export const useInViewGlobal = () => {
  return useContext(InViewContext);
};
