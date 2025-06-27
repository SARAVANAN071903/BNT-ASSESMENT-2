
import React, { useState } from 'react'



const Counter1 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => (prev + 1 === 10 ? 0 : prev + 1));
    };

    return (
        <div>
            <div>Counter: {count}</div>
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}

export default Counter1