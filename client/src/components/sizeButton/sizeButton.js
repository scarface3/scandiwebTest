import './styles.css';

import React from 'react'

function SizeButton({ isActive, size = "medium", children, onClick }) {
    return (
        <button type="sizeButton" className={`sizeButton__container ${size === "lg" ? "--big" : ""} ${isActive ? "--active" : ""}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default SizeButton