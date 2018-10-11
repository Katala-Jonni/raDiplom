import React, {Component} from 'react';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false
        };
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }

    handleClickSubmit(evt) {
        evt.preventDefault();
        const field = evt.target.parentElement.email;
        const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (field.value.match(reg)) {
            this.setState({
                isValid: true
            })
        }
    }

    render() {
        return (
            <section className="subscribe">
                <div className="subscribe__wrapper">
                    <h2 className="subscribe__title">подписаться на рассылку выгодных предложений</h2>
                    {this.state.isValid
                        ? <span>Подписка оформлена! Спасибо!</span>
                        : <form className="subscribe__radios" action="">
                            <label className="subscribe__radio_label">
                                <input className="subscribe__radio" type="radio" name="subscribe" defaultValue="women"/>
                                <div className="subscribe__radio_text">Женское</div>
                            </label>
                            <label className="subscribe__radio_label">
                                <input className="subscribe__radio" type="radio" name="subscribe" defaultValue="men"/>
                                <div className="subscribe__radio_text">Мужское</div>
                            </label>
                            <label className="subscribe__radio_label">
                                <input className="subscribe__radio" type="radio" name="subscribe" defaultValue="both"
                                       defaultChecked/>
                                <div className="subscribe__radio_text">Всё</div>
                            </label>
                            <input className="subscribe__email" type="email" placeholder="Ваш e-mail" name='email'/>
                            <input className="subscribe__submit" type="submit" defaultValue="ПОДПИСАТЬСЯ"
                                   onClick={this.handleClickSubmit}/>
                        </form>
                    }

                </div>
            </section>
        );
    }
}

export default Subscribe;