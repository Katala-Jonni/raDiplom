import React, {Component} from 'react';
import Slider from "./Slider/Slider";
import NewDealList from './New/NewDealList';
import SliderView from './New/SliderView';
import Event from './SaleAndNews/Event';
import AboutUs from './AboutUs/AboutUs';
import slider from '../../js/slider';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currents: [],
            activeProduct: '',
            activeCategory: ''
        };
        this.handleClickCategories = this.handleClickCategories.bind(this);
        this.changeState = this.changeState.bind(this);
        this.handleSliderState = this.handleSliderState.bind(this);
    }

    changeState(param) {
        this.setState(param)
    }

    handleSliderState(param) {
        const product = {
            currents: param,
            activeProduct: param[1]
        };
        this.changeState(product);
    }

    handleClickCategories(evt) {
        evt.preventDefault();
        Array.from(this.currentActiveRef.children, item => item.classList.remove('new-deals__menu-item_active'));
        evt.currentTarget.classList.add('new-deals__menu-item_active');
        const product = {
            currents: [],
            activeProduct: null,
            activeCategory: +evt.currentTarget.dataset.id
        };
        this.changeState(product);
    }

    componentDidMount() {
        slider();
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        return (
            <div>
                <Slider/>
                <section className="new-deals wave-bottom">
                    <h2 className="h2">Новинки</h2>
                    <NewDealList
                        onClick={this.handleClickCategories}
                        itemRef={el => this.currentActiveRef = el}
                        {...totalProps}
                    />
                    <SliderView
                        handleSliderState={this.handleSliderState}
                        {...totalProps}
                    />
                </section>
                <Event/>
                <AboutUs/>
            </div>
        );
    }
}

export default Main;