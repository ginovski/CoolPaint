function tintImage(imagePath, paintColor, done) {
    // create hidden canvas (using image dimensions)
    var canvas = document.createElement("canvas");
        canvas.width = 60;
        canvas.height = 50;

    var imgElement = new Image();
        imgElement.src = imagePath;

    var ctx = canvas.getContext("2d");
        ctx.fillStyle = paintColor;
        ctx.fillRect(0,0,15,15);

    imgElement.onload = function() {
        console.log('image loaded');

        ctx.drawImage(imgElement,0,0);

        // replace image source with canvas data
        var finalImage = canvas.toDataURL();

        done(finalImage);
    };
}