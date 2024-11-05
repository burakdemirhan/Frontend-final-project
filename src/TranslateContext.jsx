import { createContext, useState } from "react";

export const TransleteContext = createContext();

export default function TransleteContextProvider({ children }) {
  const [leanguage, setLeanguage] = useState(() => {
    const savedLeanguage = localStorage.getItem("leanguage");
    return savedLeanguage === "en";
  });
  useEffect(() => {
    localStorage.setItem("leanguage", leanguage);
  }, [leanguage]);

  const changeLeanguage = () => {
    setLeanguage(!leanguage);
  };

  return (
    <TransleteContext.Provider
      value={{ leanguage, setLeanguage, changeLeanguage }}
    >
      {children}
    </TransleteContext.Provider>
  );
}
