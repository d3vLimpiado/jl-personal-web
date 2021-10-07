import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
    width: 90%;
    grid-row: 2;
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 1200px) {
        width: 70%;
    }
    .about {
        width: 100%;
        padding: 2em;
        line-height: 200%;
        span {
            color: var(--jl-blue);
        }
        /* p {
            margin-left: 3em;
        } */

        ul {
            margin-left: 2em;
        } 
    }
`;

export default function AboutMe() {
    return (
        <AboutWrapper id="AboutMe">
            <div className="about">
                <h1>
                    <span>[0]</span> AboutMe
                </h1>
                <br />
                <p>
                    I am currently a College Student at Polytechnic University
                    of the Philippines, Institute of Technology, Pursuing
                    Diploma in Information and Communication Technology. <br />
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
