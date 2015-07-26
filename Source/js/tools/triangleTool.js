var triangleTool = makeTool('Triangle', null, triangleToolMouseDown, null, null);

var tempX = mousePositionX;
var tempY = mousePositionY;
function triangleToolMouseDown() {
    context.beginPath();
    context.moveTo(mousePositionX, mousePositionY);
    context.lineTo(tempX + 100, tempY);
    context.lineTo(tempX , tempY + 100);
    context.closePath();
}
