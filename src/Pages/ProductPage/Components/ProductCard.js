import React, {Component} from 'react';
import MainScreen from './MainScreen';
import ProductInfo from './ProductInfo';
import handleClickListing from "../../../js/handleClickListing";
import HOC from '../../../HOC';
import util from '../../../js/util';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: this.props,
            mainImages: this.props.images[0],
            images: this.props.images,
            sliderImages: this.props.images.filter(item => item !== this.props.images[0])
        };
        this.storage = 'products';
        this.countForVisibleButton = 3;
        this.handleChangeMainImage = this.handleChangeMainImage.bind(this);
        this.changeProduct = this.changeProduct.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    changeState(data) {
        this.setState(data)
    }

    changeProduct(data) {
        const product = {
            sliderImages: data
        };
        this.changeState(product);
    }

    componentWillReceiveProps(nextProps) {
        const state = {
            currentProduct: nextProps,
            mainImages: nextProps.images[0],
            images: nextProps.images,
            sliderImages: nextProps.images.filter(item => item !== nextProps.images[0])
        };
        this.changeState(state);
    }

    handleChangeMainImage(evt, current) {
        evt.preventDefault();
        const slider = this.state.sliderImages.filter(item => item !== current);
        slider.push(this.state.mainImages);
        const state = {
            sliderImages: slider,
            mainImages: [current]
        };
        this.changeState(state);
    }

    render() {
        this.props.storage.saveSessionStorage(this.props, this.storage);
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        return (
            <main className="product-card">
                <section className="product-card-content">
                    <h2 className="section-name">{totalProps.title}</h2>
                    <section className="product-card-content__main-screen">
                        {totalProps.images.length <= 1
                            ? null
                            : <HOC.Image
                                classNameWrap='main-screen__favourite-product-slider'
                                classNameSlider='favourite-product-slider'
                                classNameButtonLeft='favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up'
                                classNameButtonRight='favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down'
                                sliders={totalProps.sliderImages}
                                count={this.countForVisibleButton}
                                changeStateSliders={this.changeProduct}
                                listingButton={handleClickListing}
                                clickImage={this.handleChangeMainImage}
                                {...totalProps}
                            />
                        }
                        <MainScreen {...totalProps} />
                        <ProductInfo {...totalProps}/>
                    </section>
                    <HOC.Watched
                        products={this.storage}
                        {...util.sliderParam}
                        {...totalProps}
                    />
                    <HOC.SimilarProducts
                        {...util.similarProductParam}
                        {...totalProps}
                    />
                </section>
            </main>
        );
    }
}

export default ProductCard;

