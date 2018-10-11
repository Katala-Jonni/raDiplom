import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import storage from '../../../storageBasket';
import propTypes from 'prop-types';

class OrderItemProduct extends Component {
    constructor(props) {
        super(props);
        this.handleClickAmount = this.handleClickAmount.bind(this);
    }

    static get propTypes() {
        return {
            product: propTypes.object,
            changeState: propTypes.func
        }
    }

    static get defaultProps() {
        return {
            product: {}
        }
    }

    editCount(product, count) {
        const basket = {
            "id": product.id,
            "size": product.size,
            "amount": count
        };
        storage.editLocale(JSON.stringify(basket), 'basket', this.props, false)
            .then(res => this.props.changeState(res))
    }

    handleClickAmount(evt) {
        const product = this.props.product;
        const bool = +evt.currentTarget.dataset.param;
        const count = bool ? product.amount + 1 : product.amount - 1;
        if (count === 0) {
            return;
        }
        this.editCount(product, count);
    }

    render() {
        const item = this.props.product;
        return (
            <div className="order-basket__item-list">
                <div className="basket-item">
                    <div
                        className="basket-item__pic">
                        <img src={item.images[0]} alt={item.title}/>
                    </div>
                    <div className="basket-item__product">
                        <div className="basket-item__product-name">
                            <NavLink to={`product/${item.id}`}>{item.title}</NavLink>
                        </div>
                        <div className="basket-item__product-features">
                            <div className="basket-item__size">Размер: <span>{item.size}</span></div>
                            <div className="basket-item__producer">Производитель: <span>{item.brand}</span></div>
                            <div className="basket-item__color">Цвет: <span>{item.color}</span></div>
                        </div>
                    </div>
                    <div className="basket-item__quantity">
                        <div className="basket-item__quantity-change basket-item-list__quantity-change_minus"
                             data-param={0} onClick={this.handleClickAmount}>-
                        </div>
                        {item.amount}
                        <div className="basket-item__quantity-change basket-item-list__quantity-change_plus"
                             data-param={1} onClick={this.handleClickAmount}>+
                        </div>
                    </div>
                    <div
                        className="basket-item__price">{item.price * item.amount}
                        <i className="fa fa-rub" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItemProduct;