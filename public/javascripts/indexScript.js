$(function () {
  var socket = io();
  var player = 0;
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
    window.scrollTo(0, document.body.scrollHeight);
  });

  if (player < 1) {
    player += 1;
    socket.emit('player join', 'Player 1 has been Joined !');
  }else{
    socket.emit('player join', 'Player 2 has been Joined !');
  }


});
