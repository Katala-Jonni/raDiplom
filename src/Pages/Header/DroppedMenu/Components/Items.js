import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const Items = ({item, param, data}) => {
    return (
        <li className="dropped-menu__item" onClick={data.handleRemoveClass}>
            <NavLink
                to={`/catalog/?categoryId=${data.activeCategory}&${param}=${item}&sortBy=popularity&page=${1}`}>{item}</NavLink>
        </li>
    );
};

Items.propTypes = {
    item: propTypes.string.isRequired,
    param: propTypes.string,
    data: propTypes.object
};

export default Items;