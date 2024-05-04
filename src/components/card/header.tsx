import * as React from "react";

interface ICardHeaderProps {
    children: React.ReactElement | React.ReactElement[];
}

const CardHeader: React.FC<ICardHeaderProps> = (props) => {
    const {children} = props;
    return (        
        <>
            {children}
        </>
    )
}

export default CardHeader;