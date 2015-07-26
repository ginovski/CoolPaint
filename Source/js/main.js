
var stage = new Kinetic.Stage({
    container: 'paint-container',
    width: 1000,
    height: 550,
});

var dragging = false;

var draw = function (e) {
    if (dragging) {
        var layer = new Kinetic.Layer();
        var arc = new Kinetic.Circle({
            fill: 'black',
            radius: 10,
            x: e.offsetX || e.clientX,
            y: e.offsetY || e.clientY,
        });
        layer.add(arc);
        stage.add(layer);
    }

};

var engage = function (e) {
    dragging = true;
    draw(e);
};

var disengage = function (e) {
    dragging = false;
};

$(document).ready(function () {
    $("#paint-container").mousedown(engage);

    $("#paint-container").mousemove(draw);

    $("#paint-container").mouseup(disengage);

    $('#arrow-top').mousedown(function () {
        $('#top-options').slideToggle(300);
    });
});



