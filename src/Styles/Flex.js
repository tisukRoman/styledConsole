import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'stretch'};
    align-items: ${props => props.align || 'stretch'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '100%'};
    flex-grow: ${props => props.grow || '0'};
`