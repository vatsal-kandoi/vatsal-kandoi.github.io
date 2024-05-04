import * as React from "react";
import Layer from "../layer/layer";

interface ICardContentProps {
    children: React.ReactElement | React.ReactElement[];
}

const CardContent: React.FC<ICardContentProps> = (props) => {
    const {children} = props;
    return (        
        <>
            {children}
        </>
    )
}

export default CardContent;