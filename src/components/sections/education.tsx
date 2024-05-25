import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Tab from "../base/tabs";
import Card from "../base/card";
import { Theme } from "../../interfaces";
import Layer from "../base/layer";

const List= styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0x;
    padding-inline-start: 0px;

`

const Bullets= styled.ul`
    list-style-type: disc;
    
    li::marker {
        color: ${props => (props.theme as Theme).palette.primary};
    }
`

interface IEducation {
    degree_name: string; 
    college_name: string; 
    start_date: string; 
    end_date: string; 
    bullets: string[];
}

const renderEducationCard = ({ degree_name, college_name, start_date, end_date, bullets }: IEducation) => {
    return (
        <Card style={{ padding: "20px 20px" }}>
            <Card.Header>{degree_name}</Card.Header>
            <Card.SubHeader>
                <div>{college_name}</div>
                <div>{start_date} - {end_date}</div>
            </Card.SubHeader>
            <Card.Content>
                <Bullets>
                    {bullets.map((bullet) => <li>{bullet}</li>)}
                </Bullets>
            </Card.Content>
        </Card>
    );
}

const Education: React.FC = () => {

    const educations = [{
        "degree_name": "B Tech. Electronics & Commnucation Engg",
        "college_name": "Vellore Institute of Technology, Vellore",
        "start_date": "18th January, 2023",
        "end_date": "present",
        "bullets": [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum nobis culpa sunt adipisci eligendi quisquam laborum dolores omnis reiciendis! Iure, porro nobis. Modi sapiente odio tempora nemo facilis id.",
        ]
    },]

    return (
        <>
            <Header index={1} heading="Education" id="education" />
            <List>
                {educations.map((education) => {
                    return (
                        <li>
                            <Layer elevation={1} rounded={false}>
                                {renderEducationCard(education)}
                            </Layer>
                        </li>
                    )
                })}
            </List>
        </>

    );
}

export default Education;