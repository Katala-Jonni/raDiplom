import React, {Component} from 'react';
import HOC from './HOC';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HOC.App {...this.props}/>
        );
    }
}

export default Filter;