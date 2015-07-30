'use strict';

var actions = [];
var actionId = 0;
var redoActions = [];

var logAction = function (tmpImage) {
    if(actions.indexOf(tmpImage)){
        actions.push(tmpImage);
        redoActions = [];
    }

    // TODO: Optimization - Save only the last 10 actions?
    // Hint: just use .shift() to throw away the most old data
};

function undoAction() {
    if(actions.length > 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redoActions.push(actions.pop());

        if(actions.length > 1){

            var lastSaved = actions.pop(); // pop this to get the data and push it back again later - FIXME if better solution comes on

            var img = new Image();
            img.src = lastSaved;
            actions.push(lastSaved);

            ctx.drawImage(img, 0, 0);
        }
    }
}

function redoAction(){
    if(redoActions.length > 0){
        var lastUndo = redoActions.pop();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var img = new Image();
        img.src = lastUndo;

        ctx.drawImage(img, 0, 0);
        redoActions.push(lastUndo);

        actions.push(redoActions.pop());
    }
}