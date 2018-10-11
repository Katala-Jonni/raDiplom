import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const ProductInfo = (props) => {
    const currentData = props.getCurrentData(props);
    if (!currentData) {
        return null;
    }
    if (!currentData.length) {
        return null;
    }
    const currentActiveProduct = currentData[1];
    return (
        <div className="new-deals__product-info">
            <NavLink to={`/product/${currentActiveProduct.id}`} className="h3">{currentActiveProduct.title}</NavLink>
            <p>Производитель:
                <span>{currentActiveProduct.brand}</span>
            </p>
            <h3 className="h3">{currentActiveProduct.price}</h3>
        </div>
    );
};

ProductInfo.propTypes = {
    getCurrentData: propTypes.func.isRequired
};

export default ProductInfo;