import React from 'react';
import {useStorage} from "../../hooks/useStorage";

const Test = () => {
    const [counter, setCounter] = useStorage(0)

    const handleChange = () => {
        setCounter(x => x + (Math.random() > 0.5 ? 1 : -1) * Math.trunc(Math.random() * 10))
    }

    return (<div>
            <span>{`counter = ${counter}`}</span>
            <button onClick={handleChange}>change</button>
        </div>);
};

export default Test;