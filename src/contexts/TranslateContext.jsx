import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ceviri } from "../language";
export const TransleteContext = createContext();

export default function TransleteContextProvider({ children }) {
  const [leanguage, setLeanguage] = useState(() => {
    const savedLeanguage = localStorage.getItem("leanguage");
    return savedLeanguage === "tr" || savedLeanguage === "en"
      ? savedLeanguage
      : "en";
  });
  const [currentContent, setCurrentContent] = useState(ceviri[leanguage]);
  useEffect(() => {
    localStorage.setItem("leanguage", leanguage);

    axios
      .post("https://reqres.in/api/workintech", ceviri[leanguage])
      .then((response) => {
        setCurrentContent(response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }, [leanguage]);

  const changeLeanguage = () => {
    setLeanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <TransleteContext.Provider
      value={{ leanguage, setLeanguage, changeLeanguage, currentContent }}
    >
      {children}
    </TransleteContext.Provider>
  );
}
