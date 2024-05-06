import * as React from "react";
import { ListItemContainer, ListContainer } from "./styles";

interface IListItemProps {
    children: React.ReactElement | React.ReactElement[];
}

const ListItem: React.FC<IListItemProps> = (props) => {
    const {children, ...remainingProps} = props;
    
    return <ListItemContainer {...remainingProps}>{children}</ListItemContainer>;
}

interface IListProps {
    children: React.ReactElement | React.ReactElement[];

}

interface IListComposition {
    Item: typeof ListItem
}


const List: React.FC<IListProps> & IListComposition = (props) => {
    const { children, ...remainingProps } = props;

    return (
        <ListContainer {...remainingProps}>
            {children}
        </ListContainer>        
    )
}

List.Item = ListItem;

export default List;