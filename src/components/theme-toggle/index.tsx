import * as React from "react";
import styled, { useTheme } from "styled-components";
import { Mode, Theme } from "../../interfaces";
import ThemeProviderContext from "../../contexts/themeprovider";
import { getContrast, getLayerOvelay } from "../../themes/utils";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

const ToggleInputContainer = styled.label`
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
        
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => getContrast((props.theme as Theme), 0.09)};
        transition: .3s;
    }

    span:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 2px;
        bottom: 2px;
        background-color: ${props => (props.theme as Theme).palette.primary};
        transition: .3s;
        border-radius: 50%;
    }

    input:checked + span {
    }
            
    input:checked + span:before {
        transform: translateX(29px);
    }      
`

const ThemeToggle: React.FC = () => {
    const theme = useTheme();
    const themeContext = React.useContext(ThemeProviderContext);

    return (
        <ButtonContainer>
            <label htmlFor="theme-toggle-btn">Switch to {(theme as Theme).mode === Mode.LIGHT ? "dark mode" : "light mode" }</label>
            <ToggleInputContainer                      
                    role="checkbox"
                    aria-checked={false}
                    aria-labelledby="theme-toggle-btn">
                <input type="checkbox" onClick={themeContext.toggleTheme}/>
                <span></span>
            </ToggleInputContainer>
        </ButtonContainer>
    );
}

export default ThemeToggle;