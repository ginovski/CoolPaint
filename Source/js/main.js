$(document).ready(function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 700;

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

    var shapes = (function () {
        var shapes = {
            rect: new Kinetic.Rect({
                x: 100,
                y: 100,
                width: 50,
                height: 50,
                fill: 'black'
            }),
            circle: new Kinetic.Circle({
                x: 100,
                y: 100,
                width: 50,
                height: 50,
                fill: 'black'
            }),
            triangle: new Kinetic.Shape({
                sceneFunc: function (context) {
                    context.beginPath();
                    context.moveTo(200, 50);
                    context.lineTo(420, 80);
                    context.quadraticCurveTo(300, 100, 260, 170);
                    context.closePath();
                    context.fillStrokeShape(this);
                },
                fill: 'black'
            })
        };
        return shapes;
    }());
});

