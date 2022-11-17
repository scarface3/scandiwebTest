import './styles.css';

import React from 'react'

function DropdownItem({ children }) {
    return (
        <div className='dropdown__item'>
            {children}
        </div>
    )
}

export default DropdownItem