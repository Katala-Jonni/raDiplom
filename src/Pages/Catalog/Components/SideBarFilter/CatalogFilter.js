import React from 'react';
import propTypes from 'prop-types';

const CatalogFilter = ({location, param, query, mainCatalog, handleClickFilterWidget}) => {
    function handleClickFilter(evt) {
        evt.preventDefault();
        handleClickFilterWidget(query, evt.target.textContent);
    }

    const items = () => param.map(item =>
        <li key={item} onClick={handleClickFilter}>
            <a href='#'>{item}</a>
        </li>);
    return (
        <ul>
            {items()}
        </ul>
    );
};

CatalogFilter.defaultProps = {
    param: [],
    query: ''
};

CatalogFilter.propTypes = {
    handleClickFilterWidget: propTypes.func,
    location: propTypes.object,
    mainCatalog: propTypes.object,
    param: propTypes.array,
    query: propTypes.string
};

export default CatalogFilter;