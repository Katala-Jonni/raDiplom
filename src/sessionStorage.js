"use strict";

function getProductsStorage(storage, data) {
    if (storage.length >= 10) return storage;
    return storage.find(item => item.id === data.id);
}

function getBasketStorage(storage, data) {
    return storage.find(item => {
        if (item.id === data.id) {
            if (item.currentSize === data.currentSize) {
                item.count += data.count;
                return item;
            }
        }
        return null;
    });
}

const storageName = {
    products: getProductsStorage,
    basket: getBasketStorage
};

function getProducts(key) {
    let productsStorage = sessionStorage[key] || [];
    if (productsStorage.length) {
        productsStorage = parseStorageProducts(productsStorage);
    }
    return productsStorage;
}

function parseStorageProducts(products) {
    return JSON.parse(products);
}

function stringifyStorageProducts(productsStorage, key) {
    sessionStorage[key] = JSON.stringify(productsStorage);
}

function saveSessionStorage(data, key) {
    let productsStorage = getProducts(key);
    const storage = storageName[key](productsStorage, data);
    if (storage && storage.currentSize) {
        productsStorage.filter(item => item.id !== storage.id).push(storage);
        stringifyStorageProducts(productsStorage, key);
    }
    if (!storage) {
        productsStorage.push(data);
        stringifyStorageProducts(productsStorage, key);
    }
}

function getSessionStorage(key) {
    try {
        return parseStorageProducts(sessionStorage[key]);
    } catch (e) {
        return null;
    }
}

const storage = {
    saveSessionStorage: saveSessionStorage,
    getSessionStorage: getSessionStorage
};

export default storage;