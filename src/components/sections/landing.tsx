import * as React from "react";
import styled from "styled-components";
import OutlinedButton from "../base/outlined-button";
import { Theme } from "../../interfaces";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import AnchorIcon from "../base/anchor-icon";
import Button from "../base/button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;

    h1 { 
        color: ${props => (props.theme as Theme).palette.primary};
        margin-block-end: 1rem;
        margin-block-start: 1rem;
        font-size: 6rem;
        line-height: 6.2rem;        

        @media (max-width: ${props => (props.theme as Theme).breakpoints.lg}px) {
            font-size: 4rem;
            line-height: 4.2rem;        
        }
    
        @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
            font-size: 3rem;
            line-height: 3.2rem;        
        }
        
        @media (max-width: ${props => (props.theme as Theme).breakpoints.xs}px) {
            font-size: 2rem;
            line-height: 2.2rem;        
        }            
    }
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
`

const LeftIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 1.5rem;
    position: fixed;
    bottom: 80px;
    left: 80px;    

    &:before {
        content: '';
        height: 200px;
        width: 2px;
        background-color: ${props => (props.theme as Theme).palette.background_contrast};
        color: ${props => (props.theme as Theme).palette.background_contrast};
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        display: none;
    }
`


const Landing: React.FC = () => {
    
    return (
        <Container>
            <h1>Vatsal Kandoi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quisquam vero magni nisi sint vel corporis numquam eius nostrum minima dolores nam omnis culpa voluptatem, autem laborum beatae aperiam alias.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium facilis nemo cumque consequatur aperiam ut laudantium similique molestias, error neque soluta tempora iusto itaque illo vitae, architecto nihil quidem.</p>
            <ButtonGroup>
                <Button>Ping me!</Button>
                <OutlinedButton variant="secondary">Resume</OutlinedButton>
            </ButtonGroup>
                <LeftIconContainer>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </AnchorIcon>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faGithub} />
                    </AnchorIcon>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </AnchorIcon>
                </LeftIconContainer>
        </Container>
    );
}

export default Landing;