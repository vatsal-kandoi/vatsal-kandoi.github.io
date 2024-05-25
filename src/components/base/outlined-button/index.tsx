import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../../interfaces";

const Button = styled.button<{ $variant: "primary" | "secondary" }>`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${props => (props.theme as Theme).palette.background};
    color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };
    border-radius: 0.25rem;
    border-width: 0.1rem;
    border-color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };
    border-style: solid;

    &:hover {
        background-color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };
        color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.text.primary : (props.theme as Theme).palette.text.secondary };
        transition: background-color 0.1s, color 0.1s;
        transition-timing-function: linear;
    }

    &:active {
        background-color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };
        color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.text.primary : (props.theme as Theme).palette.text.secondary };        
        transition: background-color 0.1s, color 0.1s;
        transition-timing-function: linear;
    }    
`

interface IButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
    children: React.ReactElement | React.ReactElement[] | string;
    variant?: "primary" | "secondary";
}


const OutlinedButton: React.FC<IButtonProps> = ({ children, variant, ...props}) => {
    
    return (
        <Button $variant={variant || "primary"} {...props}>
            {children}
        </Button>
    );
}

export default OutlinedButton;