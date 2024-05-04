import * as React from "react";

interface ICardActionsProps {
    children: React.ReactElement | React.ReactElement[];
}

const CardActions: React.FC<ICardActionsProps> = (props) => {
    const {children} = props;
    return (        
        <>
            {children}
        </>
    )
}

export default CardActions;