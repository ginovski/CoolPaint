(function () {
    var textTool = makeTool('Text', '', writeTextOnMouseDown, null, null, null),
        startX,
        startY;

    function writeTextOnMouseDown() {
        startX = mousePositionX + 220;
        startY = mousePositionY+15;
        var input = $("<input type=text id='userInput' />").css({
            "position": "relative",
            "left":startX.toString()+'px',
            "top":startY.toString()+'px',
            "z-index": 2,
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
            ctx.fillText(element.val(), element.position().left - 220, element.position().top-45);
            element.remove();
        }
    });
}());
