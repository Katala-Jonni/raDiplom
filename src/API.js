"use strict";

function createUrl(url, isProducts = false) {
    return `https://api-neto.herokuapp.com/bosa-noga/${isProducts ? 'products/' : ''}${url}`
}

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => console.log(e.message));
    });
}

function postData(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => console.log(e.message));
    });
}

export default {
    get: getData,
    post: postData,
    create: createUrl
};