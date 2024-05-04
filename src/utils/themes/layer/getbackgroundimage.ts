import { Mode } from "../../../interfaces";

export default function getBackgroundImageForLayer(elevation: number, mode: Mode) {
    if (mode === Mode.LIGHT) return "none"
    switch (elevation) {
        case (0): {
            return "none"
        }
        case (1): {
            return "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))"
        }
        default: {
            return "none"
        }
    }
}