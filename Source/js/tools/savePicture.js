function putImage() {
    var canvas1 = document.getElementById("canvas");

    var image = canvas.toDataURL("image/png");
    
    window.location.href = image;
}

$('#save').click(putImage);
