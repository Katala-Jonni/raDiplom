import React, {Component} from 'react';
import propTypes from 'prop-types';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValid: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static get propTypes() {
        return {
            item: propTypes.object
        }
    }

    static get defaultProps() {
        return {
            item: {}
        }
    }


    handleChange(evt) {
        this.setState({
            value: evt.target.value,
            isValid: evt.target.value.length > 0
        });
    }

    render() {
        const item = this.props.item;
        return (
            <label className="order-process__delivery-label">
                <div className="order-process__delivery-text">{item.title}</div>
                <input
                    className={`order-process__delivery-input ${item.className} ${this.state.isValid ? 'succesClass' : 'errorClass'}`}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </label>
        );
    }
}

export default InputText;