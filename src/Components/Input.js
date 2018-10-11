import React, {Component} from 'react';
import shortId from "shortid";
import propTypes from 'prop-types';

export default (elements) => Input => class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static get propTypes() {
        return {
            elements: propTypes.array.isRequired,
        }
    }

    static get defaultProps() {
        return {
            elements: []
        }
    }

    static get defaultName() {
        const name = Component.displayName || Component.name || 'Component';
        return `Input(${name})`;
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        return elements.map(item => {
            return <Input key={shortId.generate()} {...totalProps} item={item}/>
        })
    }
};