import React, {Component} from 'react';
import API from '../API';

const Server = (endpoint, dataToState) => Component => class extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static get defaultName() {
        const name = Component.displayName || Component.name || 'Component';
        return `Server(${name})`;
    }

    componentWillMount() {
        this.fetchData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps);
    }

    fetchData(props) {
        let point = endpoint;
        if (typeof endpoint === 'function') {
            point = endpoint(props);
        }
        API.get(point)
            .then(res => {
                this.setState(
                    dataToState(res)
                )
            });
    }

    render() {
        return <Component {...this.props} {...this.state}/>
    }
};

export default Server;