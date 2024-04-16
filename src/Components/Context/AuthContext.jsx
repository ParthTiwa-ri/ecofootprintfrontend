/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

// Create a context with default values
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Load userId from local storage or use default value
    return localStorage.getItem("userId") || "661cfebb465b24534255d2c9";
  });
  const [isAuth, setIsAuth] = useState(() => {
    // Load isAuth from local storage or use default value
    return JSON.parse(localStorage.getItem("isAuth")) || false;
  });

  // Update local storage when userId or isAuth changes
  useEffect(() => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [userId, isAuth]);

  return (
    <AuthContext.Provider value={{ userId, isAuth, setIsAuth, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
export default AuthContext;
