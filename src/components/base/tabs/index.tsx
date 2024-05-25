import * as React from "react";
import styled from "styled-components";
import { ITabPanelProps, TabPanel } from "./content";
import { ITabOptionsProps, TabOption, TabOptions } from "./options";
import { Theme } from "../../../interfaces";
import { ActiveTabProviderContext, useActiveTabProvider } from "./context";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        flex-direction: column;        
    }
`

interface ITabProps { children:any; }

interface ITabComposition {
    Panel: typeof TabPanel;
    Options: typeof TabOptions;
    Option: typeof TabOption;
}

const getTabPanelsFromChildren = (children: React.ReactElement[]) => {
    const panels: React.ReactElement<ITabPanelProps>[] = []
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === TabPanel) {
                panels.push(child as React.ReactElement<ITabPanelProps>);
            }
        } 
    });
    return panels;
}

const Tab: React.FC<ITabProps> & ITabComposition = ({ children }) => {
    const panels = getTabPanelsFromChildren(children);
    const {contextValue} = useActiveTabProvider(
        panels.map((panel) => panel.props.identifier).at(0) as string
    );

    const getTabOptionsKomponent = React.useCallback(() => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === TabOptions) {
                    return React.cloneElement(child);
                }
            } 
        });
    }, [children]);

    return (
        <ActiveTabProviderContext.Provider value={contextValue}>            
            <Container>
                {getTabOptionsKomponent()}
                {panels}
            </Container>
        </ActiveTabProviderContext.Provider>
    );
}

Tab.Panel = TabPanel;
Tab.Option = TabOption;
Tab.Options = TabOptions;

export default Tab;