import React, {Component} from 'react';
import propTypes from 'prop-types';

class CheckItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.handleClickChecked = this.handleClickChecked.bind(this);
    }

    static get propTypes() {
        return {
            handleClickFilterWidget: propTypes.func,
            item: propTypes.number,
            allCheckBoxChecked: propTypes.bool,
            query: propTypes.string
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.allCheckBoxChecked) {
            this.handleChangeState(false);
        }
    }

    handleChangeState(data) {
        this.setState({
            isChecked: data
        });
    }

    handleClickChecked(evt) {
        this.handleChangeState(!this.state.isChecked);
        this.handleRenderCatalog(evt.currentTarget);
    }

    handleRenderCatalog(data) {
        const {handleClickFilterWidget} = this.props;
        handleClickFilterWidget(data.dataset.query, data.dataset.number, true);
    }

    render() {
        const {item, query} = this.props;
        return (
            <li>
                <label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        name={`checkbox-${item}`}
                        data-query={query}
                        data-number={item}
                        checked={this.state.isChecked}
                        onClick={this.handleClickChecked}
                    />
                    <span className="checkbox-custom"></span> <span className="label">{item}</span>
                </label>
            </li>
        );
    }
}

export default CheckItem;