import './styles.css';

import { LOAD_CATEGORIES, LOAD_CURRENCIES } from '../../services/queries';
import React, { useCallback, useEffect, useState } from 'react';
import { closeCart, openCart } from '../../redux/cart/cartSlice';
import { setCurrencyList, setSelectedCurrency } from '../../redux/currency/currencySlice';
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import DropdownHead from '../dropdown/dropdown';
import DropdownItem from '../dropdown/dropdownItem';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { setProducts } from '../../redux/products/productsSlice';
import { useQuery } from '@apollo/client';

function Nav() {
    const dispatch = useDispatch()

    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const cart = useSelector((state) => state.cart.cart);
    const currencyList = useSelector((state) => state.currency.currencyList);
    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const productsWithCategories = useSelector((state) => state.product.productsWithCategories);
    const { data: currencyData } = useQuery(LOAD_CURRENCIES)
    const { data: categoriesData } = useQuery(LOAD_CATEGORIES)
    const [currentCategory, setCurrentCategory] = useState("all")

    useEffect(() => {
        if (currencyData && currencyData.currencies) {
            dispatch(
                setCurrencyList(currencyData.currencies)
            )
        }
    }, [currencyData, dispatch])

    const handleSelectCategory = useCallback(
        (_category) => {

            if (!productsWithCategories) return;
            const categoryProducts = productsWithCategories.find(_productCategory => _productCategory.name === _category);
            if (categoryProducts) {
                dispatch(setProducts(categoryProducts.products))
            }
            setCurrentCategory(_category)
        },
        [dispatch, productsWithCategories],
    )

    const handleToggleCart = useCallback(
        () => {
            if (isCartOpen) {
                return dispatch(closeCart())
            }
            dispatch(openCart())
        },
        [dispatch, isCartOpen],
    )

    const handleSelectCurrency = useCallback(
        (_currency) => {
            dispatch(
                setSelectedCurrency({
                    label: _currency.label,
                    symbol: _currency.symbol
                })
            )
        },
        [dispatch],
    )

    return (
        <div className={`nav__container`}>
            <div className='nav__left'>
                {categoriesData && categoriesData.categories.map((_category, index) => (
                    <Link to={`/${_category.name}`} key={index} >
                        <div className={`nav__left--item ${currentCategory === _category.name ? "--active" : ""} `} onClick={() => handleSelectCategory(_category.name)}>
                            <span className={`nav__left--text ${currentCategory === _category.name ? "--active" : ""} `}>{_category.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='nav__center'>
                <LogoIcon />
            </div>
            <div className='nav__right'>
                <div className='dropdown'>
                    <DropdownHead
                        value={<span>{currentCurrency && currentCurrency.symbol}</span>}
                    >
                        {currentCurrency && currencyList && currencyList.length > 0 && currencyList.map((_currency, index) => (
                            <DropdownItem key={index} active={currentCurrency.symbol === _currency.symbol} onClick={() => handleSelectCurrency(_currency)} >
                                {_currency.symbol}
                                <span className={`nav__dropdown --item ${_currency.label === "AUD" ? "--extraSpace" : ""} `}>
                                    {_currency.label}
                                </span>
                            </DropdownItem>
                        ))}
                    </DropdownHead>
                </div>
                <div className='cart-icon badge' data-badge={!!(cart?.length) ? cart?.length : null} onClick={handleToggleCart} >
                    <CartIcon />
                </div>
            </div>
        </div >
    )
}

export default Nav