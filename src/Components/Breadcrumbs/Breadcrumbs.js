import React, {Component} from 'react';
import propTypes from 'prop-types';

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            classNameWrap: propTypes.string.isRequired,
            classNameList: propTypes.string.isRequired,
            children: propTypes.arrayOf(propTypes.node)
        }
    }

    render() {
        const {classNameWrap, classNameList} = this.props;
        return (
            <div className={classNameWrap}>
                <ul className={classNameList}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;