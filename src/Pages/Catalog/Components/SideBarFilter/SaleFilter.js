import React, {Component} from 'react';
import propTypes from 'prop-types';

class SaleFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSale: false
        };
        this.handleClickChecked = this.handleClickChecked.bind(this);
    }

    static get propTypes() {
        return {
            handleClickFilterWidget: propTypes.func,
            allCheckBoxChecked: propTypes.bool,
            checkBoxTitle: propTypes.string
        };
    }

    static get defaultProps() {
        return {
            checkBoxTitle: 'Со скидкой'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.allCheckBoxChecked) {
            this.handleChangeState(false);
        }
    }

    handleChangeState(data) {
        this.setState({
            isSale: data
        });
    }

    handleClickChecked() {
        this.handleChangeState(!this.state.isSale);
        this.props.handleClickFilterWidget('discounted', !this.state.isSale);
    }

    render() {
        return (
            <p className={'sale-label'}>
                <label>
                    <input type="checkbox" className="checkbox" name="sale" checked={this.state.isSale}
                           onClick={this.handleClickChecked}/>
                    <span className="checkbox-custom"></span>
                    <span className="label">{this.props.checkBoxTitle}</span>
                </label>
            </p>
        );
    }
}

export default SaleFilter;