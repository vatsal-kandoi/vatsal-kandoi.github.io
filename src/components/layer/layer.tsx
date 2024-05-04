import * as React from "react";
import { Container } from "./styles";

interface ILayerProps extends React.HTMLProps<HTMLDivElement> {
    /** Defines the elevation of the material UI layer */
    elevation?: number
    children?: React.ReactElement | React.ReactElement[];
}

const Layer: React.FC<ILayerProps> = (props) => {
    const { elevation, children } = props;

    return (
        <Container $elevation={elevation || 0} {...props}>
            {children || <></>}
        </Container>
    );
};

export default Layer;