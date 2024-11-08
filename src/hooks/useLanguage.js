import { useContext } from "react";
import { TransleteContext } from "../contexts/TranslateContext"

export default function useLanguage() {
    return useContext(TransleteContext)
}