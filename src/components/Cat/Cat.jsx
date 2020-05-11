import React from 'react';
import Lottie from "react-lottie";
import animationCat from './cat.json';
import '../../App.css';

const Cat = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat,
    };

    return (
        <div className='cat-container'>
            <Lottie
            options={defaultOptions}
            />
        </div>
    )
};

export default Cat;