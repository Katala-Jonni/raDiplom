import React from 'react';
import propTypes from 'prop-types';

const visible = {
    display: 'block'
};

const hidden = {
    display: 'none'
};

const Basket = (props) => {
    const basketProductsCount = props.totalProducts.length;
    return (
        <div className="header-main__pic header-main__pic_basket">
            <div className="header-main__pic_basket_full"
                 style={!basketProductsCount ? hidden : visible}>{basketProductsCount}</div>
            <div className="header-main__pic_basket_menu"></div>
        </div>
    );
};

Basket.propTypes = {
    totalProducts: propTypes.array.isRequired
};

Basket.defaultProps = {
    totalProducts: []
};


export default Basket;