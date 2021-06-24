import styled from "styled-components";
import { theme } from "./Theme";

export const StyledLine = styled.div`
font-family: ${theme.FONT.pixel};
color: ${theme.COLORS.main};
margin: ${props => props.margin || '0'};
`