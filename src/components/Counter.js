import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const clickPush = () => {
        setCounter(counter + 1);
    }

    const clickPop = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="counter">
            <h3>Hello this is a counter App</h3>
            <p>Le has puchado <strong>{ counter }</strong> veces</p>
            <button onClick={clickPush}>Puchale</button>
            <button onClick={clickPop}>Despuchale</button>
        </div>
    );
};

export default Counter;