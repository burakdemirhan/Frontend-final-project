import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DarkModeProvider from "./DarkModeContext";
import TransleteContextProvider from "./TranslateContext.jsx";

createRoot(document.getElementById("root")).render(
  <TransleteContextProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </TransleteContextProvider>
);
