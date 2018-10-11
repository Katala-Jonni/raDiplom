import React, {Component} from 'react';
import PaginationButton from './PaginationButton';
import propTypes from 'prop-types';

export default (callBack) => Item => class extends Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            pathBack: propTypes.string,
            pathNext: propTypes.string,
            param: propTypes.number,
            pagePagination: propTypes.oneOfType([propTypes.string, propTypes.number]),
            filterCatalog: propTypes.object,
        }
    }

    static get defaultProps() {
        return {
            pathBack: '/',
            pathNext: '/'
        }
    }

    getItemPagination() {
        const {filterCatalog, pagePagination} = this.props;
        const items = [];
        let countPage = 1;
        let className;
        while (filterCatalog.pages >= countPage) {
            items.push(countPage);
            countPage++;
        }
        return items.map((item, idx) => {
            className = (idx === pagePagination - 1) ? 'active' : '';
            return <Item
                key={item}
                item={item}
                className={className}
                callBack={callBack}
                {...this.props}
            />
        });
    }

    render() {
        const totalProps = Object.assign({}, {...this.props}, {...this.state});
        const {filterCatalog, pagePagination, pathBack, pathNext} = totalProps;
        return (
            <div className="product-catalogue__pagination">
                <div className="page-nav-wrapper">
                    {+pagePagination - 1 !== 0
                        ? <PaginationButton
                            className='back'
                            currentButton={pathBack}
                            param={0}
                            callBack={callBack}
                            {...totalProps}
                        />
                        : null
                    }
                    <ul>
                        {this.getItemPagination()}
                    </ul>
                    {!(filterCatalog.pages < +pagePagination + 1)
                        ? <PaginationButton
                            className='forward'
                            currentButton={pathNext}
                            param={1}
                            callBack={callBack}
                            {...totalProps}
                        />
                        : null
                    }
                </div>
            </div>
        );
    }
};