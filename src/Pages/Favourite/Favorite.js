import React, {Component} from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemBreadcrumbs from '../../Components/Breadcrumbs/ItemBreadcrumbs';
import ProductCatalogList from '../../Components/ProductCatalog/ProductCatalogList';
import ProductCatalogHead from '../../Components/ProductCatalog/ProductCatalogHead'
import util from '../../js/util';
import API from '../../API';
import HOC from '../../HOC';

util.catalogTitle.classNameCatalogTitleAmount = 'amount amount_favorite';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
        this.handleChangeSortBy = this.handleChangeSortBy.bind(this);
        this.handleChangeFetch = this.handleChangeFetch.bind(this);
    }

    componentDidMount() {
        this.handleChangeFetch(this.props);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.props.pagesFavorite !== nextProps.pagesFavorite) {
            this.handleChangeFetch(nextProps);
        } else if (this.props.favoritePath !== nextProps.favoritePath) {
            this.handleChangeFetch(nextProps);
        } else if (this.props.favoriteSort !== nextProps.favoriteSort) {
            this.handleChangeFetch(nextProps);
        }
    }

    handleChangeFetch(props) {
        const {favoritePath, handleFavorite, pagesFavorite, favoriteSort} = props;
        API.get(API.create(`?${favoritePath}&sortBy=${favoriteSort}&page=${pagesFavorite}`, true))
            .then(res => {
                handleFavorite(res, this.props.pagesFavorite, favoriteSort);
            })
            .catch(e => e.message);
    }

    handleClickFavorite(evt) {
        evt.preventDefault();
        if (evt.target.classList.contains('new-deals__product_favorite-chosen')) {
            const {favoriteCatalog, pagesFavorite, handleFavorite} = this.props;
            let count = !(favoriteCatalog.data.length - 1 > 0) ? pagesFavorite - 1 : pagesFavorite;
            handleFavorite(favoriteCatalog, count);
        }
    }

    handleChangeSortBy(evt) {
        const {favoriteCatalog, pagesFavorite, handleFavorite} = this.props;
        handleFavorite(favoriteCatalog, pagesFavorite, evt.target.value);
    }

    render() {
        const {favoriteCatalog, pagesFavorite} = this.props;
        if (!favoriteCatalog.data) {
            return null;
        }
        const totalProps = Object.assign({}, this.props, this.state);
        return (
            <div className="wrapper wrapper_favorite">
                <Breadcrumbs classNameWrap='site-path' classNameList='site-path__items'>
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Главная'
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Избранное'
                        path={`/favorite`}
                    />
                </Breadcrumbs>
                <main className="product-catalogue product-catalogue_favorite">
                    <ProductCatalogHead
                        classNameSection='product-catalogue__head product-catalogue__head_favorite'
                        catalogTitle='В вашем избранном'
                        catalogTitleCount={`товаров: ${favoriteCatalog.goods} шт.`}
                        catalogSortOnChange={this.handleChangeSortBy}
                        {...util.SortParam}
                        {...util.catalogTitle}
                        {...totalProps}
                    />
                    <section
                        className="product-catalogue__item-list product-catalogue__item-list_favorite"
                        onClick={this.handleClickFavorite}
                    >
                        <ProductCatalogList filterCatalog={favoriteCatalog}/>
                    </section>
                    {favoriteCatalog.pages > 1
                        ? <HOC.PaginationFavorite
                            pagePagination={pagesFavorite}
                            filterCatalog={favoriteCatalog}
                            {...totalProps}
                        />
                        : null
                    }
                </main>
            </div>
        );
    }
}

export default Favorite;