import React, { useState } from 'react';

function Tile({ logo, name }){
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className={`tile ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={logo} alt="Logo" className="logo" />
            {isHovered && <div className="name">{name}</div>}
        </div>
    );
};

export default Tile;
