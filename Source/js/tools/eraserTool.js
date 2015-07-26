(function(){
    var eraserTool = makeTool('Eraser', eraserToolMouseDown, eraserToolToolMouseMove, null, updateEraserToolSettings);

    var width = 10;
    var height = 10;

    function updateEraserToolSettings() {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
    }

    function eraserToolToolMouseMove() {
        if (mouseClicked) {
            ctx.lineTo(mousePositionX, mousePositionY);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(mousePositionX, mousePositionY, width, height);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(mousePositionX, mousePositionY);
        }
    }

    function eraserToolMouseDown(){
        ctx.beginPath();
    }
}());
