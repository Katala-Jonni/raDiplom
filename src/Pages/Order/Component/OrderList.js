import React, {Component} from 'react';
import OrderItemProduct from './OrderItemProduct';
import shortId from 'shortid';
import propTypes from 'prop-types';

class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            totalProducts: propTypes.arrayOf(propTypes.object)
        }
    }

    static get defaultProps() {
        return {
            totalProducts: [],
            title: 'в вашей корзине:'
        }
    }

    render() {
        const {totalProducts, title} = this.props;
        return (
            <div className="order-process__basket order-basket">
                <div className="order-basket__title">{title}</div>
                {totalProducts.map(item => <OrderItemProduct key={shortId.generate()} {...this.props} product={item}/>)}
            </div>
        );
    }
}

export default OrderList;