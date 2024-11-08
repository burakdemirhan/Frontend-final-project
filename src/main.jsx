import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DarkModeProvider from "./contexts/DarkModeContext.jsx"
import TransleteContextProvider from "./contexts/TranslateContext.jsx"  

createRoot(document.getElementById("root")).render(
  <TransleteContextProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </TransleteContextProvider>
);
