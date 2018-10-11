import React, {Component} from 'react';
import Top from './TopMenu/Top';
import HeaderMain from './HeaderMain/HeaderMain';
import MainNavigation from './MainMenu/MainNavigation';
import DroppedMenu from './DroppedMenu/Dropped';
import util from '../../js/util';


class Header extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveClass = this.handleRemoveClass.bind(this);
    }

    handleRemoveClass() {
        util.classRemove('main-menu__item_active');
        util.classRemove('dropped-menu_visible');
    }

    render() {
        return (
            <header className="header">
                <Top {...this.props} menuList={util.topMenuList}/>
                <HeaderMain {...this.props}/>
                <MainNavigation {...this.props}/>
                <DroppedMenu {...this.props}/>
            </header>
        );
    }
}

export default Header;