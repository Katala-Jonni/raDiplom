import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Search from './Search';
import Profile from './Profile';
import Basket from './Basket';
import Border from './Border';
import propTypes from 'prop-types';

class Interface extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static get propTypes() {
        return {
            searchValue: propTypes.string.isRequired,
            searchRef: propTypes.func.isRequired,
            handleClickSearch: propTypes.func.isRequired,
            redirect: propTypes.bool.isRequired,
        }
    }

    static get defaultProps() {
        return {
            redirect: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirect) {
            this.props.handleClickSearch('', false)
        }
    }

    getSearchCatalog() {
        if (this.props.redirect) {
            return <Redirect to={`/catalog/?search=${this.props.searchValue}&sortBy=popularity&page=${1}`}/>
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const field = evt.target.search.value;
        if (!field) {
            return;
        }
        this.props.handleClickSearch(field, true);
    }

    render() {
        const {searchValue, searchRef} =this.props;
        return (
            <div className="header-main__profile">
                <div className="header-main__pics">
                    <Search/>
                    <Border/>
                    <Profile/>
                    <Border/>
                    <Basket {...this.props}/>
                </div>
                <form className="header-main__search" action='#'
                      onSubmit={this.handleSubmit}>
                    <input placeholder="Поиск" name='search' defaultValue={searchValue} ref={searchRef}/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </form>
                {this.getSearchCatalog()}
            </div>
        );
    }
}

export default Interface;