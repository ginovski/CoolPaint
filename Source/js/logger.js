'use strict';

var actions = {};
var actionId = 0;

var logAction = function (tmpImage) {
    actions[++actionId] = tmpImage;
    localStorage.setItem('actions', JSON.stringify(actions));
};

function undoAction() {
    delete actions[actionId];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var lastAction = JSON.parse(localStorage.getItem('actions'))[--actionId];
    var img = new Image();

    img.src = lastAction;
    ctx.drawImage(img, 0, 0);

    localStorage.setItem('actions', JSON.stringify(actions));
}