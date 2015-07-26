var circleTool = makeTool('Circle', null, null, circleToolMouseDown, null);
var defaultradius=40;

function circleToolMouseDown(){
    ctx.beginPath();
    ctx.arc(mousePositionX, mousePositionY, defaultradius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}
