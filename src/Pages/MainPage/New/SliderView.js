import React, {Component} from 'react';
import NewSlider from './NewSlider';
import ProductInfo from './ProductInfo';

class SliderView extends Component {
    constructor(props) {
        super(props);
    }

    getCurrentData({currents, activeCategory, mainCategories, sliders}) {
        if (!sliders || !mainCategories) {
            return null;
        }
        const category = activeCategory || mainCategories[1].id;
        return (currents.length !== 0) ? currents : sliders.filter(item => item.categoryId === category);
    }

    render() {
        return (
            <div>
                <NewSlider {...this.props} getCurrentData={this.getCurrentData}/>
                <ProductInfo {...this.props} getCurrentData={this.getCurrentData}/>
            </div>
        );
    }
}

export default SliderView;

