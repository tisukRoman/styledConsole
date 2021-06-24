import React from 'react'
import { StyledLine } from '../Styles/StyledLine'

export const Line = (props) => {

    return (
        <StyledLine {...props}>
            {props.children}
        </StyledLine>
    )
}
