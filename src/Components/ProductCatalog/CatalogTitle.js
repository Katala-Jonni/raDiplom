import React from 'react';
import propTypes from 'prop-types';

const CatalogTitle = (props) => {
    const {classNameCatalogTitle, classNameCatalogTitleName, classNameCatalogTitleAmount, catalogTitle, catalogTitleCount} = props;
    return (
        <div className={classNameCatalogTitle}>
            <h2 className={classNameCatalogTitleName}>{catalogTitle}</h2>
            <span className={classNameCatalogTitleAmount}>{catalogTitleCount}</span>
        </div>
    )
};

CatalogTitle.propTypes = {
    classNameCatalogTitle: propTypes.string.isRequired,
    classNameCatalogTitleName: propTypes.string.isRequired,
    classNameCatalogTitleAmount: propTypes.string.isRequired,
    catalogTitle: propTypes.string.isRequired,
    catalogTitleCount: propTypes.oneOfType([propTypes.string, propTypes.number])
};

CatalogTitle.defaultProps = {
    catalogTitleCount: 0
};

export default CatalogTitle;