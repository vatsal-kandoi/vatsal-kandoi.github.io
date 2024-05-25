import { Mode, Theme }  from "../interfaces"
import { BASE_THEME } from "./base";

const LIGHT_THEME: Theme = {
    ...BASE_THEME,
    mode: Mode.LIGHT,
    palette: {
        primary: "#03AED2",
        primary_variant: "#68D2E8",
        secondary: "#03DAC6",
        secondary_variant: "#FEEFAD",
        background: "#FFFFFF",
        background_contrast: "#121212",
        error: "#B00020",
        text: { 
            primary: "#FFFFFF",
            secondary: "#000000",
            background: "#000000",
            error: "#FFFFFF"
        }
    }
}

export default LIGHT_THEME;