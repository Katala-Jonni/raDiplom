import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const PanelProfile = (props) => {
    const {items} = props;
    return (
        <div className="hidden-panel__profile">
            {items.map(item =>
                <NavLink key={item.title} to={item.to}>
                    <i className={item.className} aria-hidden={item.ariaHidden}></i>
                    {item.title}
                </NavLink>
            )}
        </div>

    );
};

PanelProfile.propTypes = {
    items: propTypes.array.isRequired
};

export default PanelProfile;