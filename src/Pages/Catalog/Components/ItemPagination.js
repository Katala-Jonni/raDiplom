import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const ItemPagination = (props) => {
    const {item, location, handleSearch, className} = props;
    let pathQuery = Object.keys(location.query)
        .filter(el => el !== 'page')
        .map((el, idx) => idx === 0 ? `${el}=${location.query[el]}` : `&${el}=${location.query[el]}`)
        .join('');
    const path = `?${pathQuery}&page=${item}`;

    function handleClick(evt) {
        Array.from(evt.target.parentElement.parentElement.children, item => item.classList.remove('active'));
        evt.target.parentElement.classList.add('active');
        window.scroll(0, 0);
        handleSearch(location);
    }

    return (
        <li className={className}><NavLink to={path} onClick={handleClick}>{item}</NavLink></li>
    )
};

ItemPagination.defaultProps = {
    title: ''
};

ItemPagination.propTypes = {
    item: propTypes.number.isRequired,
    className: propTypes.string.isRequired,
    location: propTypes.object.isRequired,
    handleSearch: propTypes.func
};

export default ItemPagination;