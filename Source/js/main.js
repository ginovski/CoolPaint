var ctx;

var mouseClicked;
var mousePositionX;
var mousePositionY;

var currentTool;

var tools = {};

var makeTool = function(name, onMouseDown, onMouseMove, onMouseUp, updateToolSettings){
        var newTool =  {
            name: name,
            onMouseDown: onMouseDown,
            onMouseMove: onMouseMove,
            onMouseUp: onMouseUp,
            updateToolSettings: updateToolSettings
        };
        tools[newTool.name] = newTool;

        return newTool;
    };

