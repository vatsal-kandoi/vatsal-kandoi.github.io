import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Header from "./header";
import AnchorIcon from "../base/anchor-icon";
import DataProviderContext from "../../contexts/dataprovider";

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

    const {about} = React.useContext(DataProviderContext);
    
    return (
        (about !== null) ? 
        <>
            <Header centered={true} heading="Say Hi!" />
            <Container>
                <ContactDetails>
                    {about.catchy_contact_me_description}
                </ContactDetails>
                <SocialIcons>
                    <AnchorIcon href={about.linkedIn} target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </AnchorIcon>
                    <AnchorIcon href={about.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />                
                    </AnchorIcon>
                    <AnchorIcon href={`mailto:${about.email}`} target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </AnchorIcon>
                </SocialIcons>
            </Container>
        </> : null
    );
}

export default Contact;