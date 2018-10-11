import React from 'react';
import {NavLink} from 'react-router-dom';
import shortId from "shortid";
import propTypes from 'prop-types';

const SliderImg = ({dataImages}) => {
    return (
        dataImages.map(item => {
            return (
                <NavLink key={shortId.generate()} to={item.to} className='slider__image'>
                    <img src={item.src} alt={item.description}/>
                </NavLink>
            );
        })
    );
};

SliderImg.propTypes = {
    dataImages: propTypes.array.isRequired,
};

SliderImg.defaultProps = {
    dataImages: []
};

export default SliderImg;