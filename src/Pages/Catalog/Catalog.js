import React, {Component} from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemBreadcrumbs from '../../Components/Breadcrumbs/ItemBreadcrumbs';
import CatalogSideBar from './Components/CatalogSideBar';
import CatalogProducts from "./Components/CatalogProducts";
import HOC from '../../HOC';
import API from '../../API';
import util from '../../js/util';
import propTypes from 'prop-types';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCatalog: [],
            locationQuery: {},
            size: [],
            heelSize: [],
            isSale: false,
            allCheckBoxChecked: false,
            start: 0,
            end: 60000,
            sliderRangeStyleLeft: '0%',
            sliderRangeStyleRight: '100%',
            sliderRangeWidth: '100%'
        };
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleClickFilterWidget = this.handleClickFilterWidget.bind(this);
        this.getApiCatalog = this.getApiCatalog.bind(this);
        this.getPathName = this.getPathName.bind(this);
        this.handleClickSale = this.handleClickSale.bind(this);
        this.handleStateIsSale = this.handleStateIsSale.bind(this);
        this.handleChangeRangeSlider = this.handleChangeRangeSlider.bind(this);
        this.handleChangeLocationQuery = this.handleChangeLocationQuery.bind(this);
        this.getCallBackSort = this.getCallBackSort.bind(this);
    }

    static get propTypes() {
        return {
            mainCatalog: propTypes.object,
            locationQuery: propTypes.object,
            mainCategories: propTypes.arrayOf(propTypes.object),
            handleRemoveClass: propTypes.func
        }
    }

    handleChangeState(data) {
        this.setState(data);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const state = {
            filterCatalog: nextProps.mainCatalog,
            locationQuery: nextProps.location.query,
        };
        this.handleChangeState(state);
    }

    handleChangeRangeSlider(val, elem) {
        const state = {
            start: val[0],
            end: val[1],
            sliderRangeStyleLeft: elem[1].style.left,
            sliderRangeStyleRight: elem[2].style.left,
            sliderRangeWidth: elem[0].style.width
        };
        this.handleChangeState(state);
    }

    handleStateIsSale() {
        const state = {
            isSale: false,
            allCheckBoxChecked: true,
            start: 0,
            end: 60000,
            sliderRangeStyleLeft: '0%',
            sliderRangeStyleRight: '100%',
            sliderRangeWidth: '100%',
            sortDefaultValue: 'popularity'
        };
        this.handleChangeState(state);
    }

    handleClickSale() {
        this.getApiCatalog(this.getPathName());
        const state = {
            isSale: !this.state.isSale,
            allCheckBoxChecked: false
        };
        this.handleChangeState(state);
    }

    handleChangeLocationQuery(path, text) {
        let {locationQuery} = this.state;
        path in locationQuery ? locationQuery[path] = text : locationQuery[path] = text;
    }

    handleChangeSize(path, text) {
        const sizeFilter = this.state[path];
        const isHas = sizeFilter.indexOf(text);
        sizeFilter.includes(text)
            ? sizeFilter.splice(isHas, 1)
            : sizeFilter.push(text);
    }

    getCallBackSort(evt) {
        this.handleClickFilterWidget('sortBy', evt.target.value)
    }

    handleClickFilterWidget(path, text, queryParamSize = false) {
        queryParamSize ? this.handleChangeSize(path, text) : this.handleChangeLocationQuery(path, text);
        this.getApiCatalog(this.getPathName());
    }

    getSizeFilterQuery(arr, query) {
        return arr.map(item => `${query}=${item}`).join('');
    }

    getLocationFilterQuery(locationQuery) {
        locationQuery.page = 1;
        if (!locationQuery.discounted) {
            delete locationQuery.discounted;
        }
        return Object.keys(locationQuery).map((item, idx) => idx === 0
            ? `${item}=${locationQuery[item]}`
            : `&${item}=${locationQuery[item]}`
        ).join('');
    }

    getPathName() {
        let {locationQuery, size, heelSize} = this.state;
        const sizeFilter = this.getSizeFilterQuery(size, `&size[]`);
        const heelSizeFilter = this.getSizeFilterQuery(heelSize, `&heelSize[]`);
        const locationQueryFilter = this.getLocationFilterQuery(locationQuery);
        return `${locationQueryFilter}${sizeFilter}${heelSizeFilter}`;
    }

    getApiCatalog(loc) {
        API.get(API.create(`?${loc}`, true))
            .then(res => {
                return {
                    filterCatalog: res,
                    allCheckBoxChecked: false
                };
            })
            .then(res => this.handleChangeState(res))
            .catch(e => console.log(e.message));
    }

    getTitle() {
        const {location: {query: {categoryId}}, location, mainCategories} = this.props;
        if (location.query['search']) {
            return 'Результат поиска';
        } else if (location.query['categoryId']) {
            return mainCategories.find(item => item.id === +categoryId).title;
        } else {
            return 'Каталог';
        }
    }

    render() {
        const totalProps = Object.assign({}, this.props, this.state);
        const {location, mainCategories, mainCatalog, handleRemoveClass} = totalProps;
        if (!mainCategories || !mainCatalog) {
            return null;
        }
        if (!mainCatalog.data.length) {
            return (
                <HOC.Watched
                    products={'products'}
                    {...util.sliderParam}
                />
            )
        }
        return (
            <div onClick={handleRemoveClass}>
                <Breadcrumbs classNameWrap='site-path' classNameList='site-path__items'>
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Главная'
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title={this.getTitle()}
                        path={`/catalog/${location.search}`}
                        isClick
                        onClick={this.handleStateIsSale}
                    />
                </Breadcrumbs>
                <main className="product-catalogue">
                    <CatalogSideBar
                        handleClickFilterWidget={this.handleClickFilterWidget}
                        isSale={this.state.isSale}
                        handleClickSale={this.handleClickSale}
                        handleStateIsSale={this.handleStateIsSale}
                        handleChangeRangeSlider={this.handleChangeRangeSlider}
                        getApiCatalog={this.getApiCatalog}
                        getPathName={this.getPathName}
                        handleChangeLocationQuery={this.handleChangeLocationQuery}
                        {...totalProps}
                    />
                    <CatalogProducts
                        catalogSortOnChange={this.getCallBackSort}
                        title={this.getTitle()}
                        {...totalProps}
                    />
                </main>
                <HOC.Watched
                    products={'products'}
                    {...util.sliderParam}
                    {...totalProps}
                />
            </div>
        );
    }
}

export default Catalog;