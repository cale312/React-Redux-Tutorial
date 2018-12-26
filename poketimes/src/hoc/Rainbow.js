import React from "react";

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'yellow', 'pink', 'orange', 'green', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const className = `${randomColor}-text`;

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;