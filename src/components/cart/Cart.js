import './styles.css';

import Button from '../button/button'
import CartItem from '../cartItem/cartItem'
import React from 'react'

function Cart() {
    return (
        <>
            <div className='cart__container'>
                <span className='--textExtraLarge --extrabold'>Cart</span>
                <div className='cart__body'>
                    <div className='cart__items'>
                        <div className='cart__item'>
                            <CartItem />
                        </div>
                        <div className='cart__item'>
                            <CartItem />
                        </div>
                        <div className='cart__item'>
                            <CartItem />
                        </div>
                    </div>
                    <div className='cart__footer'>
                        <div className='cart__details'>
                            <div className='cart__detail --param'>
                                <span className='--textLarge'>Tax 21%:</span>
                                <span className='--textLarge'>Quantity:</span>
                                <span className='--textLarge'>Total:</span>
                            </div>
                            <div className='cart__detail --values'>
                                <span className='--textLarge --extrabold'>$42.00</span>
                                <span className='--textLarge --extrabold'>3</span>
                                <span className='--textLarge --extrabold'>$200.00</span>
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
        </>
    )
}

export default Cart