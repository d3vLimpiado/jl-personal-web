import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import RobotoMonoBold from "../fonts/RobotoMono-Bold.ttf";
import RobotoMonoLight from "../fonts/RobotoMono-Light.ttf";
import RobotoMonoReg from "../fonts/RobotoMono-Regular.ttf";
import RalewayBold from "../fonts/Raleway-Bold.ttf";

const GlobalStyle = createGlobalStyle`

${variables};
@font-face{
    font-family: Raleway;
    src: url(${RalewayBold});
}
@font-face{
    font-family: RobotoMonoLight;
    src: url(${RobotoMonoLight});
}
@font-face{
    font-family: RobotoMonoBold;
    src: url(${RobotoMonoBold});
}
@font-face{
    font-family: RobotoMonoReg;
    src: url(${RobotoMonoReg});
}

    *{
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
