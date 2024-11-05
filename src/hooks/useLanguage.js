import { useContext } from "react";
import { TransleteContext } from "../TranslateContext";

export default function useLanguage() {
    return useContext(TransleteContext)
}