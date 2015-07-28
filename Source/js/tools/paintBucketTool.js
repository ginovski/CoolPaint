(function () {
    var bucketTool = makeTool('Bucket', '', bucketToolMouseDown, null, null, null);

    function bucketToolMouseDown() {
        var canvas = $('#canvas');
        var width = canvas.width();
        var height = canvas.height();
        var colorLayer = ctx.getImageData(0, 0, width, height);
        var startColors = ctx.getImageData(mousePositionX, mousePositionY, 1, 1);
        var drawingAreaX = 0,
            drawingAreaY = 0,
            drawingAreaWidth = width,
            drawingAreaHeight = height,
            colorGreen = {
                r: 101,
                g: 155,
                b: 65
            };
        alterColors(mousePositionX,mousePositionY, startColors.data[0], startColors.data[1], startColors.data[2], 255);
        function alterColors(startX, startY, startR, startG, startB) {

            pixelStack = [[startX, startY]];

            var newPos,
                x,
                y,
                curColor = colorGreen,
                pixelPos,
                reachLeft,
                reachRight,
                drawingBoundLeft = drawingAreaX,
                drawingBoundTop = drawingAreaY,
                drawingBoundRight = drawingAreaX + drawingAreaWidth - 1,
                drawingBoundBottom = drawingAreaY + drawingAreaHeight - 1,
                pixelStack = [[startX, startY]];

            while (pixelStack.length) {

                newPos = pixelStack.pop();
                x = newPos[0];
                y = newPos[1];

                // Get current pixel position
                pixelPos = (y * width + x) * 4;

                // Go up as long as the color matches and are inside the canvas
                while (y >= drawingBoundTop && matchStartColor(pixelPos, startR, startG, startB)) {
                    y -= 1;
                    pixelPos -= width * 4;
                }

                pixelPos += width * 4;
                y += 1;
                reachLeft = false;
                reachRight = false;

                // Go down as long as the color matches and in inside the canvas
                while (y <= drawingBoundBottom && matchStartColor(pixelPos, startR, startG, startB)) {
                    y += 1;

                    colorPixel(pixelPos, curColor.r, curColor.g, curColor.b);

                    if (x > drawingBoundLeft) {
                        if (matchStartColor(pixelPos - 4, startR, startG, startB)) {
                            if (!reachLeft) {
                                // Add pixel to stack
                                pixelStack.push([x - 1, y]);
                                reachLeft = true;
                            }
                        } else if (reachLeft) {
                            reachLeft = false;
                        }
                    }

                    if (x < drawingBoundRight) {
                        if (matchStartColor(pixelPos + 4, startR, startG, startB)) {
                            if (!reachRight) {
                                // Add pixel to stack
                                pixelStack.push([x + 1, y]);
                                reachRight = true;
                            }
                        } else if (reachRight) {
                            reachRight = false;
                        }
                    }

                    pixelPos += width * 4;
                }
            }


            function matchStartColor(pixelPos) {
                var r = colorLayer.data[pixelPos];
                var g = colorLayer.data[pixelPos + 1];
                var b = colorLayer.data[pixelPos + 2];

                return (r == startR && g == startG && b == startB);
            }

            function colorPixel(pixelPos, r, g, b, a) {
                colorLayer.data[pixelPos] = r;
                colorLayer.data[pixelPos + 1] = g;
                colorLayer.data[pixelPos + 2] = b;
                colorLayer.data[pixelPos + 3] = a !== undefined ? a : 255;
            }

            ctx.putImageData(colorLayer, 0, 0);

        }
    }
}());

