import React, {useState} from 'react'
import { Title } from '../Components/Title'
import { Console } from '../Components/Console'

export const Main = () => {

    return (
        <div>
            <Title margin='1em 0'>Забавная консоль</Title>
            <Console/>
        </div>
    )
}
