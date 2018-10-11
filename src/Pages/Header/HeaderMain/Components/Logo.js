import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';

const Logo = (props) => {
    const {mainLogo, title, path} = props;
    return (
        <div className="header-main__logo">
            <NavLink exact to={path}>
                <h1>
                    <img src={mainLogo} alt={title}/>
                </h1>
            </NavLink>
            <p>{title}</p>
        </div>

    );
};

Logo.defaultProps = {
    mainLogo: '',
    title: '',
    path: '/'
};

Logo.propTypes = {
    title: propTypes.string,
    mainLogo: propTypes.string,
    path: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
};

export default Logo;