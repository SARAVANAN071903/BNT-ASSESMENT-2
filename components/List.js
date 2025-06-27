import React from 'react';

const names = ["John", "Jane", "Alex"];

function List() {
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}

export default List;