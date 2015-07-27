var swatch = document.getElementById('swatch');
swatch.addEventListener('click', setSwatch);

function setSwatch(e) {
    var swatch = e.target;

    setColor(swatch.style.backgroundColor);

}

function setColor(color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

}

var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'yellowgreen', 'cyan', 'green', 'blue', 'violet', 'indigo'];
for (var i = 0, n = colors.length ;i < n; i+=1) {
    var swatch = document.createElement('div');
    swatch.className = 'color';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}