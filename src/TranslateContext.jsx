import { createContext, useEffect, useState } from "react";

export const TransleteContext = createContext();

export default function TransleteContextProvider({ children }) {
  const [leanguage, setLeanguage] = useState(() => {
    const savedLeanguage = localStorage.getItem("leanguage");
    return savedLeanguage === "tr" || savedLeanguage === "en"
      ? savedLeanguage
      : "en";
  });
  useEffect(() => {
    localStorage.setItem("leanguage", leanguage);
  }, [leanguage]);

  const changeLeanguage = () => {
    setLeanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <TransleteContext.Provider
      value={{ leanguage, setLeanguage, changeLeanguage }}
    >
      {children}
    </TransleteContext.Provider>
  );
}
