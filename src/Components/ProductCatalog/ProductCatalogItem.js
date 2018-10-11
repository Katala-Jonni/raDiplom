import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import FavoriteChosen from "../../Components/FavoriteChosen";
import strorageFavorite from '../../storageFavorite';
import propTypes from 'prop-types';

class ProductCatalogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: this.props.item.images[0],
            count: 0
        };
        this.handleClickSlider = this.handleClickSlider.bind(this);
    }

    static get propTypes() {
        return {
            item: propTypes.object.isRequired,
            itemProducer: propTypes.string,
        }
    }

    static get defaultProps() {
        return {
            item: {},
            itemProducer: 'Производитель:'
        }
    }

    changeState(data) {
        this.setState({
            count: data
        });
    }

    handleClickSlider(evt) {
        evt.preventDefault();
        const {item} = this.props;
        let {count} = this.state;
        let num = +evt.target.dataset.param
            ? ++count % item.images.length
            : (item.images.length - count - 1) % item.images.length;
        this.changeState(num);
    }

    render() {
        const {item, itemProducer} = this.props;
        const isItemLength = item.images.length > 1;
        return (
            <NavLink className="item-list__item-card item" to={`/product/${item.id}`}>
                <div className="item-pic">
                    <img className="item-pic-img"
                         src={item.images[this.state.count]}
                         alt={item.title}
                    />
                    <FavoriteChosen
                        id={item.id}
                        favorite={strorageFavorite.has(item.id)}
                        className={'new-deals__product_favorite'}
                    />
                    {isItemLength
                        ? <div className="arrow arrow_left" data-param={0} onClick={this.handleClickSlider}></div>
                        : null
                    }
                    {isItemLength
                        ? <div className="arrow arrow_right" data-param={1} onClick={this.handleClickSlider}></div>
                        : null
                    }
                </div>
                <div className="item-desc">
                    <h4 className="item-name">{item.title}</h4>
                    <p
                        className="item-producer">
                        {itemProducer}
                        <span className="producer">{item.brand}</span>
                    </p>
                    <p className="item-price">{item.price}</p>
                </div>
            </NavLink>
        )
    }
}

export default ProductCatalogItem;