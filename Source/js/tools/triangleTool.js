var triangleTool = makeTool('Triangle', null, triangleToolMouseDown, null, null);

var tempX = mousePositionX;
var tempY = mousePositionY;
function triangleToolMouseDown() {
    ctx.beginPath();
    ctx.moveTo(tempX, tempY);
    ctx.lineTo(tempX + 100, tempY);
    ctx.lineTo(tempX , tempY + 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
