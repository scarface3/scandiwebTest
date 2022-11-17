import './styles.css';

import React from 'react'

function ColorButton({ isActive = false, size = "medium", color = "black", onClick }) {
    return (
        <button type="button" className={
            `colorButton__container 
             ${size === "lg" ? "--big" : ""}
        ${isActive ? "--active" : ""} 
        ${color === "teal" ? "--teal" : ""}
        ${color === "grey" ? "--grey" : ""}
        ${color === "black" ? "--black" : ""} 
        ${color === "darkGreen" ? "--darkGreen" : ""}
        ${color === "darkOrange" ? "--darkOrange" : ""} `}
            onClick={onClick}
        >

        </button>
    )
}

export default ColorButton