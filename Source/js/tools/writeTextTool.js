(function () {
    var textTool = makeTool('Text', writeTextOnMouseDown, null, null, null),
        startX,
        startY;
    function writeTextOnMouseDown() {
        startX = mousePositionX;
        startY = mousePositionY;
        var input = $("<input type=text id='userInput' />").css({
            "position": "relative",
            "top":startX.toString()+'px',
            "left":startY.toString()+'px',
            "z-index": 1000,
            "filter":"alpha(opacity=50)",
            "opacity": "0.5"
        });
        var element =$('#userInput');
        if (element.length === 0) {
            $(document.body).append(input);
        }
    }

    $(document).keypress(function(e){
        if(e.which == 13){
            var element = $('#userInput');
            ctx.fillText(element.val(), element.position().left, element.position().top);
            element.remove();
        }
    });
}());
