import React, {Component} from 'react';
import ListItem from './ListItem';

class MainNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="main-menu">
                <div className="wrapper">
                    <ListItem {...this.props}/>
                </div>
            </nav>
        );
    }
}

export default MainNavigation;