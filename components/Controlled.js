import React, { useState } from "react";

function Controlled() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label>
                Enter text:
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
            <p>Current value: {inputValue}</p>
        </div>
    );
}

export default Controlled;