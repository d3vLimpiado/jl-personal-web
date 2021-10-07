import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiLinkedin, FiFacebook, FiGithub, FiCodepen } from "react-icons/fi";

const SocialIcons = styled.div`
    @media screen and (min-width: 1200px) {
        position: fixed;
        bottom: 2em;
        left: 3em;
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
        color: var(--jl-white);
        .social-icons {
            opacity: 0.5;
            margin: 1em;
            transition: opacity 0.25s ease-out;
            &:hover {
                opacity: 1;
            }
        }
        @media screen and (min-width: 800px) {
            .social-icons {
                font-size: 0.8em;
            }
        }
    }
`;

const ContactWrapper = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    grid-row: 4;

    @media screen and (min-width: 1200px) {
        width: 70%;
    }

    .mailMe {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;

        @media screen and (min-width: 800px){
            height: 90%;
        }

        h1 {
            span {
                color: var(--jl-blue);
            }
        }
        p {
            margin-top: 2em;
            text-align: center;
        }
        a {
            border: none;
            text-decoration: none;
            background-color: var(--jl-black);
            color: var(--jl-white);
            font-family: RobotoMonoReg;
            width: 150px;
            height: 50px;
            border-radius: 10px;
            margin: 5em 0;
            font-size: inherit;
            cursor: pointer;
            text-align: center;
            padding: 1.5em 0;
            transition: background .20s ease-in;

            @media screen and (min-width: 800px) {
                width: 250px;
                height: 80px;
                margin: 3em 0;
            }

            &:hover{
                background: #5f5f5f;
            }
        }
    }

    footer {
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
        span{
            color: var(--jl-white);
        }

        @media screen and (min-width: 800px){
            height: 10%;
        }
    }
`;

const Footer = styled.footer``;

export default function Contacts() {
    return (
        <ContactWrapper id="Contacts">
            <div className="mailMe">
                <h1>
                    <span>[1]</span> Interested?
                </h1>
                <p>
                    I'm in pursue for internship or any experiences related to
                    my skills. Feel free to contact me by clicking the button
                    below or via this email: <br /> jianlimpiado@gmail.com
                </p>
                <a href="mailto:jianlimpiado@gmail.com">Get in touch</a>
            </div>
            <Footer>
                <IconContext.Provider
                    value={{ size: "2em", className: "social-icons" }}
                >
                    <SocialIcons>
                        <a
                            href="https://www.linkedin.com/in/joshua-limpiado-2000/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/josh.limpiado"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiFacebook />
                        </a>
                        <a
                            href="https://github.com/d3vLimpiado"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://codepen.io/babyjoseph"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiCodepen />
                        </a>
                    </SocialIcons>
                </IconContext.Provider>
                Designed and Built by yours truly, <br />
                <span>Joshua B. Limpiado</span>
            </Footer>
        </ContactWrapper>
    );
}
