import * as React from "react";
import styled from "styled-components";
import Layer from "../base/layer";
import { Theme } from "../../interfaces";
import Navbar from "./navbar";
import Footer from "./footer";

const Container = styled.div`
    padding: 0 300px;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.lg}px) {
        padding: 0 150px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        padding: 0 80px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
        padding: 0 40px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.xs}px) {
        padding: 0 15px;
    }    
`

interface IPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: React.ReactElement | React.ReactElement[];
}

const Page: React.FC<IPageProps> = ({ children, ...props }) => {

    return (        
        <Layer>
            <Container {...props}>
                <Navbar />
                {children}
                <Footer />
            </Container>
        </Layer>
    );
}



export default Page;