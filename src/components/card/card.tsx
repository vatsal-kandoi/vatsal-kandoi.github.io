import * as React from "react";
import Layer from "../layer/layer";
import CardContent from "./content";
import CardActions from "./actions";
import CardHeader from "./header";
import Stack from "../stack/stack";

interface CardOptions {
    Content: typeof CardContent;
    Actions: typeof CardActions;
    Header: typeof CardHeader;
}

interface ICardProps {
    children: React.ReactElement | React.ReactElement[];
}

const Card: React.FC<ICardProps> & CardOptions = (props) => {
    const {children} = props;
    return (
        <Layer elevation={1} square={false} style={{ padding: "1.5rem" }}>
            <Stack direction="column"
                    alignItems="flex-start"
                    justifyContent="start"
                    style={{ gap: "0.5rem" }}>
                {children}
            </Stack>
        </Layer>
    )
}

Card.Actions = CardActions;
Card.Content = CardContent;
Card.Header = CardHeader;

export default Card;