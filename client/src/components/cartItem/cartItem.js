import './styles.css';

import React, { useCallback, useEffect, useState } from 'react'
import { decreaseItemQuantity, increaseItemQuantity } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button';
import Carousel from '../carousel/carousel';
import ColorButton from '../colorButton/colorButton';
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'
import SizeButton from '../sizeButton/sizeButton';

function CartItem({ isBag = false, item }) {
    const dispatch = useDispatch();
    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const [itemCurrency, setItemCurrency] = useState(null);

    useEffect(() => {
        if (item && item.prices) {
            setItemCurrency(
                item.prices.find(_price => _price.currency?.label === currentCurrency?.label)
            )
        }
    }, [item, currentCurrency])

    const handleIncreaseItemQuantity = useCallback(
        () => {
            dispatch(increaseItemQuantity(item.id))
        },
        [item, dispatch])

    const handleDecreaseItemQuantity = useCallback(
        () => {
            dispatch(decreaseItemQuantity(item.id))
        },
        [item, dispatch])

    return (
        <>
            {item &&
                <div className="cartItem__container">
                    <div className="cartItem__left">
                        <div className="cartItem__details">
                            <span className="cartItem__text --light">{item.name}
                            </span>
                            <p className="cartItem__text --light">
                                Running Short</p>
                            <span className="cartItem__text">{itemCurrency && itemCurrency.currency?.symbol}
                                {itemCurrency && itemCurrency.amount}</span>
                        </div>
                        <div className="cartItem__controls">
                            <span className="cartItem__text --light --textSmall">
                                Size:
                            </span>
                            <div className="cartItem__size">
                                <SizeButton isActive onClick={() => console.log("teal")}  >
                                    S
                                </SizeButton>
                                <SizeButton onClick={() => console.log("teal")}  >
                                    M
                                </SizeButton>
                            </div>
                            <span className="cartItem__text --light  --textSmall">
                                Color:
                            </span>
                            <div className="cartItem__color">
                                <ColorButton isActive color='teal' onClick={() => console.log("teal")} />
                                <ColorButton color='black' onClick={() => console.log("black")} />
                                <ColorButton color='darkOrange' onClick={() => console.log("darkOrange")} />
                            </div>
                        </div>
                    </div>
                    <div className="cartItem__right">
                        <div className="cartItem__amount">
                            <div>
                                <Button color='secondary' size='sm' onClick={handleIncreaseItemQuantity} >
                                    <PlusIcon />
                                </Button>
                            </div>
                            <span className="cartItem__text --light">
                                {item.quantity}
                            </span>
                            <div>
                                <Button color='secondary' size='sm' onClick={handleDecreaseItemQuantity} >
                                    <MinusIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="cartItem__img">
                            {isBag && <img src={item.gallery[0]} alt="hhh" />}
                            {!isBag && <Carousel slides={item.gallery} />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CartItem