$(document).ready(function(){
    $('#arrow-top').mousedown(function () {
        $('#top-options').slideToggle(300);
        $('#colorPicker').ColorPicker();
    });
});
