import React, {Component} from 'react';
import FilterReset from './SideBarFilter/FilterReset';
import SeparatorFilter from './SideBarFilter/SeparatorFilter';
import priceSlider from '../../../js/priceSlider';
import SaleFilter from './SideBarFilter/SaleFilter';
import HOC from '../../../HOC';
import util from "../../../js/util";
import propTypes from 'prop-types';

class CatalogSideBar extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            handleChangeRangeSlider: propTypes.func,
            handleStateIsSale: propTypes.func,
            filters: propTypes.object,
            location: propTypes.object
        };
    }

    componentDidMount() {
        priceSlider(this.props.handleChangeRangeSlider);
    }

    render() {
        const {location, filters, handleStateIsSale} = this.props;
        if (!filters) {
            return null;
        }
        return (
            <section className="sidebar">
                <HOC.FilterCatalog
                    title={'Каталог'}
                    className={'catalogue-list'}
                    query={'type'}
                    param={filters.type}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterPrice
                    title={'Цена'}
                    className={'price'}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterColor
                    title={'Цвет'}
                    className={'color'}
                    query={'color'}
                    param={filters.color}
                    filterColor={util.colorFilter}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterSize
                    title={'Размер'}
                    className={'size'}
                    query={'size'}
                    param={filters.sizes}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterSize
                    title={'Размер каблука'}
                    className={'size'}
                    query={'heelSize'}
                    param={filters.heelSize}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterCatalog
                    title={'Повод'}
                    className={'occasion'}
                    query={'reason'}
                    param={filters.reason}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterCatalog
                    title={'Сезон'}
                    className={'occasion'}
                    query={'season'}
                    param={filters.season}
                    {...this.props}
                />
                <SeparatorFilter/>
                <HOC.FilterCatalog
                    title={'Бренд'}
                    className={'occasion'}
                    query={'brand'}
                    param={filters.brand}
                    {...this.props}
                />
                <SeparatorFilter/>
                <SaleFilter {...this.props}/>
                <SeparatorFilter/>
                <FilterReset
                    handleStateIsSale={handleStateIsSale}
                    path={`${location.pathname}?sortBy=popularity&page=${1}`}
                />
            </section>
        );
    }
}

export default CatalogSideBar;