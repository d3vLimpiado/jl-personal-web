import React from "react";
import { Greet, AboutMe, Projects, Contacts, Navi } from "../components/index";
import { GlobalStyle, MainWrapper, ContentWrapper } from "../style/index";

export default function Index() {
    return (
        <div>
            <GlobalStyle />
            <MainWrapper>
                <Navi/>
                <ContentWrapper>
                    <Greet />
                    <AboutMe />
                    <Projects />
                    <Contacts />
                </ContentWrapper>
            </MainWrapper>
        </div>
    );
}
