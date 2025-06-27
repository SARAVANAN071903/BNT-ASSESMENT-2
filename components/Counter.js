import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function incfunc() {
        setCount(count + 1);}

function decfunc() {
        setCount(count - 1);
}

return (
    <>
            <div className="counter">
                    <h1>Counter</h1>
                    <div className="count-display">{count}</div>
                    <button className="increment-button" onClick={incfunc}>Increment</button>
                    <button className="decrement-button" onClick={decfunc}>Decrement</button>
            </div>
            
    </>
)
}

export default Counter