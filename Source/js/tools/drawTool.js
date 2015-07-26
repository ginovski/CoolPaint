var brushTool = makeTool('brushTool', null, brushToolMouseMove, brushToolMouseDown, updateBrushToolSettings);

var radius = 2;

function updateBrushToolSettings() {
    ctx.lineWidth = radius * 2;
}

function brushToolMouseMove() {
    if (mouseClicked) {
        ctx.lineTo(mousePositionX, mousePositionY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(mousePositionX, mousePositionY, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(mousePositionX, mousePositionY);
    }
}

function brushToolMouseDown(){
    ctx.beginPath();
}
