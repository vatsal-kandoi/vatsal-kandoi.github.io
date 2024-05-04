import * as React from "react";
import { Container } from "./styles";

interface IStackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "spacing"> {
    /** Flex direction */
    direction?: "row" | "column";
    alignItems?:  "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly";
    /** Defines the spacing level between adjacent items */
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6; 
    children?: React.ReactElement | React.ReactElement[];
}

const Stack: React.FC<IStackProps> = (props) => {
    const { direction, spacing, alignItems, justifyContent, children, ...remainingProps } = props;

    return (
        <Container $direction={direction || "row"} 
                $alignItems={alignItems || "flex-start"}
                $justifyContent={justifyContent || "start"}
                $spacing={spacing || 0}
                {...remainingProps}>
            {children || <></>}
        </Container>
    );
};

export default Stack;


