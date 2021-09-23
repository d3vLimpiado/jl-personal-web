import React from "react";
import styled from "styled-components";
import { SvgConsole } from "../style";

const AboutWrapper = styled.div`
    width: 90%;
    grid-row: 2;
    .svgConsole {
        position: absolute;
        z-index: 0;
    }
    @media screen and (min-width: 1200px) {
        width: 70%;
    }
    .about {
        position: absolute;
        z-index: 1;
        width: inherit;
        padding: 8em 2em 10em 1em;
        line-height: 20px;

        @media screen and (min-width: 480px){
            padding-top: 10em;
        }
        @media screen and (min-width: 800px) {
            line-height: 200%;
        }
        @media screen and (min-width: 1200px) {
            padding: 8em 2em;
        }
        span {
            color: var(--jl-blue);
        }
        p {
            margin-left: 3em;
        }

        ul {
            margin-left: 6em;
        }
    }
`;

export default function AboutMe() {
    const aboutRef = React.useRef(null);
    const [aboutW, setAboutW] = React.useState(0);
    const [aboutH, setAboutH] = React.useState(0);
    React.useEffect(() => {
        setAboutW((prev) => (prev = aboutRef.current.offsetWidth));
        setAboutH((prev) => (prev = aboutRef.current.offsetHeight));
    }, []);
    return (
        <AboutWrapper ref={aboutRef} id="AboutMe">
            <SvgConsole recW={aboutW} recH={aboutH-50} />
            <div className="about">
                <h1>
                    <span>[0]</span> AboutMe
                </h1>{" "}
                <br />
                <p>
                    I am currently a College Student at Polytechnic University
                    of the Philippines, Institute of Technology, Pursuing
                    Diploma in Information and Communication Technology. <br />{" "}
                    <br />
                    Current focusing in developing my skill with one of the
                    latest technologies out there, like ReactJS and plan to use
                    it to develop Web and Native Applications. <br /> <br />
                    Below are some of the Techs I use:
                </p>
                <ul>
                    <li>ReactJS</li>
                    <li>HTML5 / CSS3[SCSS]</li>
                    <li>Javascript ES6</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </AboutWrapper>
    );
}
