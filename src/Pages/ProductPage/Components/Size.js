import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const Size = (props) => {
    const {sizes, onClick, itemRef} = props;
    return (
        <ul className="sizes" ref={itemRef}>
            {sizes.map(item =>
                <li key={item.size} onClick={(evt) => onClick(evt, item.available)}>
                    <NavLink to='#'>{item.size}</NavLink>
                </li>
            )}
        </ul>
    );
};

Size.propTypes = {
    sizes: propTypes.array,
    onClick: propTypes.func,
    itemRef: propTypes.func,
};

Size.defaultProps = {
    sizes: []
};

export default Size;