import React from "react";
import styled from "styled-components";

const Burger = styled.div`
    cursor: pointer;
    transition: all .25s ease-in-out;
    transform: ${props => props.showMe ? "translateX(0)":"translateX(-50vw)"} ;

    span {
        position: absolute;
        margin: 0.5em 0;
        border-radius: 10px;
        width: 35px;
        height: 5px;
        background-color: var(--jl-white);
        transition: all 0.25s ease-in-out;
        &:nth-child(1) {
            transform: ${(props) =>
                props.open
                    ? "rotate(45deg) translateY(0)"
                    : "translateY(-10px) rotate(0)"};
        }
        &:nth-child(2) {
            transform: ${(props) =>
                props.open ? "translateX(-100vw)" : "translateX(0)"};
        }
        &:nth-child(3) {
            transform: ${(props) =>
                props.open
                    ? "rotate(-45deg) translateY(0)"
                    : "translateY(10px) rotate(0)"};
        }
    }
    @media screen and (min-width: 1200px){
        display: none;
    }

`;

const NaviWrapper = styled.nav`
    position: fixed;
    padding: 1em;
    z-index: 2;
    font-size: var(--jl-fs-md);
    height: 100vh;
    transition: background-color .25s ease-in;
    background-color: ${props => props.open ? "var(--jl-black)":"transparent"} ;
    width: ${props => props.open ? "50vw":"0"};

    @media screen and (min-width: 800px){
        width: 30vw;
    }

    @media screen and (min-width: 1200px){
        background: transparent;
        width: 0;
    }
`;

const NavLinks = styled.ul`
    margin-top: 3em;
    list-style-type: none;
    transition: all 0.25s ease-in-out;
    transform: ${props => props.open ? "traslateX(0)":"translateX(-100vw)"} ;
    li {
        margin: 3em 0;
        a {
            text-decoration: none;
            transition: color .25s ease-out;
            color: var(--jl-white);
            span {
                color: var(--jl-blue);
            }

            &:hover{
                color: var(--jl-blue);
            }
        }
    }

    @media screen and (min-width: 1200px){
        position: fixed;
        top: -55px;
        transform: ${props => props.showMe ? "translateY(0)":"translateY(-50vh)"};
        width: 100vw;
        background: var(--jl-bg-color);
        text-align: right;
        padding: 1em;
        li{
            margin: 0 2em;
            display: inline;
        }
    }
`;

export default function Navi() {
    const [navi, setNavi] = React.useState(false);
    const [showNav, setShowNav] = React.useState(true);
    const prevWindowScroll = React.useRef(0);

    React.useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[]);

    const handleScroll = () => {
        let currentScroll = window.pageYOffset;
        if(prevWindowScroll.current >  currentScroll){
            setShowNav(prev => prev = true);
            setNavi(prev => prev = false);
        } else{
            setShowNav(prev => prev = false);
            setNavi(prev => prev = false);
        }
        prevWindowScroll.current = currentScroll;
    }

    const handleNav = () => {
        setNavi((prev) => (prev = !prev));
    };

    return (
        <NaviWrapper open={navi}>
            <Burger onClick={handleNav} open={navi} showMe={showNav}>
                <span></span>
                <span></span>
                <span></span>
            </Burger>
            <NavLinks open={navi} showMe={showNav}>
                <li>
                    <a href="#AboutMe" onClick={handleNav}>
                        <span>[0]</span> AboutMe
                    </a>
                </li>
                <li>
                    <a href="#Projects" onClick={handleNav}>
                        <span>[1]</span> Project
                    </a>
                </li>
                <li>
                    <a href="#Contacts" onClick={handleNav}>
                        <span>[2]</span> Contact
                    </a>
                </li>
            </NavLinks>
        </NaviWrapper>
    );
}
