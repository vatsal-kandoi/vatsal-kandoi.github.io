import styled from "styled-components";
import { hexToRGB } from "../../../utils/themes";
import { Theme } from "../../../interfaces";

const Container = styled.button`
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;

    color: ${props => props.theme.palette.text.background};
    border: none;
    background-color: transparent;

    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;

    &:hover {        
        background-color: ${props => hexToRGB(props.theme.palette.background_contrast, 0.1)};        
    }
`;

const createRippleEffectForButton = (x: number, y: number, theme: Theme, buttonRef: HTMLButtonElement) => {
    const span = document.createElement("span");
    span.classList.add("button-click-ripple");
    span.style.backgroundColor = hexToRGB(theme.palette.primary, 0.3);
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    buttonRef.appendChild(span)

    setTimeout(() => buttonRef.removeChild(span), 300);
}


export { Container, createRippleEffectForButton };