import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const SimilarProductSlider = ({sliders, countSlides}) => {
    return sliders.map((item, idx) => {
        if (idx > countSlides) {
            return null;
        }
        return (
            <div key={item.id} className="similar-products-slider__item-list__item-card item">
                <div className="similar-products-slider__item">
                    <NavLink to={`${item.id}`}>
                        <img
                            src={item.images[0]}
                            className={`similar-products-slider__item-pic-${idx + 1}`}
                            alt={item.title}
                        />
                    </NavLink>
                </div>
                <div className="similar-products-slider__item-desc">
                    <h4 className="similar-products-slider__item-name">{item.title}</h4>
                    <p className="similar-products-slider__item-producer">Производитель: <span
                        className="producer">{item.brand}</span></p>
                    <p className="similar-products-slider__item-price">{item.price}</p>
                </div>
            </div>
        );

    });
};

SimilarProductSlider.propTypes = {
    sliders: propTypes.array.isRequired,
    countSlides: propTypes.number.isRequired,
};

SimilarProductSlider.defaultProps = {
    countSlides: 2
};

export default SimilarProductSlider;