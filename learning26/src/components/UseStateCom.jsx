import React, { useState } from 'react'

export const UseStateCom = () => {
    const [count, setCount] = useState(0);

    const addCounter = () => {
        setCount(count+1);
        console.log(count);
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>{addCounter()}}>Add</button>
        </div>
    )
}
