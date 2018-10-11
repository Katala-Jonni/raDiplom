import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const FavoriteItemPagination = (props) => {

    const {item, location, className, handleFavorite, favoriteCatalog} = props;

    function handleClick(evt) {
        Array.from(evt.target.parentElement.parentElement.children, item => item.classList.remove('active'));
        evt.target.parentElement.classList.add('active');
        window.scroll(0, 0);
        handleFavorite(favoriteCatalog, +evt.target.textContent);
    }

    return (
        <li className={className}><NavLink to={location.pathname} onClick={handleClick}>{item}</NavLink></li>
    )
};

FavoriteItemPagination.defaultProps = {
    title: ''
};

FavoriteItemPagination.propTypes = {
    item: propTypes.number.isRequired,
    className: propTypes.string.isRequired,
    location: propTypes.object.isRequired,
    handleFavorite: propTypes.func,
    favoriteCatalog: propTypes.object,
};

export default FavoriteItemPagination;