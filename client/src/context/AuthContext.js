import { SortAscendingOutlined } from "@ant-design/icons";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
