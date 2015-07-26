$(document).ready(function () {

<<<<<<< HEAD
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
=======
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 700;
>>>>>>> 215d46719c5d9b5028e18ee363986adc50b46f3a

    (function draw() {
        var radius = 2;
        var draggin = false;
        ctx.lineWidth = radius * 2;

        function putPoint(e) {
            if (draggin) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);
            }
        }

        var engage = function () {
            draggin = true;
        };

        var disengage = function () {
            draggin = false;
            ctx.beginPath();
        };

        canvas.addEventListener('mousedown', engage);
        canvas.addEventListener('mousemove', putPoint);
        canvas.addEventListener('mouseup', disengage);
    }());


    $('#arrow-top').mousedown(function () {
        $('#top-options').slideToggle(300);
    });

    $('#canvas').css('cursor', 'crosshair');
});

