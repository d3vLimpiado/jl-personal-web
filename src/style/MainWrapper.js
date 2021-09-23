import styled from "styled-components";

const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--jl-bg-color);
    color: var(--jl-white);
    font-family: RobotoMonoReg;
    font-size: var(--jl-fs-reg);
    overflow-x: hidden;

    @media screen and (min-width: 800px){
        font-size: var(--jl-fs-md);
    }
`;

export default MainWrapper;
