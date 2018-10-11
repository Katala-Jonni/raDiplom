import React, {Component} from 'react';
import propTypes from 'prop-types';

class InputRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

    render() {
        const item = this.props.item;
        return (
            <label className="order-process__paid-label">
                <input
                    className="order-process__paid-radio"
                    type="radio"
                    name="paid"
                    value={item.value}
                    defaultChecked={item.defaultChecked}
                />
                <span className="order-process__paid-text">{item.title}</span>
            </label>
        );
    }
}

export default InputRadio;