import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {stringify, parse} from 'qs';
import qHistory from 'qhistory';
import Header from './Pages/Header/Header';
import Order from './Pages/Order/Order';
import Favorite from "./Pages/Favourite/Favorite";
import Footer from './Pages/Footer/Footer';
import HOC from './HOC';
import API from './API';
import toggleInterface from './js/script';
import util from './js/util';
import sessionStorage from './sessionStorage';
import storageFavorite from './storageFavorite';
import './css/normalize.css';
import './css/style.css';
import './css/font-awesome.min.css';
import './css/style-product-card.css';
import './css/style-catalogue.css';
import './css/style-order.css';
import './css/style-favorite.css';

const hist = createBrowserHistory();
const history = qHistory(
    hist,
    stringify,
    parse
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basketProducts: [],
            totalProducts: [],
            activeCategory: {},
            favoriteCatalog: {},
            pagesFavorite: 1,
            favoriteSort: 'popularity'
        };
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleRemoveClass = this.handleRemoveClass.bind(this);
        this.handleFavorite = this.handleFavorite.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidUpdate(nextProps) {
        toggleInterface();
    }

    getTotalProductApi(data) {
        return Promise.all(
            data.map(item => {
                return API.get(API.create(item.id, true))
                    .then(res => Object.assign({}, res.data, {size: item.size, amount: item.amount}))
                    .catch(e => console.log(e.message))
            })
        )
    }

    changeState(data) {
        this.setState(data)
    }

    handleCategory(elem) {
        const categoryState = {
            activeCategory: elem.query.categoryId
        };
        this.changeState(categoryState);
    }

    handleFavorite(data, pages, sort = this.state.favoriteSort) {
        const favorite = {
            favoriteCatalog: data,
            pagesFavorite: pages,
            favoriteSort: sort
        };
        this.changeState(favorite);
    }

    handleRemoveClass() {
        util.classRemove('main-menu__item_active');
        util.classRemove('dropped-menu_visible');
    }

    handleChangeState(data) {
        this.getTotalProductApi(data)
            .then(res => {
                const products = {
                    basketProducts: data || [],
                    totalProducts: res
                };
                this.changeState(products);
            })
    }

    getFavoriteStorage() {
        storageFavorite.get();
        let favorite = JSON.parse(localStorage['favorite']);
        if (!favorite.length) {
            return `&id[]=''`;
        }
        return favorite.map((item, idx) => {
            if (idx === 0) {
                return `id[]=${item}`
            }
            return `&id[]=${item}`;
        }).join('');
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        return (
            <Router history={history}>
                <div className="container">
                    <Header
                        storage={sessionStorage}
                        hist={history}
                        handleCategory={this.handleCategory}
                        changeState={this.handleChangeState}
                        handleRemoveClass={this.handleRemoveClass}
                        {...totalProps}
                    />
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            <HOC.MainPage
                                {...props}
                                {...totalProps}
                            />
                        )}/>
                        <Route path='/product/:id' render={(props) => (
                            <HOC.Product
                                {...props}
                                storage={sessionStorage}
                                changeState={this.handleChangeState}
                                {...totalProps}
                            />
                        )}/>
                        <Route exact path='/order' render={(props) => (
                            <Order
                                {...props}
                                changeState={this.handleChangeState}
                                {...totalProps}
                            />
                        )
                        }/>
                        <Route exact path='/catalog' render={(props) => (
                            <HOC.Catalog
                                {...props}
                                handleRemoveClass={this.handleRemoveClass}
                                handleSearch={this.handleCategory}
                                changeState={this.handleChangeState}
                                {...totalProps}
                            />
                        )
                        }/>
                        <Route exact path='/favorite' render={(props) => (
                            <Favorite
                                {...props}
                                favoritePath={this.getFavoriteStorage()}
                                getFavoritePath={this.getFavoriteStorage}
                                handleFavorite={this.handleFavorite}
                                queryPath={JSON.parse(localStorage['favorite'])}
                                {...totalProps}
                            />
                        )
                        }/>
                        <Redirect to={'/'}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;