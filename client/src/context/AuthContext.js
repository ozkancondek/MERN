import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedBookList, setSelectedBookList] = useState([]);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setLoggedIn, selectedBookList, setSelectedBookList }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
