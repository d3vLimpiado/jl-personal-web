import React from "react";
import styled from "styled-components";
import { JlPortfolio, WeatherReact } from "../images";

const ProjectWrapper = styled.div`
    margin: 4em 0;
    width: 90%;

    h1 {
        span {
            color: var(--jl-blue);
        }
    }

    @media screen and (min-width: 1200px) {
        width: 70%;
    }
`;

const ProjectGroup = styled.section`
    margin: 4em 0;
    display: grid;
    .project{
        width: 100%;
        height: 25em;
        background-color: var(--jl-black);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 95%;
            border-radius: 10px;
        }
    }
    .des{
        margin: 2em 0;
        h2{
            color: var(--jl-blue);
        }

        ul li{
            margin-left: 2em;
        }
    }

    @media screen and (min-width: 1200px){
        grid-template-columns: 70% 30%;
        gap: 4em;
    }
`;

export default function Projects() {
    return (
        <ProjectWrapper id="Projects">
            <div className="title">
                <h1>
                    <span>[1]</span> Projects
                </h1>
            </div>
            <ProjectGroup>
                <div className="project">
                    <img src={WeatherReact} alt="Weather React" />
                </div>
                <div className="des">
                    <h2>Weather - App</h2>
                    Tech used:
                    <ul>
                        <li>ReactJS (CRA)</li>
                        <li>Openweathermap API</li>
                        <li>styled-components</li>
                        <li>React-router</li>
                    </ul>
                </div>
            </ProjectGroup>
            <ProjectGroup>
                <div className="project">
                    <img src={JlPortfolio} alt="JL Portfolio" />
                </div>
                <div className="des">
                    <h2>JL Portfolio</h2>
                    Tech used:
                    <ul>
                        <li>ReactJS (GatsbyJS)</li>
                        <li>styled-components</li>
                    </ul>
                </div>
            </ProjectGroup>
        </ProjectWrapper>
    );
}
