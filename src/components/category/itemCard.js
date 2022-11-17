import './styles.css';

import React, { useCallback, useState } from 'react'

import { ReactComponent as CartHoverIcon } from '../../assets/svg/itemCart.svg'
import ImageTest from "../../assets/images/Product.png";
import { useNavigate } from 'react-router-dom';

function ItemCard({ isDisabled = false }) {
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate()
    const handleSelectItem = useCallback(
        () => {
            navigate("/individual")
        },
        [navigate],
    )

    return (
        <>
            <div className={`item__container ${isHover && !isDisabled ? "--hover" : ""} ${isDisabled ? "--disabled" : ""} `}
                onClick={handleSelectItem}
                onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className='item__img'>
                    <img src={ImageTest} alt="hhh" />
                    {
                        isDisabled &&
                        <div className="item__img--disabled">
                            <span>
                                OUT OF STOCK
                            </span>
                        </div>
                    }
                </div>
                <div className='item__texts'>
                    <div className={`item__cart ${isHover && !isDisabled ? "--hover" : ""}`}>
                        <CartHoverIcon />
                    </div>
                    <p className='item__name'>Apollo Running Short</p>
                    <span className='item__price'>$50.00</span>
                </div>
            </div>

        </>
    )
}

export default ItemCard