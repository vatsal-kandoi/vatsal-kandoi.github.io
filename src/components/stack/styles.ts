import styled from "styled-components";

const Container = styled.div.attrs<{ 
    $direction?: "row" | "column",
    $alignItems?:  "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
    $justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly",
    $spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6,
}>((props) => ({
    $direction: props.$direction || "row",
    $alignItems: props.$alignItems || "flex-start",
    $justifyContent: props.$justifyContent || "start",
    $spacing: props.$spacing || 0,
}))`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    gap: ${props =>  ((props.$spacing / 6) * 6) + "rem" };
    align-items: ${props => props.$alignItems};
    justify-content: ${props => props.$justifyContent};
    flex-direction: ${props => props.$direction};
`

export { Container };
