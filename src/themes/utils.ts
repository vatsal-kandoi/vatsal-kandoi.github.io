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
    return createTheme(Mode.LIGHT);
}

/**
 * Get the paper overlay color
 */
const getLayerOvelay = (theme: Theme, num: number) => {
    if (num === 0) return theme.palette.background;
    if (theme.mode === Mode.DARK) return `rgba(255,255,255,${ (num) / 12 * 0.12 + 0.05})`
    return "none";
}

const getContrast = (theme: Theme, opacity: number) => {
    return hexToRGB(theme.palette.background_contrast, opacity);    
}

const getBoxShadow = (theme: Theme, num: number) => {
    // Taken from Material UI
    switch (num) {
        case 0: return "none";
        case (1): return "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";
        case (2): return "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)";
        case (3): return "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)";
        case (4): return "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)";
        case (5): return "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)";
        case (6): return "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)";
        default: return "none";        
    }
}

/**
 * Convert the hex code into RGBA
 * @param hex Hex code for color
 * @param alpha Opacity
 * @returns rgba(...)
 */
const hexToRGB = (hex: string, alpha: number | null = null) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


export { createTheme, getDefaultTheme, hexToRGB, getLayerOvelay, getBoxShadow, getContrast };