import React from 'react';
import propTypes from 'prop-types';

const DivisionTitle = (props) => {
    const {title, isOpen, handleClickOpener} = props;
    return (
        <div className="sidebar__division-title">
            <h3>{title}</h3>
            <div
                className={`opener-${isOpen ? 'down' : 'up'}`}
                onClick={handleClickOpener}
            >
            </div>
        </div>
    );
};

DivisionTitle.propTypes = {
    handleClickOpener: propTypes.func,
    isOpen: propTypes.bool,
    title: propTypes.string
};

export default DivisionTitle;