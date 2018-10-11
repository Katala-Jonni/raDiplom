import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

class Top extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            handleRemoveClass: propTypes.func.isRequired,
            menuList: propTypes.array,
        }
    }

    static get defaultProps() {
        return {
            menuList: []
        }
    }

    render() {
        const {menuList, handleRemoveClass} = this.props;
        return (
            <div className="top-menu" onClick={handleRemoveClass}>
                <div className="wrapper">
                    <ul className="top-menu__items">
                        {menuList.map(item => <li key={item.title} className="top-menu__item">
                            <NavLink exact to={item.to}>{item.title}</NavLink>
                        </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Top;