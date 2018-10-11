import React from 'react';
import shortId from "shortid";
import Items from './Items';
import propTypes from 'prop-types';

const ListItem = ({items, title, className, query, data}) => {
    const totalItem = () => items.map(item =>
        <Items
            key={shortId.generate()}
            item={item}
            param={query}
            data={data}
        />);
    return (
        <div className={`dropped-menu__lists ${className}`}>
            <h3 className="dropped-menu__list-title">{title}:</h3>
            <ul className="dropped-menu__list">
                {totalItem()}
            </ul>
        </div>
    )
};

ListItem.defaultProps = {
    className: '',
    title: ''
};

ListItem.propTypes = {
    items: propTypes.array.isRequired,
    title: propTypes.string,
    className: propTypes.string,
    query: propTypes.string,
    data: propTypes.object,
};

export default ListItem;