import React from 'react';
import propTypes from 'prop-types';

const BasketButton = (props) => {
    const {isAvailable, handleClickInBasket} = props;
    if (!isAvailable) {
        return null;
    }
    return (
        <button className="in-basket in-basket-click" onClick={handleClickInBasket}>В корзину</button>
    );
};

BasketButton.propTypes = {
    isAvailable: propTypes.bool,
    handleClickInBasket: propTypes.func,
};

BasketButton.defaultProps = {
    isAvailable: false
};


export default BasketButton;