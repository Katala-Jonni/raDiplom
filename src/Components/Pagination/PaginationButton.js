import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

class PaginationButton extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            className: propTypes.string,
            currentButton: propTypes.string,
            param: propTypes.number,
            callBack: propTypes.func,
        }
    }

    static get defaultProps() {
        return {
            currentButton: '/'
        }
    }

    render() {
        const {className, currentButton, param, callBack} = this.props;
        return (
            <div className={`angle-${className}`}>
                <NavLink
                    to={currentButton}
                    onClick={(evt) => callBack(evt, this.props)}
                    data-param={param}
                >
                </NavLink>
            </div>
        );
    }
}

export default PaginationButton;