import './styles.css';

import React from 'react'

function DropdownItem({ active = false, onClick, children }) {
    return (
        <div className={`dropdown__item ${active ? "--active" : ""}`} onClick={onClick && onClick}>
            {children}
        </div>
    )
}

export default DropdownItem