import * as React from "react";
import { useTheme } from "styled-components";
import { Theme } from "../../../interfaces";
import { Container, createRippleEffectForButton } from "./styles";
import "../styles.css"

export interface IButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> {
    /** Handler to be triggered on button click */
    onClick: () => void;
    children?: React.ReactElement;
}

const Button: React.FC<IButtonProps> = (props) => {
    const theme = useTheme() as Theme;
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const {onClick, children, ...remainingProps} = props;

    const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (buttonRef?.current === null) return;
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;

        createRippleEffectForButton(x, y, theme, buttonRef?.current);

        if(onClick !== undefined) {
            onClick();
        }
    }

    return (
        <Container onClick={click}
            ref={buttonRef}
            {...remainingProps}>
            {children || <></>}
        </Container>
    );
}

export default Button;