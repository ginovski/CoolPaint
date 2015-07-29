(function(){
    var eraserTool = makeTool('Eraser', '', eraserToolMouseDown, eraserToolToolMouseMove, null, updateEraserToolSettings);

    function updateEraserToolSettings() {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
    }

    function eraserToolToolMouseMove() {
        if (mouseClicked) {
            ctx.lineTo(mousePositionX, mousePositionY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(mousePositionX, mousePositionY, ctx.lineWidth / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(mousePositionX, mousePositionY);
        }
    }

    function eraserToolMouseDown(){
        ctx.beginPath();
    }
}());
