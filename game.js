var canvas = document.getElementById("the-game");
var context = canvas.getContext("2d");

var requestAnimationFrame =  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;

var keys = {
  up: [38, 75, 87],
  down: [40, 74, 83],
  left: [37, 65, 72],
  right: [39, 68, 76],
  space: [13, 32]
};

var player = {
  currentKey: 'up'
};

var images = {
  
  src: {
    'up'   : 'img/banana.jpg',
    'down' : 'img/pizza.jpg',
    'left' : 'img/bazaarvoicelogo.jpg',
    'right': 'img/watch.jpg',
    'space': 'img/water.jpg'
  },
  
  draw: function(direction, x, y, size_x, size_y) {
    asset = new Image();
    asset.src = eval("this.src." + direction);
    asset.onload = function() {
      context.drawImage(asset, 0, 0, canvas.width, canvas.height);
    }
  }
     
}

addEventListener("keydown", function (e) {
    lastKey = keys.getKey(e.keyCode);
    player.currentKey = lastKey;
}, false);

Object.prototype.getKey = function(value){
  for(var key in this){
    if(this[key] instanceof Array && this[key].indexOf(value) >= 0){
      return key;
    }
  }
  return null;
};

function loop() {
  images.draw(player.currentKey);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);