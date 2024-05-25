import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../interfaces";

const HeaderContainer = styled.div<{ 
    $count: number 
}>`
    color: ${props => (props.theme as Theme).palette.text.background};
    padding: 20px 0px;
    margin: 10px 0px;
    font-size: 3rem;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    &:before {
        font-size: 2.5rem;
        content: '${props => props.$count}. ';
        color: ${props => (props.theme as Theme).palette.primary};
    }

    &:after {
        content: '';
        top: 0.5rem;
        height: 2px;
        position: relative;
        max-width: 300px;
        width: 30%;
        background-color: ${props => (props.theme as Theme).palette.primary};
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        font-size: 2.5rem;
    
        &:before {
            font-size: 2rem;
        }
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
        font-size: 2rem;
    
        &:before {
            font-size: 1.5rem;
        }
    }    

`

const CenteredHeaderContainer = styled.div`
    color: ${props => (props.theme as Theme).palette.text.background};
    padding: 20px 0px;
    font-weight: bold;
    font-size: 3rem;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:before {
        content: '';
        top: 0.5rem;
        height: 2px;
        position: relative;
        width: 30%;
        max-width: 300px;
        background-color: ${props => (props.theme as Theme).palette.primary};
    }

    &:after {
        content: '';
        top: 0.5rem;
        height: 2px;
        position: relative;
        width: 30%;
        max-width: 300px;
        background-color: ${props => (props.theme as Theme).palette.primary};
    }
`

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    index?: number;
    centered?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ heading, index, centered, ...props }) => {

    if (centered !== undefined && centered) {
        return (
            <CenteredHeaderContainer>
                {heading}
            </CenteredHeaderContainer>
        )
    }

    return (
        <HeaderContainer $count={index || 0}>
            {heading}
        </HeaderContainer>
    );
}

export default Header;