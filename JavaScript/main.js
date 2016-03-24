jQuery(function(){
    // 送信処理
    jQuery('form').submit(function(){
        jQuery('#chat_area').prepend('<p>' + jQuery('input[name="text"]').val() + '</p');
        document.getElementById('text').value = "";
        return false;
    });
    // user_areaの非表示
    jQuery('#user_area a').click(function(){
        jQuery('#user_area').animate({
            'width': '0px'
        }, 'slow', 'swing', function(){
            jQuery('#user_area').hide('fast');
            jQuery('#next_area').show('slow');
        });
    });
    // user_areaの表示
    jQuery('#next_area a').click(function(){
        jQuery('#next_area').hide();
        jQuery('#user_area').css('width', '150px');
        jQuery('#user_area').show('slow');
    });
});