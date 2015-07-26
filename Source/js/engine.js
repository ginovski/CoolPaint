function init(canvas, width, height){
    ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 700;
    $(canvas).css('cursor', 'crosshair');

    //Change this to your tool to test it
    currentTool = brushTool;
}

function changeTool(){
}

function addToolsInTheSidebar(){
    for (var index in tools) {
        var tool = tools[index];
        var newItem = $('<a href="#"></a>');
        newItem.attr('title', tool.name);
        newItem.text(tool.name);

        $('nav').append(newItem);
    }
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
    addToolsInTheSidebar();

    $(canvas).mousedown(onMouseDown);
    $(canvas).mousemove(onMouseMove);
    $(canvas).mouseup(onMouseUp);
});
