import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Tab from "../base/tabs";
import Card from "../base/card";
import { Theme } from "../../interfaces";

const List= styled.ul`
    li::marker {
        color: ${props => (props.theme as Theme).palette.primary};
    }
`
interface IExperience {
    role_shorthand: string; 
    company: string;
    role: string;
    start_date: string;
    end_date: string;
    bullets: string[];
}

const renderTabPanel = ({ role_shorthand, company, role, start_date, end_date, bullets }: IExperience) => {
    return (
        <Tab.Panel identifier={`${role_shorthand} at ${company}`}>
            <Card>
                <Card.Header><>{role}</></Card.Header>
                <Card.SubHeader>
                    <>{start_date} - {end_date}</>
                </Card.SubHeader>
                <Card.Content>
                    <List>
                        {bullets.map((bullet: string) => {
                            return (
                                <li>
                                    {bullet}
                                </li>
                            )
                        })}
                    </List>
                </Card.Content>
            </Card>          
        </Tab.Panel>
    );
}


const Experience: React.FC = () => {

    const experiences = [{
        "role_shorthand": "Associate",
        "role": "Associate Software Developer",
        "company": "JPMorgan Chase",
        "start_date": "18th January, 2023",
        "end_date": "present",
        "bullets": [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
        ]
    },{
        "role_shorthand": "Analyst",
        "role": "Software Developer Analyst",
        "company": "JPMorgan Chase",
        "start_date": "18th January, 2023",
        "end_date": "present",
        "bullets": [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
        ]
    }]

    return (
        <>
            <Header index={0} heading="Experience" id="experience" />
            <Tab>
                <Tab.Options>
                    {experiences.map((experience) => {
                        return (
                            <Tab.Option identifier={`${experience.role_shorthand} at ${experience.company}`} aria-label={`${experience.role_shorthand} at ${experience.company}`}>
                                <><span style={{marginRight: "5px"}}>{experience.role_shorthand} @</span> {experience.company}</>
                            </Tab.Option>
                        );
                    })}
                </Tab.Options>
                {experiences.map((experience) => {
                    return renderTabPanel(experience);
                })}
            </Tab>
        </>

    );
}

export default Experience;