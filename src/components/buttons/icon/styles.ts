import styled from "styled-components";
import { hexToRGB } from "../../../utils/themes";

const getButtonFontSize = (size: "small" | "medium" | "large"): string => {
    if (size === "small") return "2rem";
    if (size === "medium") return "4rem";
    if (size === "large") return "6rem";
    return "2rem";
}

const IconContainer = styled.div.attrs<{ $size?: "small" | "medium" | "large" }>((props) => ({
	$size: props.$size || "small"
}))`
    width: ${props => getButtonFontSize(props.$size || "small")};
    height: ${props => getButtonFontSize(props.$size || "small")};
    fill: ${props => props.theme.palette.background_contrast};

    &:hover {        
        fill: ${props => hexToRGB(props.theme.palette.background_contrast, 0.8)};        
    }
`

export { IconContainer };