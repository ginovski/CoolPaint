function init(canvas, width, height){
    ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 700;

    currentTool = brushTool;
}

function updateToolSettings(){
    currentTool.updateToolSettings();
}

function onMouseDown(){
    mouseClicked = true;
    if (currentTool.onMouseDown !== null) {
        currentTool.onMouseDown();
    }
}

function onMouseUp(){
    mouseClicked = false;
    if (currentTool.onMouseUp !== null) {
        currentTool.onMouseUp();
    }
}

function onMouseMove(event){
    mousePositionX = event.offsetX;
    mousePositionY = event.offsetY;

    if (currentTool.onMouseMove !== null) {
        currentTool.onMouseMove();
    }
}

$(document).ready(function(){
    var canvas = document.getElementById('canvas');
    init(canvas, 1000, 700);
    updateToolSettings();

    $(canvas).mousedown(onMouseDown);
    $(canvas).mousemove(onMouseMove);
    $(canvas).mouseup(onMouseUp);
});
