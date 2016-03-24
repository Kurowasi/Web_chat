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
}
