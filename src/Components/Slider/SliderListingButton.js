import React, {Component} from 'react';
import propTypes from 'prop-types'

class SliderListingButton extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            onClick: propTypes.func.isRequired,
            changeStateSliders: propTypes.func.isRequired,
            directionButton: propTypes.string.isRequired,
            count: propTypes.number,
            className: propTypes.string.isRequired,
            sliders: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.array]).isRequired
        }
    }

    static get defaultProps() {
        return {
            count: 0
        }
    }

    render() {
        const {onClick, sliders, changeStateSliders, directionButton, className, count} = this.props;
        const isFullSlider = sliders.length > count;
        if (!isFullSlider) {
            return null;
        }

        return (
            <div
                className={className}
                onClick={(evt) => onClick(evt, sliders, changeStateSliders)}
                data-id={directionButton}
            >
            </div>
        );
    }
}

export default SliderListingButton;