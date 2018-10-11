import React from 'react';
import {NavLink} from 'react-router-dom';

const SizeTable = () => {
    return (
        <div className="size-wrapper">
            <NavLink
                to="#">
                <span className="size-rule"></span>
                <p className="size-table">Таблица размеров</p>
            </NavLink>
        </div>
    );
};
export default SizeTable;