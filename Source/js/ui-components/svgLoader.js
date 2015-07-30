$(document).ready(function(){
    $('#enter').click(function(){
        $('#bg').hide();
        $('body').addClass('loaderBg');
        $('.loader').show();
        setTimeout(function(){
            window.location = 'index.html';
        }, 1500);
    });
});
