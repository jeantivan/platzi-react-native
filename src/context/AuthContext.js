import Rect, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: null,
  login: (user) => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const login = (user) => {
    setAuth(user);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
