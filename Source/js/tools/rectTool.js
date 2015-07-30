(function(){
    var rectTool = makeTool('Rectangle', '', rectToolMouseDown, null, null, rectToolUpdateSettings);
    var width = 50;
    var height = 50;

    function rectToolUpdateSettings(){
        ctx.strokeStyle = swatch.style.backgroundColor;
        ctx.fillStyle = swatch.style.backgroundColor;
    }

    function rectToolMouseDown(){
        ctx.beginPath();
        ctx.rect(mousePositionX - width / 2, mousePositionY - height / 2, ctx.lineWidth * 3, ctx.lineWidth * 3);
        ctx.stroke();
        ctx.fill();
    }
}());
