import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h1 className="center">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore dignissimos voluptas voluptatum fugiat, cupiditate qui nulla odio amet eum quisquam harum unde ducimus quas quod dolorum ab deserunt ipsam!</p>
        </div>
    )
}

export default Rainbow(About);
