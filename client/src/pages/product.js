import '../styles/product.css';

import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/button/button'
import ColorButton from '../components/colorButton/colorButton';
import SizeButton from '../components/sizeButton/sizeButton'
import { addItem } from '../redux/cart/cartSlice';
import { useParams } from 'react-router-dom';

function Product() {
    const dispatch = useDispatch();
    const params = useParams();
    const [data, setData] = useState(null);
    const [currentImg, setCurrentImg] = useState("");
    const [dataCurrency, setDataCurrency] = useState(null);

    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const productsWithCategories = useSelector((state) => state.product.productsWithCategories);

    useEffect(() => {
        if (data && data.prices) {
            setDataCurrency(
                data.prices.find(_price => _price.currency?.label === currentCurrency?.label)
            )
            setCurrentImg(data.gallery[0])
        }
    }, [data, currentCurrency])
    useEffect(() => {
        if (params.productId && productsWithCategories) {
            const categoryProducts = productsWithCategories.find(_productCategory => _productCategory.products.find(_el => _el.id === params.productId));
            if (categoryProducts) {
                const item = (categoryProducts.products.find(_el => _el.id === params.productId))
                setData(item)
            }
        }
    }, [params.productId, productsWithCategories])


    const handleSelectItem = useCallback(
        () => {
            dispatch(addItem(data))
        },
        [data, dispatch],
    )

    const handleSelectImage = useCallback(
        (_img) => {
            setCurrentImg(_img)
        },
        [],
    )


    console.log(data);

    return (
        <>
            {data &&
                <div className='productPage__container'>
                    <div className='productPage__imgs'>
                        <div className='productPage__imgs--list'>
                            {data.gallery.map(_img => <img src={_img} alt={`${data.name} img`} onClick={() => handleSelectImage(_img)} />)}
                            {/* <img src={data.gallery[1]} alt={`${data.name} img`} on/>
                            <img src={data.gallery[2]} alt={`${data.name} img`} on/>
                            <img src={data.gallery[3]} alt={`${data.name} img`} on/>
                            <img src={data.gallery[4]} alt={`${data.name} img`} on/> */}
                        </div>
                        <div className='productPage__img'>
                            <img src={currentImg} alt={`${data.name} img main`} />
                        </div>
                    </div>
                    <div className='productPage__details'>
                        <div className='productPage__name'>
                            <span className="--textExtraLarge --bold">
                                {data.name}
                            </span>
                            {/* <p className="--textExtraLarge">
                        Running Short
                    </p> */}
                        </div>
                        <div className='productPage__control'>
                            <div className='productPage__size'>
                                <span className="--capitalize --textBig --extrabold">
                                    Size:
                                </span>
                                <div className="productPage__size--container">
                                    <SizeButton size='lg' isActive onClick={() => console.log("teal")}>
                                        S
                                    </SizeButton>
                                    <SizeButton size='lg' onClick={() => console.log("teal")}>
                                        M
                                    </SizeButton>
                                </div>
                            </div>
                            <div className='productPage__color'>
                                <span className="--capitalize --textBig --extrabold">
                                    Color:
                                </span>
                                <div className='productPage__color--container'>
                                    <ColorButton size='lg' isActive color='teal' onClick={() => console.log("teal")} />
                                    <ColorButton size='lg' color='black' onClick={() => console.log("black")} />
                                    <ColorButton size='lg' color='darkOrange' onClick={() => console.log("darkOrange")} />
                                </div>
                            </div>
                        </div>
                        <div className='productPage__price'>
                            <span className="--capitalize --textBig --extrabold">
                                price:
                            </span>
                            <span className="--capitalize --textLarge --extrabold">
                                {dataCurrency && dataCurrency.currency?.symbol}
                                {dataCurrency && dataCurrency.amount}
                            </span>
                        </div>
                        <Button onClick={() => handleSelectItem()}>
                            Add To Cart
                        </Button>
                        <div className='productPage__description' >
                            {data.description.substring(3, data.description.length - 4)}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Product