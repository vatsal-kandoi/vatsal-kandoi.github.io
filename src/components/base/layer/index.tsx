import * as React from "react";
import styled from "styled-components";
import { getBoxShadow, getLayerOvelay } from "../../../themes/utils";
import { Theme } from "../../../interfaces";

const LayerContainer = styled.div<{ $elevation: number, $rounded: boolean }>`
    color: ${props => (props.theme as Theme).palette.text.background};
    background-color: ${props => getLayerOvelay((props.theme as Theme), props.$elevation)};
    box-shadow: ${props => getBoxShadow((props.theme as Theme), props.$elevation)};
    width: 100%;
    border-radius: ${props => (props.$rounded) ? "0.75rem" : "0"};
    word-wrap: break-word;
`

interface ILayerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    elevation?: number;
    children: React.ReactElement | React.ReactElement[];
    rounded?:  boolean;
}

const Layer: React.FC<ILayerProps> = ({ elevation, children, rounded, ...props }) => {
    
    return (
        <LayerContainer $elevation={elevation || 0} $rounded={(rounded !== undefined) ? rounded : false} {...props}>
            {children}
        </LayerContainer>
    );
}

export default Layer;