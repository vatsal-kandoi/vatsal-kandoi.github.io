import * as React from "react";
import styled from "styled-components";
import { Theme } from "../../../interfaces";
import { CardHeader, CardSubHeader } from "./headings";
import { CardContent } from "./content";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

interface ICardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> { children: React.ReactElement[]; }

interface ICardComposition {
    Content: typeof CardContent;
    Header: typeof CardHeader;
    SubHeader: typeof CardSubHeader;
}

const Card: React.FC<ICardProps> & ICardComposition = ({ children, ...remainingProps }) => {

    return (
        <Container {...remainingProps}>
            {children}
        </Container>
    );
}

Card.Content = CardContent;
Card.Header = CardHeader;
Card.SubHeader = CardSubHeader;

export default Card;