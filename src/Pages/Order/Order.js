import React, {Component} from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemBreadcrumbs from '../../Components/Breadcrumbs/ItemBreadcrumbs';
import OrderInformation from './Component/OrderInformation';
import OrderDone from "./Component/OrderDone";
import storage from '../../storageBasket';
import util from '../../js/util';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            isActiveOrderForm: true,
            orderDone: {}
        };
        this.handleClickSend = this.handleClickSend.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }

    changeState(bool, orderInfo) {
        this.setState({
            isActiveOrderForm: bool,
            orderDone: orderInfo
        })
    }

    filterInput(elements) {
        return elements.filter(item => {
            if (item.name) {
                if (item.type !== 'radio') {
                    return item;
                }
            }
        });
    }

    showErrorInput() {
        this.errorRef.classList.remove('hidden');
        setTimeout(() => {
            if (this.errorRef) {
                this.errorRef.classList.add('hidden');
            }
        }, 3000);
    }

    validInput(data) {
        let isValid = data.every(item => {
            return !(item.classList.contains('errorClass'));
        });
        if (!isValid) {
            this.showErrorInput();
        }
        return isValid;
    }

    createOrderData(data, elements) {
        let orderData = util.createOrderData();
        data.forEach(el => orderData[el.name] = el.value);
        const paymentType = elements.find(el => el.checked);
        orderData['paymentType'] = paymentType.value;
        this.sendOrder(JSON.stringify(orderData), paymentType);
    }

    sendOrder(orderData, paymentType) {
        storage.postOrder(orderData)
            .then(res => {
                const orderInfo = res.data.info;
                orderInfo.paymentType = paymentType.nextElementSibling.textContent;
                orderInfo.totalPrice = this.getTotalPrice();
                this.changeState(false, orderInfo);
            });
    }

    handleClickSend(evt) {
        evt.preventDefault();
        const elements = Array.from(evt.currentTarget.parentElement.elements);
        let data = this.filterInput(elements);
        const isValid = this.validInput(data);
        if (!isValid) return;
        evt.currentTarget.disabled = true;
        this.createOrderData(data, elements);
    }

    getTotalPrice() {
        let count = 0;
        this.props.totalProducts.forEach(item => {
            count += item.price * item.amount;
        });
        return count;
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        if (!totalProps.isActiveOrderForm) {
            return <OrderDone {...totalProps}/>
        }
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
                </Breadcrumbs>
                <section className="order-process">
                    <OrderInformation
                        getTotalPrice={this.getTotalPrice()}
                        handleClickSend={this.handleClickSend}
                        errorRef={el => this.errorRef = el}
                        {...totalProps}
                    />
                </section>
            </div>
        );
    }
}

export default Order;