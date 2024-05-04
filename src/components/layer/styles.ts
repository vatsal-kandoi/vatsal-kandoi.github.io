import styled from "styled-components";
import getBoxShadowForLayer from "../../utils/themes/layer/getboxshadow";
import getBackgroundImageForLayer from "../../utils/themes/layer/getbackgroundimage";
import { Theme } from "../../interfaces";


const Container = styled.div.attrs<{ $elevation?: number }>((props) => ({
	$elevation: props.$elevation || 0
}))`
    width: 100%;
    height: 100%;
    box-shadow: ${props => getBoxShadowForLayer(props.$elevation || 0)}
    background-image: ${props => getBackgroundImageForLayer(props.$elevation || 0, (props.theme as Theme).mode)}
`

export { Container };
