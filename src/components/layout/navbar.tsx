import styled from "styled-components";
import { Theme } from "../../interfaces";
import OutlinedButton from "../base/outlined-button";

const Container = styled.nav`
    box-sizing: border-box;
    width: 100%;

    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    padding: 0px 150px;

    @media (max-width: ${props => (props.theme as Theme).breakpoints.lg}px) {
        padding: 0 100px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.md}px) {
        padding: 0 80px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.sm}px) {
        padding: 0 40px;
    }

    @media (max-width: ${props => (props.theme as Theme).breakpoints.xs}px) {
        padding: 0 15px;
    }        
`

const OptionsContainer = styled.div`
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    ol {    
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        margin: 0px;
        list-style: none;
        counter-set: item -1;

        li {
            counter-increment: item 1; 
            font-size: 1.2rem;
            margin: 0 5px;

            a {
                padding: 10px;
                cursor: pointer;
                text-decoration: none;
                color: ${props => (props.theme as Theme).palette.text.background};

                &:before {
                    content: counter(item) '.';
                    margin-right: 5px;                    
                    font-size: 1.3rem;
                    color: ${props => (props.theme as Theme).palette.primary};
                }
            }
        }
    }
`

const Navbar: React.FC = () => {
    const options = [
        { name: "Experience", href: "experience" },
        { name: "Education", href: "education" },
    ];

    const onClick = (anchor: string) => {
        const anchorEl = document.getElementById(anchor);
        if (anchorEl) {
            anchorEl.scrollIntoView();
        }
    }


    return (
        <Container>
            <OptionsContainer>
                <ol>
                    {options.map((item) => {
                        return (
                            <li>
                                <a onClick={() => onClick(item.href)}>
                                    {item.name}
                                </a>
                            </li>     
                        )
                    })}                                    
                    <li>
                        <OutlinedButton>
                            Resume
                        </OutlinedButton>
                    </li>
                </ol>
            </OptionsContainer>
        </Container>
    );
}

export default Navbar;
