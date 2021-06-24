import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { help, joke, info } from '../Redux/mainReducer';

export const useConsole = () => {

    const [lines, setLines] = useState(['funny_console/user>']);
    const [value, setValue] = useState('');
    const holder = useSelector(state => state.main.holder);
    const currentInfo = useSelector(state => state.main.currentInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(currentInfo);
    }, [currentInfo]);

    const changeHandle = (e) => {
        setValue(e.target.value);
    }

    const keyHandle = (e) => {
        if (e.charCode === 13) {
            const arr = value.split(" ");
            const command = arr[arr.length - 1];
            switch (command) {
                case 'help':
                    dispatch(help());
                    break;
                case 'joke':
                    dispatch(joke());
                    break;
                case 'info':
                    dispatch(info());
                    break;
                default:
                    return;
            }
            setLines([...lines, 'funny_console/user>'])
        }
    }

    return {
        changeHandle,
        keyHandle,
        lines,
        value,
        holder,
    }
}
