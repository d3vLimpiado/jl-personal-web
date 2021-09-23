import React from 'react'
import styled from 'styled-components';

const GreetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 1;
    justify-content: center;
    width: 90%;
    span{
        font-size: var(--jl-fs-md);
    }
    .myName, .des-head{
        font-family: Raleway;
    }
    .myName{
        font-size: var(--jl-fs-head);
        color: var(--jl-blue);
    }
    .des-head{
        font-size: var(--jl-fs-lg);
        opacity: 0.6;
    }
    .des-body{
        width: 80%;
    }

    @media screen and (min-width: 800px){
        span{
            font-size: var(--jl-fs-lg);
        }
        .myName{
            font-size: var(--jl-fs-head-x);
        }
        .des-head{
            font-size: var(--jl-fs-xl);
        }
        .des-body{
            width: 75%;
        }
    }

    @media screen and (min-width: 1200px){
        width: 70%;
        span{
            font-size: var(--jl-fs-lg);
        }
        .myName{
            font-size: var(--jl-fs-head-xx);
        }
        .des-head{
            font-size: var(--jl-fs-xxl);
        }
        .des-body{
            width: 60%;
        }
    }
`;

const MoreButton = styled.a`
    border:none;
    text-decoration: none;
    background-color: var(--jl-blue);
    color: var(--jl-white);
    font-family: RobotoMonoReg;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    margin: 5em 0;
    font-size: inherit;
    cursor: pointer;
    text-align:center;
    padding: 1.5em 0;
    
    @media screen and (min-width: 800px){
        width: 250px;
        height: 80px;
        margin: 3em 0;
    }
`;

export default function Greet() {
    return (
        <GreetWrapper>
            <span>👋Hello! I am</span>
            <span className="myName">JOSHUA LIMPIADO.</span>
            <span className="des-head">Enthusiast to Native/Web Apps</span>
            <p className="des-body">I am currently focusing in developing web apps using one of the latest Techs such as ReactJS and will develop native apps with the use of React Native that aims to develop user-friendly and accessible apps.</p>
            <MoreButton href="#AboutMe">More AboutMe!</MoreButton>
        </GreetWrapper>
    )
}
