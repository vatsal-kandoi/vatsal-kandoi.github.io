import * as React from "react";
import { Container } from "./styles";

interface IPillProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactElement;
    /** whether the pill is filled or outlined */
    outlined?: boolean;
}

const Pill: React.FC<IPillProps> = (props) => {
    const {children, outlined, ...remainingProps} = props;

    return (
        <Container $outlined={outlined} {...remainingProps}>
            {children || <></>}
        </Container>
    );
}

export default Pill;