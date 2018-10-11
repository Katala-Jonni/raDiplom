import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const ItemBreadcrumbs = (props) => {
    const {title, className, path, isClick, onClick} = props;
    return (
        <li className={className} onClick={isClick ? onClick : () => {
        }}>
            <NavLink to={path}>{title}</NavLink>
        </li>
    )
};

ItemBreadcrumbs.defaultProps = {
    path: '/'
};

ItemBreadcrumbs.propTypes = {
    title: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
    path: propTypes.string.isRequired,
    isClick: propTypes.bool,
    onClick: propTypes.func,
};

export default ItemBreadcrumbs;