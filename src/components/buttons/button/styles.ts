import styled from "styled-components";
import { hexToRGB } from "../../../utils/themes";
import { Theme } from "../../../interfaces";

const Container = styled.button`
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;

    color: ${props => (props.theme as Theme).palette.text.primary};
    border: none;
    background-color: ${props => (props.theme as Theme).palette.primary};

    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;

    &:hover {        
        background-color: ${props => hexToRGB(props.theme.palette.primary, 0.8)};        
    }
`;

const createRippleEffectForButton = (x: number, y: number, theme: Theme, buttonRef: HTMLButtonElement) => {
    const span = document.createElement("span");
    span.classList.add("button-click-ripple");
    span.style.backgroundColor = hexToRGB(theme.palette.background, 0.3);
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    buttonRef.appendChild(span)

    setTimeout(() => buttonRef.removeChild(span), 500);
}


export { Container, createRippleEffectForButton };