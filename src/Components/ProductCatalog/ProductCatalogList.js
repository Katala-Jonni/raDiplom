import React, {Component} from 'react';
import ProductCatalogItem from './ProductCatalogItem';
import propTypes from 'prop-types';

class ProductCatalogList extends Component {
    getProductsItem() {
        return this.props.filterCatalog.data.map(item => <ProductCatalogItem key={item.id} item={item}/>)
    }

    static get propTypes() {
        return {
            filterCatalog: propTypes.object.isRequired,
        }
    }

    static get defaultProps() {
        return {
            filterCatalog: {}
        }
    }

    render() {
        return this.getProductsItem();
    }
}

export default ProductCatalogList;