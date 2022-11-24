import './styles.css';

import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as CartHoverIcon } from '../../assets/svg/itemCart.svg'
import { addItem } from '../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function ItemCard({ data, isDisabled = false }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const currentCurrency = useSelector((state) => state.currency.currentCurrency);

    const [isHover, setIsHover] = useState(false);
    const [dataCurrency, setDataCurrency] = useState(null);

    useEffect(() => {
        if (data && data.prices) {
            setDataCurrency(
                data.prices.find(_price => _price.currency?.label === currentCurrency?.label)
            )
        }
    }, [data, currentCurrency])

    const handleSelectItem = useCallback(
        () => {
            dispatch(addItem(data))
        },
        [data, dispatch],
    )

    return (
        <>
            {data &&
                <div key={data && data.id} className={`item__container ${isHover && !isDisabled ? "--hover" : ""} ${isDisabled ? "--disabled" : ""} `} onClick={() => {


                    console.log("first")
                    navigate(`/product/${data && data.id}`)
                }}
                    onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className='item__img'>
                        <img src={data.gallery[0]} alt="hhh" />
                        {isDisabled &&
                            <div className="item__img--disabled">
                                <span>
                                    OUT OF STOCK
                                </span>
                            </div>
                        }
                    </div>
                    <div className='item__texts'>
                        <div className={`item__cart ${isHover && !isDisabled ? "--hover" : ""}`} onClick={() => handleSelectItem()}>
                            <CartHoverIcon />
                        </div>
                        <p className='item__name'>{data.name}</p>
                        <span className='item__price'>
                            {dataCurrency && dataCurrency.currency?.symbol}
                            {dataCurrency && dataCurrency.amount}
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard