import React, {Component} from 'react';
import priceSlider from "../../../../js/priceSlider";
import propTypes from 'prop-types';

class PriceFilter extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            handleChangeRangeSlider: propTypes.func,
            handleChangeLocationQuery: propTypes.func,
            getApiCatalog: propTypes.func,
            getPathName: propTypes.func,
            sliderRangeStyleLeft: propTypes.string,
            sliderRangeStyleRight: propTypes.string,
            sliderRangeWidth: propTypes.string,
            start: propTypes.number,
            end: propTypes.number,
        };
    }

    componentDidMount() {
        const {
            sliderRangeStyleLeft, sliderRangeStyleRight,
            sliderRangeWidth, handleChangeRangeSlider
        } = this.props;
        priceSlider(handleChangeRangeSlider);
        this.changeStyleRangeSlider(sliderRangeStyleLeft, sliderRangeStyleRight, sliderRangeWidth);
    }


    componentWillReceiveProps(nextProps) {
        const {start, end} = nextProps;
        const isChangeStart = start === this.props.start;
        const isChangeEnd = end === this.props.end;
        this.changeCatalog(isChangeStart, isChangeEnd, nextProps);
        if (start === 0 && end === 60000) {
            this.changeStyleRangeSlider('0%', '100%', '100%');
        }
    }


    changeCatalog(isChangeStart, isChangeEnd, props) {
        const {start, end, handleChangeLocationQuery, getApiCatalog, getPathName} = props;
        if (!isChangeStart || !isChangeEnd) {
            handleChangeLocationQuery('minPrice', start);
            handleChangeLocationQuery('maxPrice', end);
            getApiCatalog(getPathName());
        }
    }

    changeStyleRangeSlider(sliderRangeStyleLeft, sliderRangeStyleRight, sliderRangeWidth) {
        const handle = document.querySelector('.ui-slider-handle');
        handle.style.left = sliderRangeStyleLeft;
        handle.nextElementSibling.style.left = sliderRangeStyleRight;
        handle.previousElementSibling.style.left = sliderRangeStyleLeft;
        handle.previousElementSibling.style.width = sliderRangeWidth;
    }

    render() {
        const {start, end} = this.props;
        return (
            <div className="price-slider">
                <div className="price-slider">
                    <div id="slider-range"></div>
                </div>
                <div className="counter">
                    <input type="text" id='amount1' readOnly className="input-1" value={start}/>
                    <div className="input-separator"></div>
                    <input type="text" readOnly id='amount2' className="input-2" value={end}/>
                </div>
            </div>
        );
    }
}

export default PriceFilter;