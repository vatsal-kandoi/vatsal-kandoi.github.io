import DARK_THEME from "./dark";
import { Theme, Mode }  from "../interfaces"
import LIGHT_THEME from "./light";

/**
 * Get the theme corresponding to the mode
 * @param mode Light or dark mode
 * @returns UI Theme
 */
const createTheme = (mode: Mode): Theme => {
    return (mode === Mode.DARK) ? DARK_THEME : LIGHT_THEME;
}

/**
 * Get the default theme
 * @returns UI Theme
 */
const getDefaultTheme = (): Theme => {
    return createTheme(Mode.DARK);
}

// const getPaperOvelay = () => {
//     0.05 to 0.14 background rgba  (0,0,0,0.05)
// }

export { createTheme, getDefaultTheme };