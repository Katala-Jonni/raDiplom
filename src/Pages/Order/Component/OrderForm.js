import React, {Component} from 'react';
import HOC from '../../../HOC';
import propTypes from 'prop-types';

class OrderForm extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            errorRef: propTypes.func.isRequired,
            sendButton: propTypes.func.isRequired,
            errorSend: propTypes.string,
            address: propTypes.string,
            informationMessage: propTypes.string,
            targetPay: propTypes.string,
            btnTitle: propTypes.string,
        }
    }

    static get defaultProps() {
        return {
            errorSend: 'Одно или несколько полей не заполнено!',
            address: 'кому и куда доставить?',
            informationMessage: '*Все поля обязательны для заполнения. Наш оператор свяжется с вами для уточнения деталей заказа.',
            targetPay: 'хотите оплатить онлайн или курьеру при получении?',
            btnTitle: 'Подтвердить заказ'
        }
    }

    render() {
        const {errorRef, sendButton, errorSend, address, informationMessage, targetPay, btnTitle} = this.props;
        return (
            <div className="order-process__confirmed">
                <h2 ref={errorRef} className='errorSend hidden'>{errorSend}</h2>
                <form action="#">
                    <div className="order-process__delivery">
                        <h3 className="h3">{address}</h3>
                        <div className="order-process__delivery-form">
                            <HOC.InputText/>
                        </div>
                        <p>{informationMessage}</p>
                    </div>
                    <div className="order-process__paid">
                        <h3 className="h3">{targetPay}</h3>
                        <div className="order-process__paid-form">
                            <HOC.InputRadio/>
                        </div>
                    </div>
                    <button
                        className="order-process__form-submit order-process__form-submit_click"
                        onClick={sendButton}
                    >
                        {btnTitle}
                    </button>
                </form>
            </div>
        );
    }
}

export default OrderForm;