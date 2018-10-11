const nameStorage = 'favorite';

function getFavoriteStorage() {
    const totalFavorites = [];
    if (!localStorage[nameStorage]) {
        localStorage[nameStorage] = JSON.stringify(totalFavorites);
    }
}

function isFavorite(id) {
    getFavoriteStorage();
    return JSON.parse(localStorage[nameStorage]).includes(id);
}

function editFavoriteStorage(id) {
    let favorite = JSON.parse(localStorage[nameStorage]);
    const repeatId = favorite.find(item => +item === id);
    if (repeatId) {
        favorite = favorite.filter(item => {
            if (+item === repeatId) {
                return +item !== repeatId;
            }
            return item
        });
    } else {
        favorite.push(id);
    }
    localStorage[nameStorage] = JSON.stringify(favorite);
}

export default {
    get: getFavoriteStorage,
    has: isFavorite,
    edit: editFavoriteStorage
};