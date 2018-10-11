import React from 'react';
import shortId from "shortid";
import propTypes from 'prop-types';

const SliderControl = ({dataImages}) => {
    return (
        <div className="slider__circles">
            {dataImages.map((item, idx) =>
                <button
                    key={shortId.generate()}
                    className="slider__circle"
                    value={idx}>
                </button>)
            }
        </div>
    );
};

SliderControl.propTypes = {
    dataImages: propTypes.array.isRequired,
};

SliderControl.defaultProps = {
    dataImages: []
};

export default SliderControl;