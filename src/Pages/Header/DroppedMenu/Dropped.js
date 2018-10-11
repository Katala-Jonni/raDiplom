import React, {Component} from 'react';
import ListItem from './Components/ListItem';

class DroppedMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.filters) {
            return null;
        }
        const {reason, season, brand, type} = this.props.filters;
        return (
            <div className="dropped-menu">
                <div className="wrapper">
                    <ListItem
                        items={reason}
                        title={'Повод'}
                        className={'dropped-menu__lists_women'}
                        query={'reason'}
                        data={this.props}
                    />
                    <ListItem
                        items={type}
                        title={'Категории'}
                        query={'type'}
                        data={this.props}
                    />
                    <ListItem
                        items={season}
                        title={'Сезон'}
                        query={'season'}
                        data={this.props}
                    />
                    <ListItem
                        items={brand}
                        title={'Бренд'}
                        className={'dropped-menu__lists_three-coloumns'}
                        query={'brand'}
                        data={this.props}
                    />
                </div>
            </div>
        );
    }
}

export default DroppedMenu;