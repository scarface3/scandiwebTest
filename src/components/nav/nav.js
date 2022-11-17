import './styles.css';

import React, { useCallback } from 'react'
import { closeCart, openCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import DropdownHead from '../dropdown/dropdown';
import DropdownItem from '../dropdown/dropdownItem';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'

function Nav() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    // const [isCartOpen, setIsCartOpen] = useState(true);

    const handleToggleCart = useCallback(
        () => {
            if (isCartOpen) {
                return dispatch(closeCart())
            }
            dispatch(openCart())
        },
        [dispatch, isCartOpen],
    )

    return (
        <div className={`nav__container`}>
            {/* <div className={`nav__container ${isCartOpen ? "--fullScreen" : ""}`}> */}
            <div className='nav__left'>
                <div className='nav__left--item --active'>
                    <span className='nav__left--text --active'>Women</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Men</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Kids</span>
                </div>
            </div>
            <div className='nav__center'>
                <LogoIcon />
            </div>
            <div className='nav__right'>
                <div className='dropdown'>
                    <DropdownHead
                        value={<span>hi</span>}
                    >

                        <DropdownItem >
                            $
                            <span>
                                USD
                            </span>
                        </DropdownItem> <DropdownItem>
                            $
                            <span>
                                USD
                            </span>
                        </DropdownItem> <DropdownItem>
                            $
                            <span>
                                USD
                            </span>
                        </DropdownItem> <DropdownItem>
                            $
                            <span>
                                USD
                            </span>
                        </DropdownItem>
                    </DropdownHead>
                </div>
                <div className='cart-icon badge' data-badge={2} onClick={handleToggleCart} >
                    <CartIcon />
                </div>
            </div>
            {/* {
                isCartOpen &&
                <Cart />
            } */}
        </div>
    )
}

export default Nav