import styled from "styled-components";
import { Theme } from "../../interfaces";

const getFontColor = (theme: Theme, outlined: boolean): string => {
    if (outlined) return theme.palette.primary;    
    return theme.palette.text.primary;
};
const getBackgroundColor = (theme: Theme, outlined: boolean): string => {
    if (outlined) return "transparent";    
    return theme.palette.primary; 
};
const getBorder = (theme: Theme, outlined: boolean): string => {
    if (!outlined) return "none";
    return `0.1rem solid ${theme.palette.primary}`
};


const Container = styled.div.attrs<{ $outlined?: boolean }>((props) => ({
    $outlined: props.$outlined || false
}))`    
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    color: ${props => getFontColor(props.theme as Theme, props.$outlined || false)};
    border: none;
    background-color: ${props => getBackgroundColor(props.theme as Theme, props.$outlined || false)};
    border: ${props => getBorder(props.theme as Theme, props.$outlined || false)}
`

export { Container };
