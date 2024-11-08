import { useContext } from "react";
import {DarkModeContext}  from "../contexts/DarkModeContext";

export default function useDark() {
    return useContext(DarkModeContext)
}