var Player = require('player');
// var debug = require('debug')('player')

// path to sound
var soundPath = '/home/wook/Code/test/r2d2.mp3'
// var soundPath = '/home/wook/Code/test/r2d2.wav'

// create player instance
var player = new Player(soundPath);

// play now and callback when playend
// player.play(function(err, player){
//   console.log('playend!');
// });

player.play();
player.on('error', function(err) {
    console.log(err);
 })

module.exports = () => player.play();
