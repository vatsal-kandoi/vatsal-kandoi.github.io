import styled from "styled-components";
import getBoxShadowForLayer from "../../utils/themes/layer/getboxshadow";
import getBackgroundImageForLayer from "../../utils/themes/layer/getbackgroundimage";
import { Theme } from "../../interfaces";


const Container = styled.div.attrs<{ $elevation?: number, $square?: boolean }>((props) => ({
	$elevation: props.$elevation || 0,
    $square: props.$square,
}))`
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    flex: 1;
    height: auto;
    box-shadow: ${props => getBoxShadowForLayer(props.$elevation || 0)};
    background-color: ${props => (props.theme as Theme).palette.background};
    background-image: ${props => getBackgroundImageForLayer(props.$elevation || 0, (props.theme as Theme).mode)};
    border-radius: ${props => (!props.$square) ? "0.75rem" : "0rem"};
    color: ${props => (props.theme as Theme).palette.text.background}
`

export { Container };
