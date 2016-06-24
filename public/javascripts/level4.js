// window.addEventListener('resize', onResizeCalled, false);

var game = new Phaser.Game(1200, 740, Phaser.CANVAS, 'phaser', {
	preload: preload, 
	create: create, 
	update: update,
	render: render
});

// function onResizeCalled(){
// 	canvas.style.width = window.innerWidth + 'px';
// 	canvas.style.height = window.innerHeight + 'px';
// }

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
var w = 1024, h = 768;

function preload(){
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  game.load.image('background', '/images/colored_forest.png');
  game.load.image('line', '/images/brownline1.png');
  game.load.image('runner', '/images/playerRed_stand.png');
  game.load.image('yellowJewel', '/images/yellowJewel.png');
  game.load.image('yellowJewel1', '/images/yellowJewel.png');
  game.load.image('yellowJewel2', '/images/yellowJewel.png');
  game.load.image('yellowJewel3', '/images/yellowJewel.png');
  game.load.image('yellowJewel4', '/images/yellowJewel.png');
  game.load.image('yellowJewel5', '/images/yellowJewel.png');
  game.load.image('yellowJewel6', '/images/yellowJewel.png');
  game.load.image('yellowJewel7', '/images/yellowJewel.png');
  game.load.image('yellowJewel8', '/images/yellowJewel.png');
  game.load.image('yellowJewel9', '/images/yellowJewel.png');

  game.load.image('flag', '/images/flagGreen_up.png');
  game.load.image('iline', '/images/line.png');
  game.load.image('arrow', '/images/signArrow_right.png');
  game.load.audio('music', '/sounds/ILovetheMountains.mp3');
  game.load.audio('jump', '/sounds/Jump.mp3');
  game.load.audio('gemSnd', '/sounds/Supercoin.mp3');
  game.load.audio('death', '/sounds/mbdie.mp3');
  game.load.spritesheet('runner', '/images/guyRed.png', 39, 48);
}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.world.setBounds(0,0,2000,0);
// music
  music = game.add.audio('music');
  music.play();

  deathSnd = game.add.audio('death');
  jumpSnd = game.add.audio('jump');
  gemSnd = game.add.audio('gemSnd');
  finishSnd = game.add.audio('finishSnd');
// adding background img and setting size variables
  background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
  background.scale.x = game.rnd.realInRange(.70, .70);
  background.scale.y = game.rnd.realInRange(.70, .70);

  line = game.add.sprite(0, 620, 'line');
  line.scale.x = game.rnd.realInRange(2,2);
  game.physics.arcade.enable(line);
  line.body.immovable = true;
  
  // setting player
  runner = game.add.sprite(10, 500, 'runner')
  runner.scale.x = game.rnd.realInRange(1.8, 1.8);
  runner.scale.y = game.rnd.realInRange(1.8, 1.8);
  
  game.camera.follow(runner);
// giving the runner physics
  game.physics.arcade.enable(runner);
  runner.body.gravity.y = 500;
  
  runner.body.checkWorldBounds = true;
  runner.body.outOfBoundsKill = true;

  runner.animations.add('run', [0,1,2,1,0], 8, true);
  runner.animations.add('stop', [0], true);
  runner.animations.add('dead', [4], true);
  runner.animations.add('jump', [3], true);
// ===============================
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  game.physics.arcade.collide(runner, line);

  if(cursors.left.isDown){
    runner.body.velocity.x = -200;
  } else if(cursors.right.isDown){
    runner.animations.play('run');
    line.body.velocity.x = -160;
    runner.body.velocity.x = 200;
    flag.body.velocity.x = -130;
    iline.body.velocity.x = -130;
  } else {
    runner.body.velocity.x = 0;
    runner.animations.stop();
  }
  // only allow jump when runner on ground
  if(jumpButton.isDown && (runner.body.onFloor() || runner.body.touching.down))
  {
    runner.body.velocity.y = -400;
    jumpSnd.play();
    runner.animations.play('jump'); 
  }
  // runner dies when touch spikes
  function spikeDeath(runner, enemy){
    runner.animations.play('dead');
    deathSnd.play();
    runner.kill();
    document.getElementById('gameOver').style.display = 'block'
    game.paused = true;
  }
// grabbing jewels  
  function hitJewel(runner, yellowJewel){
    yellowJewels++
    gemSnd.play();
    yellowJewel.kill();
  }
  // pausing game with menu
  if(document.getElementById('light').style.display == 'block'){
    game.paused = true;
  } 
  // unpausing game with menu
  if(document.getElementById('light').style.display == 'block'){
    game.paused = false;
    }
// worldbounds
  if (runner.body.x < game.camera.x){
    document.getElementById('gameOver').style.display = 'block';
    runner.animations.play('dead')
    game.paused = true;
  }

  function levelComplete(runner, flag){
    document.getElementById('nextLevel').style.display = 'block'
    game.paused = true;
    background.tilePosition.x +=-3;
    finishSnd.play();
  }

  function enemies(runner, enemy){
    deathSnd.play();
    runner.kill();
    document.getElementById('gameOver').style.display = 'block';
  }
}
function muteMusic(){
  music.pause();
}
function render(){
  game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}