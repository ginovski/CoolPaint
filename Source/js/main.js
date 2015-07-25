

var stage = new Kinetic.Stage({
    container: 'paint-box',
    width:$("#paint-box").width(),
    height:$("#paint-box").height()
});

var dragging = false;
var lastPoints = [];
var layer = new Kinetic.Layer();
stage.add(layer);
var draw = function (e) {
    if (dragging) {     
        lastPoints.push(e.offsetX);
        lastPoints.push(e.offsetY);
        
        
        var line = new Kinetic.Line({
            points: lastPoints,
            stroke: 'black',
            strokeWidth: 5,
            lineJoin: 'round'
        });
        layer.add(line);
        //layer.add(arc);
        
        layer.draw();

    }
    else{
        lastPoints = [];
    }

};

var engage = function (e) {
    dragging = true;
    draw(e);
};

var disengage = function (e) {
    dragging = false;
};

var cleanCanvas = function () {
    //layer.clear();
    //layer = new Kinetic.Layer();
    stage.clear();
   
};

$(document).ready(function () {
    $("#paint-box").mousedown(engage);

    $("#paint-box").mousemove(draw);

    $("#paint-box").mouseup(disengage);

    $('#arrow-top').mousedown(function () {
        $('#top-options').slideToggle(300);
    });
    $("#reset-button").on('click', cleanCanvas);
});

