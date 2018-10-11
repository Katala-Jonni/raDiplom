import React from 'react';
import shortId from 'shortid';
import propTypes from 'prop-types';

const style = (elem) => {
    return {
        backgroundImage: `url(${elem})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    };
};

const Image = (props) => {
    const {sliders, clickImage} = props;
    return sliders.map((item, idx) =>
        <div key={shortId.generate()}
             className={`favourite-product-slider__item favourite-product-slider__item-${idx + 1}`}
             style={style(item)}
             onClick={(evt) => clickImage(evt, item)}
        >
            <a href='#'></a>
        </div>
    );
};

Image.defaultProps = {
    sliders: []
};

Image.propTypes = {
    sliders: propTypes.array.isRequired,
    clickImage: propTypes.func,

};

export default Image;