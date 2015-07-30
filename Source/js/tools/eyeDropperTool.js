(function () {
    var eyeDropperTool = makeTool('Eye dropper', '', getColorOnMouseDown, null, null, null);

    function getColorOnMouseDown() {
        var selectedPixel = ctx.getImageData(mousePositionX, mousePositionY, 1, 1),
            swatch = $('#swatch'),
            color = extractColorInRGBA(selectedPixel);
            swatch.css('background-color', color);
            updateCursorColor(color);
    }

    function extractColorInRGBA(imgData) {
        var result = 'rgba(';
        result += imgData.data[0] + ', ';
        result += imgData.data[1] + ', ';
        result += imgData.data[2] + ', ';
        result += imgData.data[3] + ')';
        return result;
    }
}());
