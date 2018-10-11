import React, {Component} from 'react';
import strorageFavorite from '../storageFavorite';
import propTypes from 'prop-types';

class FavoriteChosen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: this.props.favorite
        };
        this.handleClickFavoriteProduct = this.handleClickFavoriteProduct.bind(this);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }

    static get propTypes() {
        return {
            id: propTypes.number,
            favorite: propTypes.bool,
            className: propTypes.string
        }
    }

    static get defaultProps() {
        return {
            favorite: false
        }
    }

    handleClickFavoriteProduct(evt) {
        evt.preventDefault();
        const {id} = this.props;
        this.handleClickFavorite(id);
        this.setState({
            isFavorite: strorageFavorite.has(id)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isFavorite: nextProps.favorite
        })
    }

    handleClickFavorite(id) {
        strorageFavorite.edit(id);
    }

    render() {
        return (
            <div
                data-id={this.props.id}
                className={`${this.props.className}${this.state.isFavorite ? '-chosen' : ''}`}
                onClick={this.handleClickFavoriteProduct}>
            </div>
        );
    }
}

export default FavoriteChosen;