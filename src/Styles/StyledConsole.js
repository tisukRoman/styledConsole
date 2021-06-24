import styled from "styled-components";
import { theme } from "./Theme";

export const StyledConsole = styled.textarea`
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    line-height: ${props => props.line || '0'};
    background-color: ${theme.COLORS.second};
    height: 80vh;
    resize: none;
    color: ${theme.COLORS.main};
    border: none;
    font-family: ${theme.FONT.pixel};
    font-size: 1rem;
    &:focus{
        outline: none;
        overflow: hidden
    }
`