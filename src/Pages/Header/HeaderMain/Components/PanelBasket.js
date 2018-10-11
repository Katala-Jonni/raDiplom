import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import shortId from 'shortid';
import DeleteItem from './DeleteItem';
import propTypes from 'prop-types';
import storage from "../../../../storageBasket";

class PanelBasket extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            totalProducts: propTypes.arrayOf(propTypes.object).isRequired
        }
    }

    getProducts() {
        const {totalProducts} = this.props;
        return totalProducts.map(product => {
            return (
                <div key={shortId.generate()} className="product-list__item">
                    <NavLink
                        to={`/product/${product.id}`}
                        className="product-list__pic"
                    >
                        <img src={product.images[0]} alt="product"/>
                    </NavLink>
                    <NavLink
                        to={`/product/${product.id}`}
                        className="product-list__product">{product.title}, размер {product.size}
                    </NavLink>
                    <div className="product-list__fill"></div>
                    <div className="product-list__price">{product.price * product.amount}
                        <i className="fa fa-rub" aria-hidden="true"></i>
                    </div>
                    <DeleteItem {...this.props} product={product} storage={storage}/>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="basket-dropped__product-list product-list">
                {this.getProducts()}
            </div>
        );
    }
}

export default PanelBasket;