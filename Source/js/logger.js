'use strict';

var actions = [];
var actionId = 0;

var logAction = function (tmpImage) {
    if(actions.indexOf(tmpImage)){
        actions.push(tmpImage);
        localStorage.setItem('actions', JSON.stringify(actions));
    }
};

function undoAction() {
    if(actions.length > 1){
        var lastAction = actions.pop();
        var lastSaved = actions.pop();

        var img = new Image();
        img.src = lastSaved;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        actions.push(lastSaved);
        localStorage.setItem('actions', JSON.stringify(actions));
    } else if(actions.length === 1){
        var lastAction = actions.pop();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        localStorage.setItem('actions', JSON.stringify(actions));
    }
}