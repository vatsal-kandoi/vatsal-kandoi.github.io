import * as React from "react";
import Button, { IButtonProps } from "../button/button";
import { IconContainer } from "./styles";
import "../styles.css"

interface IIconButtonProps extends IButtonProps {
    /** Size of the icon button */
    size?: "small" | "medium" | "large";
}

const IconButton: React.FC<IIconButtonProps> = (props) => {

    const { size, children, style, ...remainingProps} = props;
    
    return (
        <Button style={{...style, borderRadius: "50%"}} {...remainingProps}>
            <IconContainer $size={size || "small"}>
                {children}
            </IconContainer>
        </Button>
    );
}

export default IconButton;