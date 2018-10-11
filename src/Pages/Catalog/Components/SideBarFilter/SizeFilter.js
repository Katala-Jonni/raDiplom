import React from 'react';
import CheckItem from './CheckItem';
import propTypes from 'prop-types';

const SizeFilter = (props) => {
    const {param} = props;
    let count = 5;
    const items = () => param.map(item =>
        <CheckItem
            key={item}
            item={item}
            {...props}
        />
    );
    const list1 = items().slice(0, count);
    const list2 = items().slice(count);

    return (
        <ul>
            <div className="list-1">
                {list1}
            </div>
            <div className="list-2">
                {list2}
            </div>
        </ul>
    );
};

SizeFilter.defaultProps = {
    param: []
};

SizeFilter.propTypes = {
    param: propTypes.array
};

export default SizeFilter;