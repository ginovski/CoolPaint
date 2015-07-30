var radVal = document.getElementById('rad-value'),
    increase = document.getElementById('plus'),
    decrease = document.getElementById('minus'),
    radIncreaseIndex= 0,
    interval = 3;

increase.addEventListener('click', function () {
    radVal.innerHTML = ctx.lineWidth;
    ctx.lineWidth += interval;
    radIncreaseIndex+=1;
    ctx.font = (interval*radIncreaseIndex + 30) +"px Cherry Cream Soda";
});

decrease.addEventListener('click', function () {
    radVal.innerHTML = ctx.lineWidth;
    ctx.lineWidth -= interval;
    radIncreaseIndex-=1;
    if(radIncreaseIndex<0){
        radIncreaseIndex=0;
    }
    ctx.font = (interval + 30) +"px Cherry Cream Soda";
});



