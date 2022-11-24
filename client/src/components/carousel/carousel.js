import "./styles.css";

import React, { useState } from "react";

import { ReactComponent as LeftIcon } from '../../assets/svg/left.svg'
import { ReactComponent as RightIcon } from '../../assets/svg/right.svg'

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <img src={slides[current]} alt="product" className="image" />
            <div className="slider__controls">
                <div className="icon__left" onClick={prevSlide}>
                    {" "}
                    <LeftIcon />
                </div>
                <div className="icon__right " onClick={nextSlide}>
                    <RightIcon />
                </div>
            </div>

        </div>
    );
}

export default Carousel;