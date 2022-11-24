import './styles.css';

import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import { closeCart } from '../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function Bag() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.cart);
    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const [itemsTotal, setItemsTotal] = useState(0);


    useEffect(() => {
        if (cart) {
            const newArray = cart.map(_cart => ({ price: _cart.prices.find(_price => _price.currency?.label === currentCurrency?.label), quantity: _cart.quantity }))
            setItemsTotal(newArray.reduce((acc, cur) => acc + (cur.price.amount * cur.quantity), 0).toFixed(2))
        }
    }, [cart, currentCurrency])

    const handleOpenBag = useCallback(
        () => {
            navigate("/cart")
            dispatch(closeCart())
        },
        [dispatch, navigate],
    )

    const handleToggleCart = useCallback(
        () => {
            return dispatch(closeCart())
        },
        [dispatch],
    )
    return (
        <>
            <div className="bag__main">
                {cart.length > 0 && <>
                    <div className="bag__top">
                        <div className="bag__head">
                            <p className="--extrabold">
                                My bag, {" "}
                            </p>
                            <span className="bag__text">{" "} {cart.length} items</span>
                        </div>
                        {cart.map((_item, index) => (
                            <CartItem isBag item={_item} key={index} />
                        ))}
                        <div className="bag__footer">
                            <span className="--bold">Total</span>
                            <span className="--extrabold">{currentCurrency && currentCurrency.symbol}{itemsTotal}</span>
                        </div>
                    </div>
                    <div className="bag__bottom">
                        <Button type="button" color="secondary" onClick={handleOpenBag}>
                            View Bag
                        </Button >
                        <Button type="button" onClick={() => console.log("hi")}>
                            Check Out
                        </Button >
                    </div>

                </>}

                {cart.length < 1 &&
                    <div className="bag__empty">
                        <p>Your bag is empty</p>
                        <p className='bag__rotate'>:{"("}</p>
                    </div>
                }
            </div>
            <div className="bag__overlay" onClick={handleToggleCart}></div>
        </>


    )
}

export default Bag