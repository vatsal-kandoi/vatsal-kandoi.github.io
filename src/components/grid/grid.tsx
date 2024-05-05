import * as React from "react";
import { GridContainer, GridItem } from "./styles";
import { normalizeBreakPoints } from "../../utils/themes";

interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement | React.ReactElement[];
    /** True if this is a grid container */
    container?: boolean;
    /** True if it is a grid item */
    item?: boolean;
    /** spacing between items in the container */
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** sizes of the item at various break-points */
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Grid: React.FC<IGridProps> = (props) => {
    const {children, container, item, spacing, xs, sm, md, lg, xl, ...remaingProps} = props;

    if (item) {
        const new_breakpoints = normalizeBreakPoints(xs, sm, md, lg, xl);

        return (
            <GridItem $xl={new_breakpoints.xl} $md={new_breakpoints.md}
                    $sm={new_breakpoints.sm} $lg={new_breakpoints.lg}
                    $xs={new_breakpoints.xs}
                    {...remaingProps}>
                {children}
            </GridItem>
        );
    }

    return (
        <GridContainer $spacing={spacing || 0} {...remaingProps}>
            {children}
        </GridContainer>
    );    
}


export default Grid;