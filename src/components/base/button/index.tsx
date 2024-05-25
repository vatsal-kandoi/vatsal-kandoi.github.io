import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../../interfaces";
import { hexToRGB } from "../../../themes/utils";

const ButtonContainer = styled.button<{ $variant: "primary" | "secondary" }>`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };
    color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.text.primary : (props.theme as Theme).palette.text.secondary };
    border: none;
    border-radius: 0.25rem;
    transition: background-color 0.1s, color 0.1s;
    transition-timing-function: linear;

    &:hover {
        background-color: ${props => hexToRGB((props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary, 0.8) };
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    }

    &:active {
        background-color: ${props => hexToRGB((props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary, 0.8) };
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    }    
`

interface IButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
    children: React.ReactElement | React.ReactElement[] | string;
    variant?: "primary" | "secondary";
}


const Button: React.FC<IButtonProps> = ({ children, variant, ...props}) => {
    
    return (
        <ButtonContainer $variant={variant || "primary"} {...props}>
            {children}
        </ButtonContainer>
    );
}

export default Button;