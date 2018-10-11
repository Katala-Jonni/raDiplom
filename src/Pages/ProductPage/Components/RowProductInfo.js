import React from 'react';
import propTypes from 'prop-types'

const RowProductInfo = (props) => {
    const {title, value} = props;
    return (
        <tr>
            <td className="left-col">{title}:</td>
            <td className="right-col">{value}</td>
        </tr>
    );
};

RowProductInfo.propTypes = {
    title: propTypes.string,
    value: propTypes.any,
};

RowProductInfo.defaultProps = {
    title: '',
    value: ''
};


export default RowProductInfo;