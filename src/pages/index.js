import React from "react"
import { Helmet } from "react-helmet"
import { Greet, AboutMe, Projects, Contacts, Navi } from "../components/index"
import { GlobalStyle, MainWrapper, ContentWrapper } from "../style/index"

export default function Index() {
    return (
        <div>
            <GlobalStyle />
            <Helmet>
                <meta
                    name="google-site-verification"
                    content="Sp8xegZdm7bpV1Gm6--joN94BhogHOt0hsujTRpHdxE"
                />
                <meta property='og:url' content='https://d3vlimpiado.netlify.app' />
                <meta property='og:title' content='JOSHUA LIMPIADO' />
                <meta property='og:description' content='Personal Website Project built and designed with Reactjs as GatsbyJS as its framework.' />
                <title>JOSHUA LIMPIADO</title>
            </Helmet>
            <MainWrapper>
                <Navi />
                <ContentWrapper>
                    <Greet />
                    <AboutMe />
                    <Projects />
                    <Contacts />
                </ContentWrapper>
            </MainWrapper>
        </div>
    )
}
