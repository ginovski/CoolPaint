(function(){
    var circleTool = makeTool('Circle', null, null, circleToolMouseDown, null),
        defaultRadius=40;

    function circleToolMouseDown(){
        ctx.beginPath();
        ctx.arc(mousePositionX, mousePositionY, defaultRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}());

