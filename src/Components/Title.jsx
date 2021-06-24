import { StyledTitle } from "../Styles/StyledTitle";
import React from 'react'

export const Title = (props) => {
    return (
        <StyledTitle {...props}>
            {props.children}
        </StyledTitle>
    )
}
