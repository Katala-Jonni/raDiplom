import React, {Component} from 'react';
import propTypes from 'prop-types';

class DeleteItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    static get propTypes() {
        return {
            product: propTypes.object.isRequired,
            storage: propTypes.object.isRequired,
            changeState: propTypes.func.isRequired,
            title: propTypes.string,
            bool: propTypes.bool,
        }
    }

    static get defaultProps() {
        return {
            title: 'basket',
            bool: true
        }
    }

    handleClickDelete() {
        const {product, storage, changeState, title, bool} = this.props;
        const basket = {
            "id": product.id,
            "size": product.size,
            "amount": 0
        };
        const basketData = JSON.stringify(basket);

        storage.editLocale(basketData, title, this.props, bool)
            .then(res => changeState(res))
    }

    render() {
        return (
            <div className="product-list__delete" onClick={this.handleClickDelete}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        );
    }
}

export default DeleteItem;