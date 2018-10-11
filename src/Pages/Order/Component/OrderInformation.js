import React from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import propTypes from 'prop-types';

const OrderInformation = (props) => {
    const {
        totalProducts, handleClickSend, errorRef,
        getTotalPrice, description, orderProcess, totalSumTitle
    } = props;
    if (!totalProducts.length) {
        return (
            <h2>{description}</h2>
        )
    }
    return (
        <div>
            <h2 className="order-process__title">{orderProcess}</h2>
            <OrderList {...props}/>
            <div
                className="order-basket__summ">
                {totalSumTitle}
                <span>
                    {getTotalPrice}
                    <i className="fa fa-rub" aria-hidden="true"></i>
                </span>
            </div>
            <OrderForm
                sendButton={handleClickSend}
                errorRef={errorRef}
                {...props}
            />
        </div>
    )
};

OrderInformation.defaultProps = {
    description: '«В корзине пока ничего нет. Не знаете, с чего начать? Посмотрите наши новинки!»',
    orderProcess: 'Оформление заказа',
    totalSumTitle: ' Итого:'
};

OrderInformation.propTypes = {
    handleClickSend: propTypes.func.isRequired,
    errorRef: propTypes.func.isRequired,
    getTotalPrice: propTypes.number,
    totalProducts: propTypes.arrayOf(propTypes.object).isRequired,
    description: propTypes.string,
    orderProcess: propTypes.string,
    totalSumTitle: propTypes.string,
};

export default OrderInformation;