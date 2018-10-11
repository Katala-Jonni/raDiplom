export default (evt, currents, callBack) => {
    function getBack(currentsCopy) {
        const element = currentsCopy.pop();
        currentsCopy.unshift(element);
    }

    function getNext(currentsCopy) {
        const firstElementOfCur = currentsCopy.shift();
        currentsCopy.push(firstElementOfCur);
    }

    const currentsCopy = currents.slice();
    const targetBtn = {
        'right': getNext,
        'left': getBack
    };
    targetBtn[evt.target.dataset.id](currentsCopy);
    callBack(currentsCopy, currentsCopy);
};