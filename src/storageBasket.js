"use strict";
import API from './API';

function editLocaleStorage(data, key, props, isDelete) {
    const basket = getBasket();
    return new Promise((resolve, reject) => {
        try {
            if (isDelete && props.basketProducts.length === 1) {
                throw new Error('Boom');
            }
            API.post(API.create(`cart/${basket}`), data)
                .then(res => {
                    if (!basket) {
                        saveLocalStorage(res.data.id, key);
                    }
                    let resData = !res ? [] : res.data.products;
                    resolve(resData);
                })
                .catch(e => console.log(e.message));
        } catch (e) {
            props.changeState([]);
            delete localStorage[key];
        }
    })
}

function getBasket() {
    return localStorage['basket'] || '';
}

function getLocalStorage(key, callback) {
    const basket = getBasket();
    if (!basket) {
        return null
    }
    API.get(API.create(`cart/${basket}`))
        .then(res => callback(res.data.products))
        .catch(e => e.message);
}

function saveLocalStorage(id, key) {
    return localStorage[key] = id;
}

function sendOrder(data) {
    return new Promise((resolve, reject) => {
        API.post(API.create('order'), data)
            .then(res => resolve(res))
            .catch(e => console.log(e.message));
    })
}

export default {
    getLocale: getLocalStorage,
    editLocale: editLocaleStorage,
    basketId: getBasket,
    postOrder: sendOrder,
    save: saveLocalStorage
};