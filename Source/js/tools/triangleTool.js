var triangleTool = makeTool('Triangle', triangleToolMouseDown, null, null, null);

var tempX = mousePositionX;
var tempY = mousePositionY;
function triangleToolMouseDown() {
    ctx.beginPath();
    ctx.moveTo(mousePositionX, mousePositionY);
    ctx.lineTo(tempX + 100, tempY);
    ctx.lineTo(tempX , tempY + 100);
    ctx.closePath();
}
