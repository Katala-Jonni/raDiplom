import React, {Component} from 'react';
import ProductCatalogHead from '../../../Components/ProductCatalog/ProductCatalogHead';
import ProductCatalogList from '../../../Components/ProductCatalog/ProductCatalogList';
import util from '../../../js/util';
import propTypes from 'prop-types';
import HOC from '../../../HOC';

class CatalogProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathNext: this.handleClickListing(true),
            pathBack: this.handleClickListing(false),
        };
        this.handleClickListing = this.handleClickListing.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
    }

    static get propTypes() {
        return {
            catalogSortOnChange: propTypes.func,
            title: propTypes.string,
            filterCatalog: propTypes.object,
        };
    }

    componentWillReceiveProps() {
        this.handleChangeState();
    }

    handleChangeState() {
        this.setState({
            pathNext: this.handleClickListing(true),
            pathBack: this.handleClickListing(false),
        });
    }

    createPath(query) {
        return Object.keys(query)
            .filter(el => el !== 'page')
            .map((el, idx) => idx === 0 ? `${el}=${query[el]}` : `&${el}=${query[el]}`)
            .join('');
    }

    handleClickListing(bool) {
        const {location, filterCatalog} = this.props;
        let item = +location.query.page;
        item = bool ? item + 1 : item - 1;
        if (item < 1 || item > filterCatalog.pages) {
            return location.search;
        }
        return `?${this.createPath(location.query)}&page=${item}`;
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        const {title, filterCatalog, location} = totalProps;
        return (
            <section className="product-catalogue-content">
                <ProductCatalogHead
                    classNameSection='product-catalogue__head'
                    catalogTitle={title}
                    catalogTitleCount={filterCatalog.goods}
                    {...util.SortParam}
                    {...util.catalogTitle}
                    {...totalProps}
                />
                <section className="product-catalogue__item-list">
                    <ProductCatalogList filterCatalog={filterCatalog}/>
                    {filterCatalog.pages > 1
                        ?
                        <HOC.Pagination
                            pagePagination={location.query.page}
                            {...totalProps}
                        />
                        : null
                    }
                </section>
            </section>
        );
    }
}

export default CatalogProducts;