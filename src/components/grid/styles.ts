import styled from "styled-components";
import { generateBreakpoints } from "../../utils/themes/grid/generateBreakpoints";
import { Theme } from "../../interfaces";

const GridContainer = styled.div.attrs<{ 
    $spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6,
}>((props) => ({
    $spacing: props.$spacing || 0,
}))`
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    background-color: transparent;
    display: flex;
    gap: ${props =>  ((props.$spacing / 6) * 6) + "rem" };
    flex-wrap: wrap;
    flex-direction: row;
`;

const GridItem = styled.div.attrs<{ 
    $xs: number;
    $sm: number;
    $md: number;
    $lg: number;
    $xl: number;
}>((props) => ({
    $xl: props.$xl,
    $xs: props.$xs,
    $md: props.$md,
    $lg: props.$lg,
    $sm: props.$sm,    
}))`
    height: 100%;
    box-sizing: border-box;
    background-color: transparent;
    display: block;
    flex: 1;
    ${props => generateBreakpoints(props.theme as Theme, "max-width", {
        xs: `${props.$xs}%`,
        sm: `${props.$sm}%`,
        md: `${props.$md}%`,
        lg: `${props.$lg}%`,
        xl: `${props.$xl}%`,
    })}
`;

export { GridContainer, GridItem };
