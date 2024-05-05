import styled from "styled-components";
import { hexToRGB } from "../../../utils/themes";
import { Theme } from "../../../interfaces";

const getButtonFontSize = (size: "small" | "medium" | "large"): string => {
    if (size === "small") return "2rem";
    if (size === "medium") return "4rem";
    if (size === "large") return "6rem";
    return "2rem";
}

const IconContainer = styled.div.attrs<{ $size?: "small" | "medium" | "large" }>((props) => ({
	$size: props.$size || "small"
}))`
    width: ${props => getButtonFontSize(props.$size || "small")};
    height: ${props => getButtonFontSize(props.$size || "small")};
    fill: ${props => props.theme.palette.background_contrast};

    &:hover {        
        fill: ${props => hexToRGB(props.theme.palette.background_contrast, 0.8)};        
    }
`

const Container = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    color: ${props => (props.theme as Theme).palette.primary};
    border: none;
    background-color: transparent;

    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;

    &:hover {        
        background-color: ${props => hexToRGB(props.theme.palette.primary, 0.2)};        
    }
`;

const createRippleEffectForButton = (x: number, y: number, theme: Theme, buttonRef: HTMLButtonElement) => {
    const span = document.createElement("span");
    span.classList.add("button-click-ripple");
    span.style.backgroundColor = hexToRGB(theme.palette.primary, 0.3);
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    buttonRef.appendChild(span)

    setTimeout(() => buttonRef.removeChild(span), 500);
}


export { Container, IconContainer, createRippleEffectForButton };