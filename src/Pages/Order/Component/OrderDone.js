import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import storage from '../../../storageBasket';
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs';
import ItemBreadcrumbs from '../../../Components/Breadcrumbs/ItemBreadcrumbs';
import propTypes from 'prop-types';

class OrderDone extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            orderDone: propTypes.object,
            successMessage: propTypes.string,
            orderSumTitle: propTypes.string,
            paymentType: propTypes.string,
            paymentTypeTitle: propTypes.string,
            personName: propTypes.string,
            addressTitle: propTypes.string,
            phoneTitle: propTypes.string,
            messageSendEmail: propTypes.string,
            email: propTypes.string,
            btnTitle: propTypes.string,
            pathAfterBuy: propTypes.string,
        }
    }

    static get defaultProps() {
        return {
            orderDone: {},
            successMessage: 'Заказ принят, спасибо!',
            orderSumTitle: 'Сумма заказа:',
            paymentTypeTitle: 'Способ оплаты:',
            personName: 'Имя клиента:',
            addressTitle: 'Адрес доставки:',
            phoneTitle: 'Телефон:',
            messageSendEmail: 'Данные о заказе отправлены на адрес',
            email: 'notbosaanymore@gmail.com.',
            btnTitle: 'продолжить покупки',
            pathAfterBuy: '/',
        }
    }

    componentDidMount() {
        this.props.changeState([]);
        storage.save('', 'basket');
    }

    render() {
        const {address, name, paymentType, phone, totalPrice} = this.props.orderDone;
        const {
            successMessage, orderSumTitle, paymentTypeTitle, personName,
            addressTitle, phoneTitle, messageSendEmail, email, btnTitle, pathAfterBuy
        } = this.props;
        return (
            <div className="wrapper order-wrapper">
                <Breadcrumbs classNameWrap='site-path' classNameList='site-path__items'>
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Главная'
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Корзина'
                        path={`#`}
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Оформление заказа'
                        path={`#`}
                    />
                    <ItemBreadcrumbs
                        className="site-path__item"
                        title='Заказ принят'
                        path={`#`}
                    />
                </Breadcrumbs>
                <section className="order-done">
                    <h2 className="order-done__title order-process__title">{successMessage}</h2>
                    <div className="order-done__information order-info">
                        <div className="order-info__item order-info__item_summ">
                            <h3>{orderSumTitle}</h3>
                            <p>{totalPrice}<i className="fa fa-rub" aria-hidden="true"></i></p>
                        </div>
                        <div className="order-info__item order-info__item_pay-form">
                            <h3>{paymentTypeTitle}</h3>
                            <p>{paymentType}</p>
                        </div>
                        <div className="order-info__item order-info__item_customer-name">
                            <h3>{personName}</h3>
                            <p>{name}</p>
                        </div>
                        <div className="order-info__item order-info__item_adress">
                            <h3>{addressTitle}</h3>
                            <p>{address}</p>
                        </div>
                        <div className="order-info__item order-info__item_phone">
                            <h3>{phoneTitle}</h3>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <p className="order-done__notice">{messageSendEmail} <span>{email}  </span></p>
                    <NavLink to={pathAfterBuy} className="order-done__continue">{btnTitle}</NavLink>
                </section>
            </div>
        );
    }
}

export default OrderDone;