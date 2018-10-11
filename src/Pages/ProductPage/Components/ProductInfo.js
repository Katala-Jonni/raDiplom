import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import storage from '../../../storageBasket';
import FavoriteChosen from '../../../Components/FavoriteChosen';
import strorageFavorite from '../../../storageFavorite';
import InStock from './InStock';
import RowProductInfo from './RowProductInfo';
import Size from './Size';
import SizeTable from './SizeTable';
import QuantityProduct from './QuantityProduct';
import BasketButton from './BasketButton';
import propTypes from 'prop-types';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes: [...this.props.sizes],
            count: 1,
            isAvailable: false,
            isStock: false,
            disabledButtonBasket: true,
            currentSize: '',
            cartId: ''
        };
        this.storage = 'basket';
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickSize = this.handleClickSize.bind(this);
        this.handleClickInBasket = this.handleClickInBasket.bind(this);
    }

    static get propTypes() {
        return {
            sizes: propTypes.array,
            count: propTypes.number,
            price: propTypes.number.isRequired,
            categoryId: propTypes.number.isRequired,
            id: propTypes.number.isRequired,
            sku: propTypes.string,
            currentSize: propTypes.string,
            color: propTypes.string,
            material: propTypes.string,
            season: propTypes.string,
            reason: propTypes.string,
            brand: propTypes.string,
            title: propTypes.string,
            changeState: propTypes.func.isRequired
        }
    }

    static get defaultProps() {
        return {
            sizes: [],
            count: 1,
            price: 0
        }
    }

    removeClass(parent) {
        Array.from(parent, item => item.classList.remove('active'));
    }

    componentWillReceiveProps(nextProps) {
        if (!(nextProps.match.params.id === this.props.match.params.id)) {
            this.removeClass(this.currentSizeRef.children);
            this.setState({
                isStock: false,
                count: 1,
                isAvailable: false
            })
        }
        this.setState({
            sizes: [...nextProps.sizes],
        })
    }

    handleClickInBasket() {
        const basket = {
            "id": this.props.id,
            "size": +this.state.currentSize,
            "amount": +this.state.count
        };
        const basketData = JSON.stringify(basket);
        storage.editLocale(basketData, 'basket', this.props, false)
            .then(res => storage.getLocale('basket', this.props.changeState))
    }

    handleClickSize(evt, bool) {
        this.removeClass(this.currentSizeRef.children);
        evt.currentTarget.classList.add('active');
        this.setState({
            isAvailable: bool,
            isStock: true,
            currentSize: evt.target.textContent
        });
    }

    handleClickMinus() {
        this.setState({
            count: this.state.count <= 1 ? 1 : this.state.count - 1
        })
    }

    handleClickPlus() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {sizes, isAvailable, isStock, count} = this.state;
        const {title, sku, brand, color, material, season, reason, price, categoryId, id} = this.props;

        return (
            <div className="main-screen__product-info">
                <InStock
                    isStock={isStock}
                    isAvailable={isAvailable}
                    title={title}
                    classNameTitle='product-info-title'
                    ClassNameStock='in-stock'
                />
                <div className="product-features">
                    <table className="features-table">
                        <tbody>
                        <RowProductInfo
                            title='Артикул'
                            value={sku}
                        />
                        <RowProductInfo
                            title='Производитель'
                            value={
                                <NavLink
                                    to={`/catalog/?categoryId=${categoryId}&brand=${brand}&sortBy=popularity&page=1`}>
                                    <span className="producer">{brand}</span>
                                </NavLink>
                            }
                        />
                        <RowProductInfo
                            title='Цвет'
                            value={color}
                        />
                        <RowProductInfo
                            title='Материалы'
                            value={material}
                        />
                        <RowProductInfo
                            title='Сезон'
                            value={season}
                        />
                        <RowProductInfo
                            title='Повод'
                            value={reason}
                        />
                        </tbody>
                    </table>
                </div>
                <p className="size">Размер</p>
                <Size
                    sizes={sizes}
                    onClick={this.handleClickSize}
                    itemRef={el => this.currentSizeRef = el}
                />
                <SizeTable/>
                <NavLink to="#" className="in-favourites-wrapper">
                    <FavoriteChosen
                        id={id}
                        favorite={strorageFavorite.has(id)}
                        className={'favourite'}
                    />
                    <p className="in-favourites">В избранное</p>
                </NavLink>
                <QuantityProduct
                    handleClickMinus={this.handleClickMinus}
                    handleClickPlus={this.handleClickPlus}
                    count={count}
                />
                <div className="price">{price * this.state.count} ₽</div>
                <BasketButton isAvailable={isAvailable} handleClickInBasket={this.handleClickInBasket}/>
            </div>
        );
    }
}

export default ProductInfo;