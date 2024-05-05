import { Breakpoints, Theme } from "../../../interfaces";

/**
 * Generate the media query brreak points for the given attribute
 */
export function generateBreakpoints(theme: Theme, cssProp: string, valueMap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string
}) {
    let mediaQueries = "";
    
    ["xs", "sm", "md", "lg", "xl"].forEach((breakpoint: string) => {
        mediaQueries += `        
            @media only screen and (min-width: ${theme.breakpoints[breakpoint as keyof Breakpoints]}px) {
                ${cssProp}: ${valueMap[breakpoint as keyof Breakpoints]};
            }      
        `
    });

    return mediaQueries;
};