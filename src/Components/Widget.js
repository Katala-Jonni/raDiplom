import React, {Component} from 'react';
import DivisionTitle from '../Pages/Catalog/Components/SideBarFilter/DivisionTitle';
import propTypes from 'prop-types';

export default () => Name => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.handleClickOpener = this.handleClickOpener.bind(this);
    }

    static get propTypes() {
        return {
            title: propTypes.string,
            className: propTypes.string
        }
    }

    static get defaultProps() {
        return {
            title: ''
        }
    }

    handleClickOpener() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state;
        const {title, className} = this.props;
        return (
            <section className="sidebar__division">
                <div className={`sidebar__${className}`}>
                    <DivisionTitle
                        title={title}
                        handleClickOpener={this.handleClickOpener}
                        isOpen={isOpen}
                    />
                    {isOpen ? <Name {...this.props} /> : null}
                </div>
            </section>
        );
    }
};