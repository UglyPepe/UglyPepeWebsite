import React from 'react';

const HamMenu = () => {
    return (
        <div>
            <div className="navLinkContainer">
            <Link className="navLinks" to="/home" ><p>Home</p></Link>
            <Link className="navLinks" to="/about" ><p>About</p></Link>
            <Link className="navLinks" to="/roadmap" ><p>RoadMap</p></Link>
            </div>
        </div>
    );
};

export default HamMenu;