import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../interfaces";
import ThemeToggle from "../theme-toggle";

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 20px 0px;
`
const Divider = styled.div`
    width: 80%;
    max-width: 300px;
    height: 2px;
    content: ' ';
    background-color: ${props => (props.theme as Theme).palette.primary};
`

const Footer: React.FC = () => {

    return (
        <Container>
            <Divider />
            <div>
                <p>
                    Built on React, using styled-components, and icons from font-awesome.                
                </p>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </Container>
    );
};

export default Footer;