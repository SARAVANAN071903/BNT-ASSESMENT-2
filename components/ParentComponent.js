import React from 'react';

function ChildComponent({ message }) {
    return <h2>{message}</h2>;
}
function ParentComponent(props) {
    return (
        <div>
            <ChildComponent message="Good morning from grandparent" />
        </div>
    );
}

export default ParentComponent;