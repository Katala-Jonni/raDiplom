import React, {Component} from 'react';
import propTypes from 'prop-types';

class NewDealList extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            onClick: propTypes.func,
            mainCategories: propTypes.arrayOf(propTypes.object),
            itemRef: propTypes.func
        }
    }

    static get defaultProps() {
        return {
            mainCategories: []
        }
    }

    render() {
        const {onClick, mainCategories, itemRef} = this.props;
        if (!mainCategories) {
            return null;
        }
        if (!mainCategories.length) {
            return (
                <h2>...Loading</h2>
            )
        }
        const activeCategory = mainCategories[1].id;
        return (
            <div className="new-deals__menu">
                <ul className="new-deals__menu-items" ref={itemRef}>
                    {mainCategories.map((item) =>
                        <li key={item.id}
                            className={`new-deals__menu-item ${item.id === activeCategory ? 'new-deals__menu-item_active' : ''}`}
                            data-id={item.id}
                            onClick={(evt) => onClick(evt)}
                        >
                            <a href='#'>{item.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default NewDealList;