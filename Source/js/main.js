var ctx;

var mouseClicked;
var mousePositionX;
var mousePositionY;

var currentTool;

var makeTool = function(name, onMouseDown, onMouseMove, onMouseUp, updateToolSettings){
        return {
            name: name,
            onMouseDown: onMouseDown,
            onMouseMove: onMouseMove,
            onMouseUp: onMouseUp,
            updateToolSettings: updateToolSettings
        }
    };

