import styled from "styled-components";
import { theme } from "./Theme";

export const StyledTitle = styled.h1`
    text-align: center;
    color: ${theme.COLORS.main};
    font-family: ${theme.FONT.pixel};
    margin: ${props => props.margin || '0'};
`