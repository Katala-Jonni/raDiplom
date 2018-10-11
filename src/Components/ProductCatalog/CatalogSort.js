import React from 'react';
import propTypes from 'prop-types';

const CatalogSort = (props) => {
    const {
        classNameCatalogSort, classNameCatalogSortTittle, sortingId,
        catalogSortOnChange, locationQuery, favoriteSort, sortTitle
    } = props;
    return (
        <div className={classNameCatalogSort}>
            <p className={classNameCatalogSortTittle}>{sortTitle}</p>
            <select name="" id={sortingId} value={locationQuery ? locationQuery.sortBy : favoriteSort}
                    onChange={catalogSortOnChange}>
                <option value="popularity">по популярности</option>
                <option value="price">по цене</option>
            </select>
        </div>
    );
};

CatalogSort.propTypes = {
    classNameCatalogSort: propTypes.string.isRequired,
    classNameCatalogSortTittle: propTypes.string.isRequired,
    favoriteSort: propTypes.string,
    sortingId: propTypes.string.isRequired,
    catalogSortDefaultValue: propTypes.string,
    sortTitle: propTypes.string,
    catalogSortOnChange: propTypes.func.isRequired,
    locationQuery: propTypes.object,
};

CatalogSort.defaultProps = {
    sortTitle: 'Сортировать',
    catalogSortDefaultValue: 'popularity'
};

export default CatalogSort;