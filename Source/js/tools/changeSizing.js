var radVal = document.getElementById('rad-value'),
    increase = document.getElementById('plus'),
    decrease = document.getElementById('minus'),
    interval = 3;

increase.addEventListener('click', function () {
    radVal.innerHTML = ctx.lineWidth;
    ctx.lineWidth += interval;
});

decrease.addEventListener('click', function () {
    radVal.innerHTML = ctx.lineWidth;
    ctx.lineWidth -= interval;
});



