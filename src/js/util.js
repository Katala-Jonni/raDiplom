"use strict";
import handleClickListing from "./handleClickListing";
import slider180deg from '../img/slider180deg.jpeg';
import slider from '../img/slider.jpg';
import storage from "../storageBasket";

function removeClass(className) {
    const elem = document.querySelector(`.${className}`);
    if (elem) {
        elem.classList.remove(className);
    }
}

const backgroundImageStyle = (elem) => {
    return {
        backgroundImage: `url(${elem})`
    };
};

const catalogTitleParam = {
    classNameCatalogTitle: 'product-catalogue__section-title',
    classNameCatalogTitleName: 'section-name',
    classNameCatalogTitleAmount: 'amount',
};

const catalogSortParam = {
    classNameCatalogSort: 'product-catalogue__sort-by',
    classNameCatalogSortTittle: 'sort-by',
    sortingId: 'sorting',
    catalogSortDefaultValue: 'popularity'
};

const watchedSliderParam = {
    classNameWrap: 'product-card__overlooked-slider',
    classNameSlider: 'overlooked-slider',
    classNameButtonLeft: 'overlooked-slider__arrow overlooked-slider__arrow_left arrow',
    classNameButtonRight: 'overlooked-slider__arrow overlooked-slider__arrow_right arrow',
    titleSlider: 'Вы смотрели:',
    count: 5,
    listingButton: handleClickListing
};

const similarSliderParam = {
    classNameWrap: 'product-card__similar-products-slider',
    classNameSlider: 'similar-products-slider',
    classNameButtonLeft: 'similar-products-slider__arrow similar-products-slider__arrow_left arrow',
    classNameButtonRight: 'similar-products-slider__arrow similar-products-slider__arrow_right arrow',
    titleSlider: 'Похожие товары:',
    count: 3,
    listingButton: handleClickListing
};

const mainDataImages = [
    {
        to: '/',
        description: 'slide picture',
        src: slider
    },
    {
        to: '/',
        description: 'slide picture',
        src: slider180deg
    },
    {
        to: '/',
        description: 'slide picture',
        src: slider
    },
    {
        to: '/',
        description: 'slide picture',
        src: slider180deg
    },
];

const topMenu = [
    {
        title: 'Возврат',
        to: '/'
    },
    {
        title: 'Доставка и оплата',
        to: '/'
    },
    {
        title: 'О магазине',
        to: '/'
    },
    {
        title: 'Контакты',
        to: '/'
    },
    {
        title: 'Новости',
        to: '/'
    },
];

const profilePanel = [
    {
        to: '/',
        title: 'Личный кабинет',
        className: null,
        ariaHidden: null
    },
    {
        to: `/favorite/`,
        title: 'Избранное',
        className: 'fa fa-heart-o',
        ariaHidden: 'true'
    },
    {
        to: '/',
        title: 'Выйти',
        className: null,
        ariaHidden: null
    },
];

function getOrderInformation() {
    return {
        'name': '',
        'phone': '',
        'address': '',
        'paymentType': 'offlineCash',
        'cart': storage.basketId()
    }
}

const inputTypeText = [
    {
        title: 'Имя*',
        type: 'text',
        name: 'name',
        placeholder: 'Представьтесь, пожалуйста',
        className: ''
    },
    {
        title: 'Телефон*',
        type: 'tel',
        name: 'phone',
        placeholder: 'Номер в любом формате',
        className: ''
    },
    {
        title: 'Адрес*',
        type: 'text',
        name: 'address',
        placeholder: 'Ваша покупка будет доставлена по этому адресу',
        className: 'order-process__delivery-input_adress'
    },
];

const inputTypeRadio = [
    {
        value: 'onlineCard',
        title: 'Картой онлайн',
        defaultChecked: false
    },
    {
        value: 'offlineCard',
        title: 'Картой курьеру',
        defaultChecked: false
    },
    {
        value: 'offlineCash',
        title: 'Наличными курьеру',
        defaultChecked: true
    },
];

const color = {
    "Черный": '#000000',
    "Бежевый": '#f5f5dc',
    "Беж": '#fff8dc',
    "Белый": '#ffffff',
    "Фиолетовый": '#8b00ff',
    "Красный": '#ff0000',
    "Прозрачный": 'transparent',
    "Розовый": '#ffc0cb',
    "Темно-салатовый": '#008000',
    "Оранжевый": '#ffa500',
    "Серый": '#808080',
    "Синий": '#0000ff',
    "Металлик": '#8a7f8e',
    "Разноцветные": '#transparent',
    "Серебряный": '#c0c0c0',
    "Черно-белый": '#transparent',
    "Бардо": '#b00000',
    "Коричневый": '#964b00',
};

export default {
    classRemove: removeClass,
    imageStyle: backgroundImageStyle,
    createOrderData: getOrderInformation,
    catalogTitle: catalogTitleParam,
    SortParam: catalogSortParam,
    sliderParam: watchedSliderParam,
    similarProductParam: similarSliderParam,
    dataImages: mainDataImages,
    topMenuList: topMenu,
    profilePanelItems: profilePanel,
    inputData: inputTypeText,
    inputRadio: inputTypeRadio,
    colorFilter: color
};