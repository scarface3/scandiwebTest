import './styles.css';

import Button from '../button/button';
import ColorButton from '../colorButton/colorButton';
import ImageTest from "../../assets/images/Product.png";
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'
import React from 'react'
import SizeButton from '../sizeButton/sizeButton';

function CartItem() {
    return (
        <div className="cartItem__container">
            <div className="cartItem__left">
                <div className="cartItem__details">
                    <span className="cartItem__text --light">Apollo
                    </span>
                    <p className="cartItem__text --light">
                        Running Short</p>
                    <span className="cartItem__text">$50.00</span>
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
                        <Button color='secondary' size='sm' >
                            <PlusIcon />
                        </Button>
                    </div>
                    <span className="cartItem__text --light">
                        1
                    </span>
                    <div>
                        <Button color='secondary' size='sm' >
                            <MinusIcon />
                        </Button>
                    </div>
                </div>
                <div className="cartItem__img">
                    <img src={ImageTest} alt="hhh" />
                </div>
            </div>
        </div>
    )
}

export default CartItem