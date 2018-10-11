import React from 'react';
import {NavLink} from 'react-router-dom';
import util from '../js/util';
import propTypes from 'prop-types';

const WatchedList = props => {
    const {sliders, count} = props;
    return sliders.map((item, idx) => {
        if (idx > count - 1) {
            return;
        }
        return (
            <div key={item.id} className={`overlooked-slider__item overlooked-slider__item-${idx + 1}`}
                 style={util.imageStyle(item.images[0])}>
                <NavLink to={`/product/${item.id}`}></NavLink>
            </div>
        )
    });
};

WatchedList.propTypes = {
    sliders: propTypes.array.isRequired,
    count: propTypes.number,
};

WatchedList.defaultProps = {
    count: 0
};


export default WatchedList;