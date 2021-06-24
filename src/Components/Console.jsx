import { useEffect, useRef } from 'react'
import { StyledConsole } from '../Styles/StyledConsole'
import { Line } from './Line';
import { Flex } from '../Styles/Flex'
import { useConsole } from '../Hooks/useConsole';


export const Console = () => {

    const ref = useRef(null); // Console element

    useEffect(() => { ref.current.focus() }, []); // set focus on Mount

    const { changeHandle, keyHandle, lines, value, holder } = useConsole(); // Custom Hook

    return (
        <Flex margin='2em 0'>
            <Flex direction='column' width='25%' margin='1em 0'>
                {lines.map((line, i) => <Line key={i} margin='0.5em 0'>{line}</Line>)}
            </Flex>
            <Flex direction='column' grow='1'>
                <StyledConsole
                    padding='1em'
                    line='2em'
                    ref={ref}
                    placeholder={holder}
                    value={value}
                    onChange={changeHandle}
                    onKeyPress={keyHandle} />
            </Flex>
        </Flex>
    )
}
