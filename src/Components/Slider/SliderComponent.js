import React, {Component} from 'react';
import SliderListingButton from './SliderListingButton';
import propTypes from 'prop-types';

export default () => List => class extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            classNameWrap: propTypes.string.isRequired,
            classNameSlider: propTypes.string.isRequired,
            classNameButtonLeft: propTypes.string.isRequired,
            classNameButtonRight: propTypes.string.isRequired,
            titleSlider: propTypes.string,
            listingButton: propTypes.func.isRequired,
            changeStateSliders: propTypes.func.isRequired,
            count: propTypes.number,
            sliders: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.array]).isRequired
        }
    }

    static get defaultProps() {
        return {
            count: 0
        }
    }

    static get defaultName() {
        const name = Component.displayName || Component.name || 'Component';
        return `SliderComponent(${name})`;
    }

    render() {
        const {listingButton, sliders, classNameWrap, titleSlider, classNameSlider, classNameButtonLeft, classNameButtonRight, count, changeStateSliders} = this.props;
        return (
            <section className={classNameWrap}>
                {titleSlider ? <h3>{titleSlider}</h3> : null}
                <div className={classNameSlider}>
                    <SliderListingButton
                        className={classNameButtonLeft}
                        directionButton="left"
                        sliders={sliders}
                        onClick={listingButton}
                        count={count}
                        changeStateSliders={changeStateSliders}
                    />
                    <List {...this.props}/>
                    <SliderListingButton
                        className={classNameButtonRight}
                        directionButton="right"
                        sliders={sliders}
                        onClick={listingButton}
                        count={count}
                        changeStateSliders={changeStateSliders}
                    />
                </div>
            </section>
        )
    }
};