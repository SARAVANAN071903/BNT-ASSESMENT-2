import React, { useState } from 'react';

function ToggleMessage() {
    const [isHello, setIsHello] = useState(true);

    const handleClick = () => {
        setIsHello(prev => !prev);
    };

    return (
        <div>
            <p>{isHello ? "Hello" : "Welcome Back"}</p>
            <button onClick={handleClick}>Toggle Message</button>
        </div>
    );
}

export default ToggleMessage;