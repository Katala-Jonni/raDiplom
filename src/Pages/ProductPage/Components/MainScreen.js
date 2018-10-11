import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            mainImages: propTypes.oneOfType([propTypes.string, propTypes.array]).isRequired,
            title: propTypes.string
        }
    }

    static get defaultProps() {
        return {
            title: ''
        }
    }

    render() {
        const {mainImages, title} = this.props;
        if (!mainImages) {
            return null;
        }
        return (
            <div className="main-screen__favourite-product-pic">
                <NavLink to="#"><img src={mainImages} alt={title}/></NavLink>
                <NavLink
                    to="#"
                    className="main-screen__favourite-product-pic__zoom"
                >
                </NavLink>
            </div>
        );
    }
}

export default MainScreen;