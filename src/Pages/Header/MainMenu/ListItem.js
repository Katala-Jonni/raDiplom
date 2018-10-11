import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const ListItem = ({mainCategories, handleCategory, hist}) => {
    if (!mainCategories) {
        return null;
    }

    function handleClickCategory() {
        handleCategory(hist.location)
    }

    return (
        <ul className="main-menu__items">
            {mainCategories.map(item => {
                return (
                    <li
                        key={item.id}
                        className={`main-menu__item`}
                        onClick={handleClickCategory}
                        data-id={item.id}
                        data-title={item.title}
                    >
                        <NavLink
                            exact
                            to={`/catalog/?categoryId=${item.id}&sortBy=popularity&page=${1}`}>{item.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

ListItem.propTypes = {
    mainCategories: propTypes.array,
    handleCategory: propTypes.func.isRequired,
    hist: propTypes.object.isRequired,
};

export default ListItem;