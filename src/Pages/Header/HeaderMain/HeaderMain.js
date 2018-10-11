import React, {Component} from 'react';
import Phone from './Components/Phone';
import Logo from './Components/Logo';
import Interface from './Components/MainInterface/Interface';
import PanelProfile from './Components/PanelProfile';
import Basket from './Components/Basket';
import mainLogo from '../../../img/header-logo.png';
import util from '../../../js/util';
import storage from '../../../storageBasket';

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchValue: ''
        };
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    handleClickSearch(evt, bool) {
        this.setState({
            redirect: bool,
            searchValue: evt
        });
    }

    componentWillUpdate(nextProps) {
        this.searchRef.value = ''
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        return (
            <div className="header-main" onClick={totalProps.handleRemoveClass}>
                <div className="header-main__wrapper wrapper">
                    <Phone
                        phone='+7 495 79 03 5 03'
                        title='Ежедневно: с 09-00 до 21-00'
                    />
                    <Logo
                        mainLogo={mainLogo}
                        title='Обувь и аксессуары для всей семьи'
                    />
                    <Interface
                        handleClickSearch={this.handleClickSearch}
                        searchRef={el => this.searchRef = el}
                        {...totalProps}
                    />
                </div>
                <div className="header-main__hidden-panel hidden-panel">
                    <PanelProfile
                        items={util.profilePanelItems}
                    />
                    <Basket
                        localStorage={storage}
                        pathOrder={'/order'}
                        {...this.props}/>
                </div>
            </div>
        );
    }
}

export default HeaderMain;