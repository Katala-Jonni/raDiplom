import React, {Component} from 'react';
import propTypes from 'prop-types';
import storage from "../../sessionStorage";

export default () => Slider => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            similarProducts: this.props.products ? storage.getSessionStorage(this.props.products) : []
        };
        this.changeSimilarProduct = this.changeSimilarProduct.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    static get propTypes() {
        return {
            classNameWrap: propTypes.string.isRequired,
            classNameSlider: propTypes.string.isRequired,
            classNameButtonLeft: propTypes.string.isRequired,
            classNameButtonRight: propTypes.string.isRequired,
            titleSlider: propTypes.string,
            listingButton: propTypes.func.isRequired,
            count: propTypes.number,
            products: propTypes.string
        }
    }

    static get defaultProps() {
        return {
            count: 0
        }
    }

    changeState(data) {
        this.setState(data);
    }

    changeSimilarProduct(param) {
        const state = {
            similarProducts: param
        };
        this.changeState(state);
    }

    componentWillReceiveProps(nextProps) {
        const state = {
            similarProducts: this.props.products ? storage.getSessionStorage(nextProps.products) : nextProps.data
        };
        this.changeState(state);
    }

    render() {
        let {similarProducts} = this.state;
        if (!similarProducts) {
            return null;
        }

        let filterCurrentProduct = similarProducts.filter(item => item.id !== this.props.id);
        if (!filterCurrentProduct.length) {
            return null;
        }

        return (
            <Slider
                sliders={filterCurrentProduct}
                changeStateSliders={this.changeSimilarProduct}
                {...this.props}
            />
        );
    }
};