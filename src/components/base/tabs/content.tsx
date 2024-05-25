import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../../interfaces";
import { ActiveTabProviderContext } from "./context";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const TabContentContainer = styled.div`
    width: 70%;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.lg}px) {
        width: 65%;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        width: 100%;
        margin-top: 10px;
    }
`


export interface ITabPanelProps { children: React.ReactElement | React.ReactElement[]; identifier: string; }

const TabPanel: React.FC<ITabPanelProps> = ({ children, identifier }) => {
    const tabContext = React.useContext(ActiveTabProviderContext);

    return (        
        <CSSTransition key={identifier} in={tabContext.identifier === identifier} timeout={200} classNames="fade">
            <TabContentContainer id={`tab-panel-${identifier}`} aria-labelledby={`tab-${identifier}`} role="tabpanel"
                hidden={identifier !== tabContext.identifier} aria-hidden={identifier !== tabContext.identifier}>
                {children}
            </TabContentContainer>
        </CSSTransition>
    );
}

export { TabPanel };