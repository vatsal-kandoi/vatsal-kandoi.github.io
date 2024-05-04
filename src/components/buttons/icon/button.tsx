import * as React from "react";
import { useTheme } from "styled-components";
import { Theme } from "../../../interfaces";
import { Container, IconContainer, createRippleEffectForButton } from "./styles";
import "../styles.css"

export interface IButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "size" | "onClick"> {
    /** Handler to be triggered on button click */
    onClick: () => void;
    children?: React.ReactElement;
    /** Size of the icon */
    size?: "small" | "medium" | "large"
}

const Button: React.FC<IButtonProps> = (props) => {
    const theme = useTheme() as Theme;
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const {onClick, children, size, ...remainingProps} = props;

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
            <IconContainer $size={size}>
                {children || <></>}
            </IconContainer>
        </Container>
    );
}

export default Button;