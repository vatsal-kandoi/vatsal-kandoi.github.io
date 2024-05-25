import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Header from "./header";
import AnchorIcon from "../base/anchor-icon";

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContactDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SocialIcons = styled.div`
    margin: 20px 0px;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

const Contact: React.FC = () => {

    return (
        <>
            <Header centered={true} heading="Say Hi!" />
            <Container>
                <ContactDetails>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ratione quidem id eligendi ipsam quasi tempore quo, optio suscipit molestiae aspernatur similique natus! Ipsum, quidem! Sint maiores reprehenderit iusto delectus.
                </ContactDetails>
                <SocialIcons>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </AnchorIcon>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faGithub} />                
                    </AnchorIcon>
                    <AnchorIcon href="">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </AnchorIcon>
                </SocialIcons>
            </Container>
        </>
    );
}

export default Contact;