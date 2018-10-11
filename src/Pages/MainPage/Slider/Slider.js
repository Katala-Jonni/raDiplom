import React, {Component} from 'react';
import SliderControl from './SliderControl';
import SliderImg from './SliderImg';
import util from '../../../js/util';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="slider">
                <div className="wrapper">
                    <div className="slider__pictures">
                        <SliderImg dataImages={util.dataImages}/>
                        <div className="arrow slider__arrow slider__arrow_left"></div>
                        <div className="arrow slider__arrow slider__arrow_right"></div>
                        <SliderControl dataImages={util.dataImages}/>
                        <h2 className="h2">К весне готовы!</h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;