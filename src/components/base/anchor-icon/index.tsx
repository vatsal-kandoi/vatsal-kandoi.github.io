import styled from "styled-components";
import { Theme } from "../../../interfaces";

const AnchorIcon = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${props => (props.theme as Theme).palette.text.background};

    &:hover {
        color: ${props => (props.theme as Theme).palette.primary};
        transition: color 0.1s;    
        transition-timing-function: linear;
    }

    &:active {
        color: ${props => (props.theme as Theme).palette.primary};
        transition: color 0.1s;    
        transition-timing-function: linear;
    }
`

export default AnchorIcon;