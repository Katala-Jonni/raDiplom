import React from 'react';
import propTypes from 'prop-types';

const QuantityProduct = (props) => {
    const {handleClickMinus, handleClickPlus, count} = props;
    return (
        <div className="basket-item__quantity">
            <div className="basket-item__quantity-change basket-item-list__quantity-change_minus"
                 onClick={handleClickMinus}>-
            </div>
            {count}
            <div className="basket-item__quantity-change basket-item-list__quantity-change_plus"
                 onClick={handleClickPlus}>+
            </div>
        </div>
    );
};

QuantityProduct.propTypes = {
    handleClickMinus: propTypes.func,
    handleClickPlus: propTypes.func,
    count: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

QuantityProduct.defaultProps = {
    count: 1
};

export default QuantityProduct;