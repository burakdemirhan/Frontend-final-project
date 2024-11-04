import { useContext } from "react";
import {DarkModeContext}  from "../DarkModeContext";

export default function useDark() {
    return useContext(DarkModeContext)
}