import React from 'react';
import CatalogTitle from './CatalogTitle';
import CatalogSort from './CatalogSort';
import propTypes from 'prop-types';

const ProductCatalogHead = (props) => {
    return (
        <section className={props.classNameSection}>
            <CatalogTitle {...props} />
            <CatalogSort {...props} />
        </section>
    );
};

ProductCatalogHead.propTypes = {
    classNameSection: propTypes.string.isRequired
};

export default ProductCatalogHead;