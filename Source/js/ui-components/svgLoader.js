$(document).ready(function(){
    $('#enter').click(function(){
        $('#bg').hide();
        $('body').css('background-color', '#444');
        $('.loader').show();
        setTimeout(function(){
            window.location = 'index.html';
        }, 1500);
    });
});
