(function(){
    var rectTool = makeTool('Rectangle', rectToolMouseDown, null, null, null);
    var width = 50;
    var height = 50;

    function rectToolMouseDown(){
        ctx.beginPath();
        ctx.rect(mousePositionX -width/2,mousePositionY-height/2,width,height);
        ctx.stroke();
        ctx.fill();
    }
}());
