import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../../interfaces";
import { hexToRGB } from "../../../themes/utils";

const CardHeaderContainer = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: ${props => (props.theme as Theme).palette.text.background};

    @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
        font-size: 1.25rem;
    }    
`
const CardSubHeaderContainer = styled.div`
    font-size: 1.5rem;
    color: ${props => hexToRGB((props.theme as Theme).palette.text.background, 0.6)};
    font-weight: normal;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
        font-size: 1rem;
    }    
`

interface ICardHeader { children: React.ReactElement[] | React.ReactElement | string }

const CardHeader: React.FC<ICardHeader> = ({ children }) => {

    return (
        <CardHeaderContainer>
            {children}
        </CardHeaderContainer>
    )
}

interface ICardSubHeader { children: React.ReactElement[] | React.ReactElement | string }

const CardSubHeader: React.FC<ICardSubHeader> = ({ children }) => {

    return (
        <CardSubHeaderContainer>
            {children}
        </CardSubHeaderContainer>
    )
}

export { CardHeader, CardSubHeader };