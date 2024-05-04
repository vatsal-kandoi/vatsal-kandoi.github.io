import styled from "styled-components";
import getBoxShadowForLayer from "../../utils/themes/layer/getboxshadow";
import getBackgroundImageForLayer from "../../utils/themes/layer/getbackgroundimage";
import { Theme } from "../../interfaces";


const Container = styled.div.attrs<{ $elevation?: number, $square?: boolean }>((props) => ({
	$elevation: props.$elevation || 0,
    $square: props.$square || false,
}))`
    width: 100%;
    height: 100%;
    box-shadow: ${props => getBoxShadowForLayer(props.$elevation || 0)};
    background-color: ${props => (props.theme as Theme).palette.background};
    background-image: ${props => getBackgroundImageForLayer(props.$elevation || 0, (props.theme as Theme).mode)};
    border-radius: ${props => (props.$square || false) ? "1.5rem" : "0rem"};
`

export { Container };
