import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const FilterReset = (props) => {
    const {handleStateIsSale, path, btnTitle} = props;
    return (
        <section className="sidebar__division reset-filter">
            <div className="drop-down" onClick={handleStateIsSale}>
                <NavLink to={path}>
                    <span className="drop-down-icon"></span>
                    {btnTitle}
                </NavLink>
            </div>
        </section>
    );
};

FilterReset.defaultProps = {
    btnTitle: 'Сбросить'
};

FilterReset.propTypes = {
    handleStateIsSale: propTypes.func,
    path: propTypes.string,
    btnTitle: propTypes.string,
};

export default FilterReset;