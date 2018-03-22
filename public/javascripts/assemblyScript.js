$(function(){
  var play1 = document.getElementById("p1");
  var play2 = document.getElementById("p2");
  var player = 0;
  var socket = io();

  if (player === 0) {
    socket.on('player joining', function(msg){
      play1.innerHTML = 'player is joining in ' + msg;
      socket.emit('you join', 'YES YOU ARE JOINED !!!');
    });
    player += 1;
  }else{
    socket.on('player join', (msg) => {
      play1.innerHTML = msg;
    });
    player += 1;
  }
});
