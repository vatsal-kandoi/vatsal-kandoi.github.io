import { Mode } from "./mode";

export interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;    
    xl: number;
}

interface TextPalette {
    primary: string;
    secondary: string;
    background: string;
    error: string;
}

interface Palette {
    primary: string;
    primary_variant: string;
    secondary: string;
    secondary_variant: string;
    background: string;
    background_contrast: string;    
    error: string;
    text: TextPalette;
}

export interface Theme {
    mode: Mode;
    breakpoints: Breakpoints;
    palette: Palette;
}