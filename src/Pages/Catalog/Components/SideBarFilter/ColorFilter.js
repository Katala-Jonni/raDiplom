import React from 'react';
import propTypes from 'prop-types';

const ColorFilter = (props) => {
    const {param, query, handleClickFilterWidget, filterColor} = props;

    function handleClickFilter(evt) {
        evt.preventDefault();
        handleClickFilterWidget(query, evt.currentTarget.dataset.color);
    }

    const items = () => param.map(item =>
        <li key={item} onClick={handleClickFilter} data-color={item}>
            <a href="#">
                <div className="color" style={{backgroundColor: filterColor[item]}}></div>
                <span className="color-name">{item}</span>
            </a>
        </li>
    );

    return (
        <ul>
            {items()}
        </ul>
    );
};

ColorFilter.defaultProps = {
    param: [],
    query: ''
};

ColorFilter.propTypes = {
    handleClickFilterWidget: propTypes.func,
    filterColor: propTypes.object,
    param: propTypes.array,
    query: propTypes.string
};

export default ColorFilter;