var initSocket = function(){
    // connect socket.io
    s.on('connect', function(){
        console.log('接続完了');
        s.emit('userName', name);
    });
    // disconnect socket.io
    s.on('disconnect', function(){
        console.log('接続解除');
    });    
    // get chat text
    s.on('S_To_C_chatText', function(text){
        console.log(text);
        jQuery('#chat_area').prepend('<p>' + text + '</p>');
    });
}
