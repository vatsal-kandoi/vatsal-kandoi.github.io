import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Tab from "../base/tabs";
import Card from "../base/card";
import { IEducation, Theme } from "../../interfaces";
import Layer from "../base/layer";
import DataProviderContext from "../../contexts/dataprovider";

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

const renderEducationCard = ({ degree_name, college_name, start_date, end_date, bullets }: IEducation) => {
    return (
        <Card style={{ padding: "20px 20px" }}>
            <Card.Header>{degree_name}</Card.Header>
            <Card.SubHeader>
                <div>{college_name}</div>
                <div>{start_date.toLocaleDateString('en-us', { year:"numeric", month:"long" })} - {(end_date === "present") ? end_date : end_date.toLocaleDateString('en-us', { year:"numeric", month:"long" })}</div>
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

    const {education} = React.useContext(DataProviderContext);

    return (
        (education !== null) ?
        <>
            <Header index={1} heading="Education" id="education" />
            <List>
                {education.map((ed) => {
                    return (
                        <li>
                            <Layer elevation={1} rounded={false}>
                                {renderEducationCard(ed)}
                            </Layer>
                        </li>
                    )
                })}
            </List>
        </> : null
    );
}

export default Education;