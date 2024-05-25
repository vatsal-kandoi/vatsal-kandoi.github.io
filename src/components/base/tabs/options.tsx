import * as React from "react";
import styled, { useTheme } from "styled-components";
import { Theme } from "../../../interfaces";
import { hexToRGB } from "../../../themes/utils";
import useWindowSizeProvider from "../../../hooks/windowsizeprovider";
import { ActiveTabProviderContext } from "./context";

const TabOptionsContainer = styled.div`
    width: 30%;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.lg}px) {
        width: 35%;
    }
    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        width: 100%;
        flex-direction: row;        
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        border-bottom: 2px solid ${props => hexToRGB((props.theme as Theme).palette.background_contrast, 0.1)};
    }
`

const ActiveIndicator = styled.span<{ $variant: "primary" | "secondary", $offset: number, $size: number; }>`
    width: 2px;
    position: absolute;
    transition: 0.3s;
    transition-timing-function: linear;
    background-color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary };

    @media (min-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        top: ${props => props.$offset}px;
        height: ${props => props.$size}px;
        left: 0;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        height: 2px;
        bottom: 0px;
        left: ${props => props.$offset}px;
        width: ${props => props.$size}px;
    }
`

const TabOptionContainer = styled.button<{ $variant: "primary" | "secondary" }>`
    box-sizing: border-box;
    font-size: 1rem;
    padding: 1rem 0.5rem;
    padding-left: 0.7rem;
    cursor: pointer;
    background-color: ${props => (props.theme as Theme).palette.background};
    color: ${props => (props.$variant === "primary") ? (props.theme as Theme).palette.text.background : (props.theme as Theme).palette.text.background };
    outline: none;
    border: none;
    display: inline-flex;
    justify-content: flex-start;
    width: fit-content;
    flex-shrink: 0;
    
    span {
        color: ${props => (props.theme as Theme).palette.primary};                
    }

    &:hover {
        background-color: ${props => hexToRGB((props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary, 0.05)};
        transition: background-color 0.1s, color 0.1s;
        transition-timing-function: linear;
    }

    &:active {
        background-color: ${props => hexToRGB((props.$variant === "primary") ? (props.theme as Theme).palette.primary : (props.theme as Theme).palette.secondary, 0.05)};
        transition: background-color 0.1s, color 0.1s;
        transition-timing-function: linear;
    }    
`


export interface ITabOptionsProps { 
    children: React.ReactElement<ITabOptionProps> | React.ReactElement<ITabOptionProps>[]; 
    variant?: "primary" | "secondary"; 
    onChange?: (identifier: string) => void;
}

const TabOptions: React.FC<ITabOptionsProps> = ({ children, variant, onChange }) => {
    const { toggle } = React.useContext(ActiveTabProviderContext);
    const windowWidth = useWindowSizeProvider();
    const theme = useTheme() as Theme;

    const ref = React.createRef<HTMLDivElement>();
    const [activeIndicatorOffsets, setActiveIndicatorOffsets] = React.useState<{
        offset: number;
        size: number;
    }>(
        {
            offset: 0,
            size: 0,
        }
    );

    const captureOffset = React.useCallback((ref: HTMLButtonElement) => {
        if (windowWidth <= theme.breakpoints.md) return ref.offsetLeft;
        return ref.offsetTop;
    }, [windowWidth, theme.breakpoints.md]);

    const captureSize = React.useCallback((ref: HTMLButtonElement) => {
        if (windowWidth <= theme.breakpoints.md) return ref.offsetWidth;
        return ref.offsetHeight;
    }, [windowWidth, theme.breakpoints.md]);

    React.useEffect(() => {
        if (ref.current) {
            const button = (ref.current.firstChild as HTMLButtonElement);
            setActiveIndicatorOffsets({
                offset: captureOffset(button),
                size: captureSize(button),
            });
        }
    }, []);

    const onTabClick = (identifier: string, ref: HTMLButtonElement) => {
        setActiveIndicatorOffsets({
            offset: captureOffset(ref),
            size: captureSize(ref),
        });

        toggle(identifier);
    };

    return (
        <TabOptionsContainer ref={ref} role="tablist">
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { 
                        variant: variant,
                        onClick: onTabClick
                    })
                } 
                return child;
            })}
            <ActiveIndicator $variant={variant || "primary"} $size={activeIndicatorOffsets.size} $offset={activeIndicatorOffsets.offset} />
        </TabOptionsContainer>
    );
}

interface ITabOptionProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> { identifier?: string; children: React.ReactElement | React.ReactElement[]; variant?: "primary" | "secondary"; onClick?: (identifier: string, ref: HTMLButtonElement) => void }

const TabOption: React.FC<ITabOptionProps> = ({ identifier, children, variant, onClick, ...remainingProps }) => {
    const tabContext = React.useContext(ActiveTabProviderContext);
    const ref = React.createRef<HTMLButtonElement>();

    const click = () => {
        if (ref !== undefined && ref.current !== null && onClick)
            onClick(identifier || "", ref?.current)
    }

    return (
        <TabOptionContainer key={identifier} aria-controls={`tab-panel-${identifier}`} id={`tab-${identifier}`} $variant={variant || "primary"} onClick={click} ref={ref} type="button" role="tab" aria-selected={identifier === tabContext.identifier} {...remainingProps} >
            {children}
        </TabOptionContainer>
    );
}


export { TabOptions, TabOption };