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
            rect: function (x, y, width, heigth) {
                var rectangle = new Kinetic.Rect({
                    x: x,
                    y: y,
                    width: width,
                    height: heigth,
                    fill: 'black'
                });
                return rectangle;
            },
            circle: function (x, y, radius) {
                var circle = new Kinetic.Circle({
                    x: x,
                    y: y,
                    radius: radius,
                    fill: 'black'
                });
                return circle;
            },
            triangle: function (x1, y1, x2, y2, x3, y3) {
                var triangle = new Kinetic.Shape({
                    sceneFunc: function (context) {
                        context.beginPath();
                        context.moveTo(x1, y1);
                        context.lineTo(x2, y2);
                        context.lineTo(x3, y3);
                        context.closePath();
                        context.fillStrokeShape(this);
                    },
                    fill: 'black'
                });
                return new triangle;
            }
        };
        return shapes;
    }());
});

