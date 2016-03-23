jQuery(function(){
    jQuery('form').submit(function(){
        jQuery('#chat_area').prepend('<p>' + jQuery('input[name="text"]').val() + '</p');
        document.getElementById('text').value = "";
        return false;
    });
});