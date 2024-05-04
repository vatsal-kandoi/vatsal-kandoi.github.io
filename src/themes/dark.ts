import { Mode, Theme } from "../interfaces"
import { BASE_THEME } from "./base";

const DARK_THEME: Theme = {
    ...BASE_THEME,
    mode: Mode.DARK,
    palette: {
        primary: "#BB86FC",
        primary_variant: "#3700B3",
        secondary: "#03DAC6",
        secondary_variant: "#018789",
        background: "#121212",
        background_contrast: "#FFFFFF",
        error: "#CF6679",
        text: { 
            primary: "#000000",
            secondary: "#000000",
            background: "#FFFFFF",
            error: "#000000"
        }
    }
}

export default DARK_THEME;