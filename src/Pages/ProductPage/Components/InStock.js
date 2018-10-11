import React from 'react';
import propTypes from 'prop-types';

const InStock = (props) => {
    const {title, isStock, isAvailable, classNameTitle, ClassNameStock, availableText, notAvailableText} = props;
    return (
        <div className={classNameTitle}><h2>{title}</h2>
            {isStock ?
                <div
                    className={ClassNameStock}>{isAvailable ? availableText : notAvailableText}
                </div>
                : null
            }
        </div>
    )
};

InStock.defaultProps = {
    isStock: false,
    title: '',
    availableText: 'В наличии',
    notAvailableText: 'Нет в наличии'
};

InStock.propTypes = {
    title: propTypes.string,
    availableText: propTypes.string,
    notAvailableText: propTypes.string,
    classNameTitle: propTypes.string.isRequired,
    ClassNameStock: propTypes.string.isRequired,
    isStock: propTypes.bool,
    isAvailable: propTypes.bool,
};

export default InStock;