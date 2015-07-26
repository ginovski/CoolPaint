(function(){
    var circleTool = makeTool('Circle', circleToolMouseDown, null, null, null),
        defaultRadius=40;

    function circleToolMouseDown(){
        ctx.beginPath();
        ctx.arc(mousePositionX, mousePositionY, defaultRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}());

