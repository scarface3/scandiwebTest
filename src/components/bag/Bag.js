import './styles.css';

import React, { useCallback } from 'react'

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import { Component } from 'react';
import { closeCart } from '../../redux/cart/cartSlice';
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Bag() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOpenBag = useCallback(
        () => {
            navigate("/cart")
        },
        [navigate],
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
                <div className="bag__top">
                    <div className="bag__head">
                        <p className="bag__text --extrabold">
                            My bag,{" "}
                        </p>
                        <span className="bag__text">{" "} 3 items</span>
                    </div>
                    <CartItem />
                    <div className="bag__footer">
                        <span className="bag__text --bold">Total</span>
                        <span className="bag__text --extrabold">$200.00</span>
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
            </div>
            <div className="bag__overlay" onClick={handleToggleCart}></div>
        </>


    )
}



// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// const VisibleTodoList = connect(mapStateToProps , mapDispatchToProps)(TodoList)


// class Bag extends Component {
//     // const dispatch = useDispatch()
//     // const navigate = useNavigate()
    
    
//     // handleOpenBag = useCallback(
//     //     () => {
//     //         navigate("/cart")
//     //     },
//     //     [navigate],
//     // )

//     handleToggleCart = useCallback(
//         () => {
//             return VisibleTodoList(closeCart())
//         },
//         [dispatch],
//     )
// render(){
//     return (
//         <>
//             <div className="bag__main">
//                 <div className="bag__top">
//                     <div className="bag__head">
//                         <p className="bag__text --extrabold">
//                             My bag,{" "}
//                         </p>
//                         <span className="bag__text">{" "} 3 items</span>
//                     </div>
//                     <CartItem />
//                     <div className="bag__footer">
//                         <span className="bag__text --bold">Total</span>
//                         <span className="bag__text --extrabold">$200.00</span>
//                     </div>
//                 </div>

//                 <div className="bag__bottom">
//                     <Button type="button" color="secondary" onClick={handleOpenBag}>
//                         View Bag
//                     </Button >
//                     <Button type="button" onClick={() => console.log("hi")}>
//                         Check Out
//                     </Button >
//                 </div>
//             </div>
//             <div className="bag__overlay" onClick={handleToggleCart}></div>
//         </>


//     )
// }
// }


export default Bag