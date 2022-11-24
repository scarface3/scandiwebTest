import './styles.css';

import React from 'react'

function Button({ type = "button", color = "primary", size = "medium", children, onClick }) {
    return (
        <>
            <button type={type} className={`button__container --capitalize ${size === "sm" ? "--small" : ""}  ${size === "medium" ? "--medium" : ""} ${color === "primary" ? "--primary" : "--secondary"}`} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default Button