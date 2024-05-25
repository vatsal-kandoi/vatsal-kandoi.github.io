import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Tab from "../base/tabs";
import Card from "../base/card";
import { IJob, Theme } from "../../interfaces";
import DataProviderContext from "../../contexts/dataprovider";

const List= styled.ul`
    li::marker {
        color: ${props => (props.theme as Theme).palette.primary};
    }
`

const renderTabPanel = ({ role_shorthand, company, role, start_date, end_date, bullets }: IJob) => {
    return (
        <Tab.Panel identifier={`${role_shorthand} at ${company}`}>
            <Card>
                <Card.Header><>{role}</></Card.Header>
                <Card.SubHeader>
                    <>{start_date.toLocaleDateString('en-us', { year:"numeric", month:"long" })} - {(end_date === "present") ? end_date : end_date.toLocaleDateString('en-us', { year:"numeric", month:"long" })}</>
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

    const {experience} = React.useContext(DataProviderContext);

    return (
        (experience !== null ) ? (
            <>
                <Header index={0} heading="Experience" id="experience" />
                <Tab>
                    <Tab.Options>
                        {experience.map((exp) => {
                            return (
                                <Tab.Option identifier={`${exp.role_shorthand} at ${exp.company}`} aria-label={`${exp.role_shorthand} at ${exp.company}`}>
                                    <><span style={{marginRight: "5px"}}>{exp.role_shorthand} @</span> {exp.company}</>
                                </Tab.Option>
                            );
                        })}
                    </Tab.Options>
                    {experience.map((exp) => {
                        return renderTabPanel(exp);
                    })}
                </Tab>
            </>
        ) : null
    );
}

export default Experience;