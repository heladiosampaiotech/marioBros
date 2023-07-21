import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({}); // Definindo o estado para data

  useEffect(() => {
    setData({ name: 'Heladio', age: 35 });
  }, []);

  return (
    <UserContext.Provider value={{ login, setLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
