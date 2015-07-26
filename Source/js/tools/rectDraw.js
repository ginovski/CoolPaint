var rectTool = makeTool('Rectangle', null, null, brushToolMouseDown, null);
var width = 50;
var height = 50;

function rectToolMouseDown(){
    ctx.rect(mousePositionX - width/2 ,mousePositionY- width/2,width,height);
    ctx.stroke();
    ctx.fill();
}
