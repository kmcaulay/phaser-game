window.addEventListener('resize', onResizeCalled, false);

var game = new Phaser.Game(1200, 740, Phaser.CANVAS, 'phaser', {
	preload: preload, 
	create: create, 
	update: update,
	render: render
});

function onResizeCalled(){
	canvas.style.width = window.innerWidth + 'px';
	canvas.style.height = window.innerHeight + 'px';
}

WebFontConfig = {
  google: { families: [ 'Lobster::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

yellowJewels = 0;
killer = 0;
var w = 1024, h = 768;
var stopWatch = 1000000;

function preload(){
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  game.load.image('background', '/images/colored_forest.png');
  game.load.image('line', '/images/brownline1.png');
  game.load.image('runner', '/images/playerRed_stand.png')
}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
// timer
  game.time.events.add(Phaser.Timer.SECOND * 100);
// music
  music = game.add.audio('music');
  music.play();

  deathSnd = game.add.audio('death');
  jumpSnd = game.add.audio('jump');
  gemSnd = game.add.audio('gemSnd');
// adding background img and setting size variables
  background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
  background.scale.x = game.rnd.realInRange(.70, .70);
  background.scale.y = game.rnd.realInRange(.70, .70);

  line = game.add.sprite(0, 620, 'line');
  game.physics.arcade.enable(line);
  line.body.immovable = true;
  
  runner = game.add.sprite(10, 500, 'runner')
  runner.scale.x = game.rnd.realInRange(1.8, 1.8);
  runner.scale.y = game.rnd.realInRange(1.8, 1.8);

  game.physics.arcade.enable(runner);
  runner.body.gravity.y = 500;
  runner.body.checkWorldBounds = true;
}

function update(){
  game.physics.arcade.collide(runner, line);
}
function muteMusic(){
  music.pause();
}
function render(){
  stopWatch -= (game.paused)?0 : this.game.time.elapsed;
  game.debug.text("Timer: " + stopWatch , 32, 32, '#648C44', '80px');
  game.debug.text("Enemies Slayed: " + killer, 700, 20, '#648C44','Lobster 80px');
  game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}