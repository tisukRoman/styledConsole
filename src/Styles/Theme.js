import { createGlobalStyle } from "styled-components";

//-----------------------------// Themes
const theme = {
    COLORS: {
        main: '#24df25',
        second: '#000000',
    },
    FONT: {
        pixel: `'Press Start 2P', cursive`
    }
}
//------------------------------// Global styles
const Global = createGlobalStyle`
    html{
        font-size: 1em;
        overflow: hidden;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${theme.COLORS.second};
        width: 100%;
        heigth: 100vh;
    }

`

export {
    Global,
    theme
}