import React, {Component} from 'react';
import SliderListingButton from '../../../Components/Slider/SliderListingButton';
import NewImage from './NewImage'
import strorageFavorite from '../../../storageFavorite';
import handleClickListing from '../../../js/handleClickListing';
import propTypes from 'prop-types';

const style = (elem) => {
    return {
        backgroundImage: `url(${elem})`,
        backgroundSize: 'contain'
    };
};

class NewSlider extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            handleSliderState: propTypes.func,
            getCurrentData: propTypes.func
        }
    }

    render() {
        const {handleSliderState, getCurrentData} = this.props;
        const currentData = getCurrentData(this.props);
        if (!currentData) {
            return null;
        }
        if (!currentData.length || currentData.length < 3) {
            return (
                <h2>Новинок нет</h2>
            )
        }

        return (
            <div className="new-deals__slider">
                <SliderListingButton
                    className="new-deals__arrow new-deals__arrow_left arrow"
                    directionButton="left"
                    sliders={currentData}
                    onClick={handleClickListing}
                    changeStateSliders={handleSliderState}
                />
                <NewImage
                    className="new-deals__product new-deals__product_first"
                    style={style}
                    item={currentData[0]}
                />
                <NewImage
                    className="new-deals__product new-deals__product_active"
                    style={style}
                    item={currentData[1]}
                    isFavorite
                    favoriteClassName='new-deals__product_favorite'
                    favorite={strorageFavorite.has}
                />
                <NewImage
                    className="new-deals__product new-deals__product_last"
                    style={style}
                    item={currentData[2]}
                />
                <SliderListingButton
                    className="new-deals__arrow new-deals__arrow_right arrow"
                    directionButton="right"
                    sliders={currentData}
                    onClick={handleClickListing}
                    changeStateSliders={handleSliderState}
                />
            </div>
        );
    }
}

export default NewSlider;