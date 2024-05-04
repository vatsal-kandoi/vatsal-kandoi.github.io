import * as React from "react";
import { Container } from "./styles";

interface ILayerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Defines the elevation of the material UI layer */
    elevation?: number;
    /** True if the vorders needs to be curved */
    square?: boolean;
    children?: React.ReactElement | React.ReactElement[];
}

const Layer: React.FC<ILayerProps> = (props) => {
    const { elevation, children, square, ...remainingProps } = props;

    return (
        <Container $elevation={elevation || 0} $square={square || false} {...remainingProps}>
            {children || <></>}
        </Container>
    );
};

export default Layer;