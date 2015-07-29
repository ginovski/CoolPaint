(function () {
    var sprayCanTool = makeTool('Spray can', '', applySprayOnMouseDown, null, null, null);

    function applySprayOnMouseDown() {
        if(mouseClicked){
            sleep()
        }
    }


    function spray() {
        var centerX = mousePositionX,
            centerY = mousePositionY,
            x,
            y,
            density = 15;

        for (var i = 0; i < density; i += 1) {
            x = centerX + getRandomSprayPattern(20);
            y = centerY + getRandomSprayPattern(20);
            ctx.fillRect(x, y, 1, 1);
        }
    }

    function sleep() {
        spray();
        var speedOfDrawing = 20;
        if(mouseClicked){
            setTimeout(sleep, speedOfDrawing);
        }

    }

    function getRandomSprayPattern(widthOfSprayPattern) {
        return Math.floor((Math.random() * widthOfSprayPattern + 1));
    }
}());
