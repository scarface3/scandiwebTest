import './styles.css';

import React, { useState } from 'react'

import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'

function DropdownHead({ value, children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='dropdown__container' onClick={() => setIsOpen(prev => !prev)}>
                <div className='dropdown__head'>
                    <div className='dropdown__value'>
                        {value}
                    </div>
                    <ArrowIcon className={`dropdown__arrow ${isOpen ? "--open" : ""}`} />
                </div>
                <div className={`dropdown__body ${isOpen ? "--open" : ""}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default DropdownHead