import '../styles/product.css';
import { Component } from 'react';
import Button from '../components/button/button'
import ColorButton from '../components/colorButton/colorButton';
import ImageTest from "../assets/images/Product.png";
import React from 'react'
import SizeButton from '../components/sizeButton/sizeButton'

// function Product() {
//     return (
//         <div className='productPage__container'>
//             <div className='productPage__imgs'>
//                 <div className='productPage__imgs--list'>
//                     <img src={ImageTest} alt="hhh" />
//                     <img src={ImageTest} alt="hhh" />
//                     <img src={ImageTest} alt="hhh" />
//                 </div>
//                 <div className='productPage__img'>
//                     <img src={ImageTest} alt="hhh" />
//                 </div>
//             </div>
//             <div className='productPage__details'>
//                 <div className='productPage__name'>
//                     <span className="--textExtraLarge --bold">
//                         Apollo
//                     </span>
//                     <p className="--textExtraLarge">
//                         Running Short
//                     </p>
//                 </div>
//                 <div className='productPage__control'>
//                     <div className='productPage__size'>
//                         <span className="--capitalize --textBig --extrabold">
//                             Size:
//                         </span>
//                         <div className="productPage__size--container">
//                             <SizeButton size='lg' isActive onClick={() => console.log("teal")}>
//                                 S
//                             </SizeButton>
//                             <SizeButton size='lg' onClick={() => console.log("teal")}>
//                                 M
//                             </SizeButton>
//                         </div>
//                     </div>
//                     <div className='productPage__color'>
//                         <span className="--capitalize --textBig --extrabold">
//                             Color:
//                         </span>
//                         <div className='productPage__color--container'>
//                             <ColorButton size='lg' isActive color='teal' onClick={() => console.log("teal")} />
//                             <ColorButton size='lg' color='black' onClick={() => console.log("black")} />
//                             <ColorButton size='lg' color='darkOrange' onClick={() => console.log("darkOrange")} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='productPage__price'>
//                     <span className="--capitalize --textBig --extrabold">
//                         price:
//                     </span>
//                     <span className="--capitalize --textLarge --extrabold">$50.00</span>
//                 </div>
//                 <Button onClick={() => console.log("first")}>
//                     Add To Cart
//                 </Button>
//                 <div className='productPage__description'>
//                     Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
//                 </div>

//             </div>
//         </div>
//     )
// }

class  Product extends Component {
    render(){
        return (
            <div className='productPage__container'>
                <div className='productPage__imgs'>
                    <div className='productPage__imgs--list'>
                        <img src={ImageTest} alt="hhh" />
                        <img src={ImageTest} alt="hhh" />
                        <img src={ImageTest} alt="hhh" />
                    </div>
                    <div className='productPage__img'>
                        <img src={ImageTest} alt="hhh" />
                    </div>
                </div>
                <div className='productPage__details'>
                    <div className='productPage__name'>
                        <span className="--textExtraLarge --bold">
                            Apollo
                        </span>
                        <p className="--textExtraLarge">
                            Running Short
                        </p>
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
                        <span className="--capitalize --textLarge --extrabold">$50.00</span>
                    </div>
                    <Button onClick={() => console.log("first")}>
                        Add To Cart
                    </Button>
                    <div className='productPage__description'>
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </div>
    
                </div>
            </div>
        )
    }
  
}
export default Product