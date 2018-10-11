import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PanelBasket from './PanelBasket';
import propTypes from 'prop-types';

class Basket extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            storage: propTypes.object.isRequired,
            changeState: propTypes.func.isRequired,
            totalProducts: propTypes.array.isRequired,
            trueTitle: propTypes.string,
            falseTitle: propTypes.string,
            btnTitle: propTypes.string,
            pathOrder: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]).isRequired
        }
    }

    static get defaultProps() {
        return {
            falseTitle: '«В корзине пока ничего нет. Не знаете, с чего начать? Посмотрите наши новинки!»',
            trueTitle: 'В вашей корзине:',
            btnTitle: 'Оформить заказ'
        }
    }

    componentDidMount() {
        this.props.localStorage.getLocale('basket', this.props.changeState)
    }

    render() {
        const {trueTitle, totalProducts, falseTitle, pathOrder, btnTitle} = this.props;
        const isBasketProducts = totalProducts.length;
        return (
            <div className="hidden-panel__basket basket-dropped">
                <div
                    className="basket-dropped__title">
                    {isBasketProducts ? trueTitle : falseTitle}
                </div>
                {isBasketProducts
                    ? <PanelBasket {...this.props}/>
                    : null
                }
                {isBasketProducts
                    ? <NavLink className="basket-dropped__order-button" to={pathOrder}>{btnTitle}</NavLink>
                    : null
                }
            </div>
        );
    };
}

export default Basket;