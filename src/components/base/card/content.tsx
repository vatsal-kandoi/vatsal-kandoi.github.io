import * as React from "react";
import styled from "styled-components";

const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
`

interface ICardContent { children: React.ReactElement[] | React.ReactElement | string }

const CardContent: React.FC<ICardContent> = ({ children }) => {

    return (
        <CardContentContainer>
            {children}
        </CardContentContainer>
    )
}


export { CardContent };