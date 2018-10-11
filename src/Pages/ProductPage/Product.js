import React, {Component} from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemBreadcrumbs from '../../Components/Breadcrumbs/ItemBreadcrumbs';
import ProductCard from './Components/ProductCard';
import propTypes from 'prop-types';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            mainCategories: propTypes.arrayOf(propTypes.object),
            title: propTypes.string,
            categoryId: propTypes.number,
            id: propTypes.number,
            url: propTypes.string,
            type: propTypes.string,
        }
    }

    static get defaultProps() {
        return {
            mainCategories: []
        }
    }

    render() {
        const {categoryId, title, type, match: {url}, mainCategories, id} = this.props;
        if (!mainCategories.length || !id) {
            return null;
        }
        const category = mainCategories.find(item => item.id === categoryId).title;
        return (
            <div>
                <Breadcrumbs classNameWrap='site-path' classNameList='site-path__items'>
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Главная'
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title={category}
                        path={`/catalog/?categoryId=${categoryId}&sortBy=popularity&page=1`}
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title={type}
                        path={`/catalog/?categoryId=${categoryId}&type=${type}&sortBy=popularity&page=1`}
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title={title}
                        path={url}
                    />
                </Breadcrumbs>
                <ProductCard {...this.props}/>
            </div>
        );
    }
}

export default Product;