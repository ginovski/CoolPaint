var rectTool = makeTool('Rectangle', null, null, rectToolMouseDown, null);
var width = 50;
var height = 50;

function rectToolMouseDown(){
    ctx.beginPath();
    ctx.rect(mousePositionX ,mousePositionY,width,height);
    ctx.stroke();
    ctx.fill();
}
