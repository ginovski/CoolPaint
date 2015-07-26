<<<<<<< HEAD
var triangleTool = makeTool('Triangle', triangleToolMouseDown, null, null, null);
=======
var triangleTool = makeTool('Triangle', null, null, triangleToolMouseDown, null);

>>>>>>> 72a6c82413d9b5fbd16e6c460e1ab2caef5a75d3

function triangleToolMouseDown() {
<<<<<<< HEAD
    ctx.beginPath();
    ctx.moveTo(mousePositionX, mousePositionY);
    ctx.lineTo(tempX + 100, tempY);
    ctx.lineTo(tempX , tempY + 100);
    ctx.closePath();
=======
    var tempX = mousePositionX;
    var tempY = mousePositionY;
    ctx.beginPath();
    ctx.moveTo(tempX, tempY);
    ctx.lineTo(tempX + 100, tempY);
    ctx.lineTo(tempX , tempY + 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
>>>>>>> 72a6c82413d9b5fbd16e6c460e1ab2caef5a75d3
}
