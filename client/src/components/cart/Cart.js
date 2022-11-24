import './styles.css';

import React, { useEffect, useState } from 'react'

import Button from '../button/button'
import CartItem from '../cartItem/cartItem'
import { useSelector } from 'react-redux';

function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const [itemsTotal, setItemsTotal] = useState(0);
    const [itemsTax, setItemsTax] = useState(0);


    useEffect(() => {
        if (cart) {
            const newArray = cart.map(_cart => ({ price: _cart.prices.find(_price => _price.currency?.label === currentCurrency?.label), quantity: _cart.quantity }))
            const totalPrice = newArray.reduce((acc, cur) => acc + (cur.price.amount * cur.quantity), 0).toFixed(2)
            setItemsTotal(totalPrice)
            setItemsTax(((totalPrice * 21) / 100).toFixed(2))
        }
    }, [cart, currentCurrency])

    return (
        <>
            {cart.length < 1 &&
                <div className="cart__empty">
                    <p>Your bag is empty</p>
                    <p className='cart__rotate'>:{"("}</p>
                </div>
            }
            {cart.length > 0 &&
                <div className='cart__container'>
                    <span className='--textExtraLarge --extrabold'>Cart</span>
                    <div className='cart__body'>
                        <div className='cart__items'>
                            {cart.map((_item, index) => (
                                <div className='cart__item' key={index} >
                                    <CartItem item={_item} />
                                </div>
                            ))}
                        </div>
                        <div className='cart__footer'>
                            <div className='cart__details'>
                                <div className='cart__detail --param'>
                                    <span className='--textLarge'>Tax 21%:</span>
                                    <span className='--textLarge'>Quantity:</span>
                                    <span className='--textLarge'>Total:</span>
                                </div>
                                <div className='cart__detail --values'>
                                    <span className='--textLarge --extrabold'>{currentCurrency && currentCurrency.symbol}{itemsTax}</span>
                                    <span className='--textLarge --extrabold'>{cart.length}</span>
                                    <span className='--textLarge --extrabold'>{currentCurrency && currentCurrency.symbol}{itemsTotal}</span>
                                </div>

                                {/* 
                            <div className='cart__detail'>
                                <span className='--textLarge'>Tax 21%:</span>
                                <span className='--textLarge --extrabold'>$42.00</span>
                            </div>
                            <div className='cart__detail'>
                                <span className='--textLarge'>Quality:</span>
                                <span className='--textLarge --extrabold'>3</span>
                            </div>
                            <div className='cart__detail'>
                                <span className='--textLarge'>Total</span>
                                <span className='--textLarge --extrabold'>$200.00</span>
                            </div> */}

                            </div>
                            <div className='cart__order'>
                                <Button type="button" onClick={() => console.log("hi")}>
                                    Order
                                </Button >
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Cart