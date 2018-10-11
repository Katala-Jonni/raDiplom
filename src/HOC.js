import Server from "./Components/Server";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/ProductPage/Product";
import MainPage from "./Pages/MainPage/Main";
import App from "./App";
import Filter from "./Filter";
import util from "./js/util";
import SimilarProductSlider from "./Pages/ProductPage/Components/SimilarProductSlider";
import Slider from "./Components/Slider/Slider";
import SliderComponent from "./Components/Slider/SliderComponent";
import WatchedList from "./Components/WatchedList";
import Image from "./Pages/ProductPage/Components/Image";
import Input from "./Components/Input";
import InputRadio from "./Pages/Order/Component/InputRadio";
import InputText from "./Pages/Order/Component/InputText";
import API from './API';
import ColorFilter from "./Pages/Catalog/Components/SideBarFilter/ColorFilter";
import SizeFilter from "./Pages/Catalog/Components/SideBarFilter/SizeFilter";
import Widget from "./Components/Widget";
import PriceFilter from "./Pages/Catalog/Components/SideBarFilter/PriceFilter";
import CatalogFilter from "./Pages/Catalog/Components/SideBarFilter/CatalogFilter";
import ItemPagination from "./Pages/Catalog/Components/ItemPagination";
import Pagination from "./Components/Pagination/Pagination";
import FavoriteItemPagination from "./Pages/Favourite/Components/FavoriteItemPagination";

const MainPageData = Server(
    API.create('featured'),
    res => ({
        sliders: res.data
    })
)(MainPage);

const ProductData = Server(
    ({match}) => API.create(match.params.id, true),
    ({data}) => data
)
(Product);

const CatalogData = Server(
    ({location, search}) => {
        const path = search || location.search;
        return API.create(path, true);
    },
    res => ({
        mainCatalog: res
    })
)(Catalog);

const AppData = Server(
    API.create('categories'),
    res => ({
        mainCategories: res.data
    })
)(App);

const FilterData = Server(
    API.create('filters'),
    res => ({
        filters: res.data
    })
)(Filter);

const PaginationCatalog = Pagination(
    () => window.scroll(0, 0)
)(ItemPagination);

const FavoritePagination = Pagination(
    (evt, props) => {
        evt.preventDefault();
        const {pagesFavorite, handleFavorite, filterCatalog} = props;
        let count = +evt.target.dataset.param ? pagesFavorite + 1 : pagesFavorite - 1;
        handleFavorite(filterCatalog, count);
        window.scroll(0, 0);
    }
)(FavoriteItemPagination);

const SimilarProduct = SliderComponent()(SimilarProductSlider);
const ProductSimilar = Slider()(SimilarProduct);

const SliderWatched = SliderComponent()(WatchedList);
const WatchedSlider = Slider()(SliderWatched);

const SliderMainScreen = SliderComponent()(Image);

const SimilarProductsData = Server(
    ({type, color}) => API.create(`?type=${type}&color=${color}`, true),
    (props) => props
)
(ProductSimilar);

const InputTypeText = Input(util.inputData)(InputText);
const InputTypeRadio = Input(util.inputRadio)(InputRadio);

const MainFilter = Widget()(CatalogFilter);
const CatalogFilterPrice = Widget()(PriceFilter);
const CatalogFilterColor = Widget()(ColorFilter);
const CatalogFilterSize = Widget()(SizeFilter);

export default {
    Product: ProductData,
    MainPage: MainPageData,
    Catalog: CatalogData,
    App: AppData,
    Filter: FilterData,
    SimilarProducts: SimilarProductsData,
    Watched: WatchedSlider,
    Image: SliderMainScreen,
    InputText: InputTypeText,
    InputRadio: InputTypeRadio,
    FilterCatalog: MainFilter,
    FilterPrice: CatalogFilterPrice,
    FilterColor: CatalogFilterColor,
    FilterSize: CatalogFilterSize,
    Pagination: PaginationCatalog,
    PaginationFavorite: FavoritePagination
};