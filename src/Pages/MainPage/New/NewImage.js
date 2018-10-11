import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import FavoriteChosen from '../../../Components/FavoriteChosen';
import propTypes from 'prop-types';

class NewImage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static get propTypes() {
        return {
            item: propTypes.object.isRequired,
            className: propTypes.string.isRequired,
            style: propTypes.func.isRequired,
            isFavorite: propTypes.bool,
            favoriteClassName: propTypes.string,
            favorite: propTypes.func,
        }
    }

    static get defaultProps() {
        return {
            isFavorite: false,
            item: {}
        }
    }

    render() {
        const {item, className, style, isFavorite, favoriteClassName, favorite} = this.props;
        return (
            <div
                className={className}
                style={style(item.images[0])}>
                <NavLink to={`/product/${item.id}`}></NavLink>
                {isFavorite
                    ? <FavoriteChosen
                        id={item.id}
                        favorite={favorite(item.id)}
                        className={favoriteClassName}
                    />
                    : null
                }
            </div>
        )
    }
}

export default NewImage;