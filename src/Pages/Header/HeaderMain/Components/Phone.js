import React from 'react';
import propTypes from 'prop-types';

const Phone = (props) => {
    const {phone, title} = props;
    return (
        <div className="header-main__phone">
            <a href={phone}>{phone}</a>
            <p>{title}</p>
        </div>
    );
};

Phone.defaultProps = {
    title: '',
    phone: ''
};

Phone.propTypes = {
    title: propTypes.string,
    phone: propTypes.string,
};

export default Phone;