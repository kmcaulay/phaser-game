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

// yellowJewels = 0;
var w = 1024, h = 768;

function preload(){
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  game.load.image('background', '/images/colored_forest.png');
  game.load.image('line', '/images/brownline1.png');
  game.load.image('runner', '/images/playerRed_stand.png');
  game.load.image('scoreGem', '/images/yellowJewel.png');
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
  game.load.image('yellowJewel10', '/images/yellowJewel.png');
  game.load.image('yellowJewel11', '/images/yellowJewel.png');
  game.load.image('yellowJewel12', '/images/yellowJewel.png');
  game.load.image('yellowJewel13', '/images/yellowJewel.png');
  game.load.image('platform', '/images/ground_wood.png');
  game.load.image('platform1', '/images/ground_wood.png');
  game.load.image('platform2', '/images/ground_wood.png');
  game.load.image('platform3', '/images/ground_wood.png');
  game.load.image('platform4', '/images/ground_wood.png');
  game.load.image('spikes', '/images/spikesLow.png');
  game.load.image('spikes1', '/images/spikesLow.png');
  game.load.image('spikes2', '/images/spikesLow.png');
  game.load.image('spikes3', '/images/spikesLow.png');
  game.load.image('spikes4', '/images/spikesLow.png');
  game.load.image('spikes5', '/images/spikesLow.png');
  game.load.image('spikes6', '/images/spikesLow.png');
  game.load.image('spikes7', '/images/spikesLow.png');
  game.load.image('spikes8', '/images/spikesLow.png');
  game.load.image('spikes9', '/images/spikesLow.png');
  game.load.image('spikes10', '/images/spikesLow.png');
  game.load.image('spikes11', '/images/spikesLow.png');
  game.load.image('spikes12', '/images/spikesLow.png');
  game.load.image('spikes13', '/images/spikesLow.png');
  game.load.spritesheet('enemy', '/images/enemy1.png', 34, 44);
  game.load.spritesheet('enemy1', '/images/enemy1.png', 34, 44);
  game.load.spritesheet('enemy2', '/images/enemy1.png', 34, 44);
  game.load.spritesheet('enemy3', '/images/enemy1.png', 34, 44);
  game.load.image('brokenBlock', '/images/blockGrey_broken.png');
  game.load.image('brokenBlock1', '/images/blockGrey_broken.png');
  game.load.image('brokenBlock2', '/images/blockGrey_broken.png');
  game.load.image('brokenBlock3', '/images/blockGrey_broken.png');
  // game.load.image('brokenBlock4', '/images/blockGrey_broken.png');
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

  game.world.setBounds(0,0,8000,0);
// music
  music = game.add.audio('music');
  music.play();

  deathSnd = game.add.audio('death');
  jumpSnd = game.add.audio('jump');
  gemSnd = game.add.audio('gemSnd');
  finishSnd = game.add.audio('finishSnd');
// adding background img and setting size variables
  background = game.add.tileSprite(0, 0, 8000, 1080, 'background');
  background.scale.x = game.rnd.realInRange(.70, .70);
  background.scale.y = game.rnd.realInRange(.70, .70);

  line = game.add.sprite(0, 620, 'line');
  line.scale.x = game.rnd.realInRange(2,2);
  game.physics.arcade.enable(line);
  line.body.immovable = true;

  arrow = game.add.sprite(100, 500, 'arrow');
  game.physics.arcade.enable(arrow);
// ===============================
  platform = game.add.sprite(300, 500, 'platform');
  game.physics.arcade.enable(platform);
  platform.body.immovable = true;
// ===============================
  platform1 = game.add.sprite(900, 450, 'platform1');
  game.physics.arcade.enable(platform1);
  platform1.body.immovable = true;
// ===============================
  platform2 = game.add.sprite(1500, 450, 'platform2');
  game.physics.arcade.enable(platform2);
  platform2.body.immovable = true;
// ===============================
  platform3 = game.add.sprite(1900, 250, 'platform3');
  game.physics.arcade.enable(platform3);
  platform3.body.immovable = true;
// ===============================
  platform4 = game.add.sprite(2400, 500, 'platform4');
  game.physics.arcade.enable(platform4);
  platform4.body.immovable = true;
// ===============================
  yellowJewel = game.add.sprite(4800, 400, 'yellowJewel');
  yellowJewel.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel);
// ===============================
  yellowJewel1 = game.add.sprite(470, 400, 'yellowJewel1');
  yellowJewel1.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel1.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel1);
// ===============================
  yellowJewel2 = game.add.sprite(700, 300, 'yellowJewel2');
  yellowJewel2.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel2.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel2);
// ===============================
  yellowJewel3 = game.add.sprite(900, 300, 'yellowJewel3');
  yellowJewel3.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel3.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel3);
// ===============================
  yellowJewel4 = game.add.sprite(1400, 300, 'yellowJewel4');
  yellowJewel4.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel4.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel4);
// ===============================
  yellowJewel5 = game.add.sprite(1650, 350, 'yellowJewel5');
  yellowJewel5.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel5.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel5);
// ===============================
  yellowJewel6 = game.add.sprite(2000, 200, 'yellowJewel6');
  yellowJewel6.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel6.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel6);
// ===============================
  yellowJewel7 = game.add.sprite(2100, 200, 'yellowJewel7');
  yellowJewel7.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel7.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel7);
// ===============================
  yellowJewel8 = game.add.sprite(2350, 300, 'yellowJewel8');
  yellowJewel8.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel8.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel8);
// ===============================
  yellowJewel9 = game.add.sprite(2600, 400, 'yellowJewel9');
  yellowJewel9.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel9.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel9);
// ===============================
  yellowJewel10 = game.add.sprite(3130, 300, 'yellowJewel10');
  yellowJewel10.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel10.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel10);
// ===============================
  yellowJewel11 = game.add.sprite(3330, 300, 'yellowJewel11');
  yellowJewel11.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel11.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel11);
// ===============================
  yellowJewel12 = game.add.sprite(3530, 300, 'yellowJewel12');
  yellowJewel12.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel12.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel12);
// ===============================
  yellowJewel13 = game.add.sprite(3730, 300, 'yellowJewel13');
  yellowJewel13.scale.x = game.rnd.realInRange(2, 2);
  yellowJewel13.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(yellowJewel13);
// ===============================
  spikes = game.add.sprite(3000, 600, 'spikes');
  game.physics.arcade.enable(spikes);
  spikes.body.immovable = true;
// ===============================
  spikes1 = game.add.sprite(3064, 600, 'spikes1');
  game.physics.arcade.enable(spikes1);
  spikes1.body.immovable = true;
// ===============================
  spikes2 = game.add.sprite(3128, 600, 'spikes2');
  game.physics.arcade.enable(spikes2);
  spikes2.body.immovable = true;
// ===============================
  spikes3 = game.add.sprite(3192, 600, 'spikes3');
  game.physics.arcade.enable(spikes3);
  spikes3.body.immovable = true;
// ===============================
  spikes4 = game.add.sprite(3256, 600, 'spikes4');
  game.physics.arcade.enable(spikes4);
  spikes4.body.immovable = true;
// ===============================
  spikes5 = game.add.sprite(3320, 600, 'spikes5');
  game.physics.arcade.enable(spikes5);
  spikes5.body.immovable = true;
// ===============================
  spikes6 = game.add.sprite(3384, 600, 'spikes6');
  game.physics.arcade.enable(spikes6);
  spikes6.body.immovable = true;
// ===============================
  spikes7 = game.add.sprite(3448, 600, 'spikes7');
  game.physics.arcade.enable(spikes7);
  spikes7.body.immovable = true;
// ===============================
  spikes8 = game.add.sprite(3512, 600, 'spikes8');
  game.physics.arcade.enable(spikes8);
  spikes8.body.immovable = true;
// ===============================
  spikes9 = game.add.sprite(3576, 600, 'spikes9');
  game.physics.arcade.enable(spikes9);
  spikes9.body.immovable = true;
// ===============================
  spikes10 = game.add.sprite(3640, 600, 'spikes10');
  game.physics.arcade.enable(spikes10);
  spikes10.body.immovable = true;
// ===============================
  spikes11 = game.add.sprite(3704, 600, 'spikes11');
  game.physics.arcade.enable(spikes11);
  spikes11.body.immovable = true;
// ===============================
  spikes12 = game.add.sprite(3768, 600, 'spikes12');
  game.physics.arcade.enable(spikes12);
  spikes12.body.immovable = true;
// ===============================
  spikes13 = game.add.sprite(3832, 600, 'spikes13');
  game.physics.arcade.enable(spikes13);
  spikes13.body.immovable = true;
// ===============================
  brokenBlock = game.add.sprite(3100, 400, 'brokenBlock');
  brokenBlock.scale.x = game.rnd.realInRange(1.9, 1.9);
  brokenBlock.scale.y = game.rnd.realInRange(1.9, 1.9);
  game.physics.arcade.enable(brokenBlock);
// ===============================
  brokenBlock1 = game.add.sprite(3300, 400, 'brokenBlock1');
  brokenBlock1.scale.x = game.rnd.realInRange(1.9, 1.9);
  brokenBlock1.scale.y = game.rnd.realInRange(1.9, 1.9);
  game.physics.arcade.enable(brokenBlock1);
// ===============================
  brokenBlock2 = game.add.sprite(3500, 400, 'brokenBlock2');
  brokenBlock2.scale.x = game.rnd.realInRange(1.9, 1.9);
  brokenBlock2.scale.y = game.rnd.realInRange(1.9, 1.9);
  game.physics.arcade.enable(brokenBlock2);
// ===============================
  brokenBlock3 = game.add.sprite(3700, 400, 'brokenBlock3');
  brokenBlock3.scale.x = game.rnd.realInRange(1.9, 1.9);
  brokenBlock3.scale.y = game.rnd.realInRange(1.9, 1.9);
  game.physics.arcade.enable(brokenBlock3);
// ===============================
//   brokenBlock4 = game.add.sprite(3900, 400, 'brokenBlock4');
//   brokenBlock4.scale.x = game.rnd.realInRange(1.9, 1.9);
//   brokenBlock4.scale.y = game.rnd.realInRange(1.9, 1.9);
//   game.physics.arcade.enable(brokenBlock4);
// ===============================
  enemy = game.add.sprite(800, 550, 'enemy');
  enemy.scale.x = game.rnd.realInRange(1.8, 1.8);
  enemy.scale.y = game.rnd.realInRange(1.8, 1.8);

  enemy.animations.add('run', [0,1], 7, true);
  enemy.animations.play('run');

  game.physics.arcade.enable(enemy)
  enemy.body.bounce.set(1);
  enemy.body.velocity.x = 200;
// ===============================
  enemy1 = game.add.sprite(4000, 550, 'enemy1');
  enemy1.scale.x = game.rnd.realInRange(1.8, 1.8);
  enemy1.scale.y = game.rnd.realInRange(1.8, 1.8);

  enemy1.animations.add('run', [0,1], 7, true);
  enemy1.animations.play('run');

  game.physics.arcade.enable(enemy1)
  enemy1.body.bounce.set(.9);
  enemy1.body.velocity.x = 200;
// ===============================
  enemy2 = game.add.sprite(4100, 550, 'enemy2');
  enemy2.scale.x = game.rnd.realInRange(1.8, 1.8);
  enemy2.scale.y = game.rnd.realInRange(1.8, 1.8);

  enemy2.animations.add('run', [0,1], 7, true);
  enemy2.animations.play('run');

  game.physics.arcade.enable(enemy2)
  enemy2.body.bounce.set(1);
  enemy2.body.velocity.x = 200;
// ===============================
  enemy3 = game.add.sprite(4200, 550, 'enemy3');
  enemy3.scale.x = game.rnd.realInRange(1.8, 1.8);
  enemy3.scale.y = game.rnd.realInRange(1.8, 1.8);

  enemy3.animations.add('run', [0,1], 7, true);
  enemy3.animations.play('run');

  game.physics.arcade.enable(enemy3)
  enemy3.body.bounce.set(1.1);
  enemy3.body.velocity.x = 200;
// ===============================
  flag = game.add.sprite(4800, 500, 'flag');
  flag.scale.x = game.rnd.realInRange(2, 2);
  flag.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(flag);
  flag.body.immovable = true;
// invisible line after finish flag
  iline = game.add.sprite(5000, 0, 'iline');
  iline.scale.x = game.rnd.realInRange(2, 2);
  iline.scale.y = game.rnd.realInRange(2, 2);
  game.physics.arcade.enable(iline);
  iline.body.immovable = true;
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

  // scoreGem = game.add.sprite(500, 0, 'scoreGem');
  // scoreGem.scale.x = game.rnd.realInRange(2, 2);
  // scoreGem.scale.y = game.rnd.realInRange(2, 2);
// ===============================
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  game.physics.arcade.collide(runner, line);
  game.physics.arcade.collide(runner, line);
  game.physics.arcade.collide(runner, flag, levelComplete);
  game.physics.arcade.collide(runner, iline, levelComplete);
  game.physics.arcade.collide(enemy, platform);
  game.physics.arcade.collide(enemy, platform4);
  game.physics.arcade.collide(enemy1, spikes13);
  game.physics.arcade.collide(enemy1, flag);
  game.physics.arcade.collide(enemy2, spikes13);
  game.physics.arcade.collide(enemy2, flag);
  game.physics.arcade.collide(enemy3, spikes13);
  game.physics.arcade.collide(enemy3, flag);
  game.physics.arcade.collide(runner, enemy, enemies);
  game.physics.arcade.collide(runner, enemy1, enemies);
  game.physics.arcade.collide(runner, enemy2, enemies);
  game.physics.arcade.collide(runner, enemy2, enemies);
  game.physics.arcade.collide(runner, enemy3, enemies);
  game.physics.arcade.collide(enemy1, enemy2);
  game.physics.arcade.collide(enemy1, enemy3);
  game.physics.arcade.collide(enemy2, enemy3);
  game.physics.arcade.collide(runner, platform);
  game.physics.arcade.collide(runner, platform1);
  game.physics.arcade.collide(runner, platform2);
  game.physics.arcade.collide(runner, platform3);
  game.physics.arcade.collide(runner, platform4);
  game.physics.arcade.collide(runner, yellowJewel, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel1, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel2, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel3, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel4, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel5, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel6, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel7, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel8, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel9, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel10, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel11, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel12, hitJewel);
  game.physics.arcade.collide(runner, yellowJewel13, hitJewel);
  game.physics.arcade.collide(runner, spikes, spikeDeath);
  game.physics.arcade.collide(runner, spikes1, spikeDeath);
  game.physics.arcade.collide(runner, spikes2, spikeDeath);
  game.physics.arcade.collide(runner, spikes3, spikeDeath);
  game.physics.arcade.collide(runner, spikes4, spikeDeath);
  game.physics.arcade.collide(runner, spikes5, spikeDeath);
  game.physics.arcade.collide(runner, spikes6, spikeDeath);
  game.physics.arcade.collide(runner, spikes7, spikeDeath);
  game.physics.arcade.collide(runner, spikes8, spikeDeath);
  game.physics.arcade.collide(runner, spikes9, spikeDeath);
  game.physics.arcade.collide(runner, spikes10, spikeDeath);
  game.physics.arcade.collide(runner, spikes11, spikeDeath);
  game.physics.arcade.collide(runner, spikes12, spikeDeath);
  game.physics.arcade.collide(runner, spikes13, spikeDeath);
  game.physics.arcade.collide(runner, brokenBlock);
  game.physics.arcade.collide(runner, brokenBlock1);
  game.physics.arcade.collide(runner, brokenBlock2);
  game.physics.arcade.collide(runner, brokenBlock3);
  // game.physics.arcade.collide(runner, brokenBlock4);

  if(cursors.left.isDown){
    runner.body.velocity.x = -200;
  } else if(cursors.right.isDown){
    runner.animations.play('run');
    line.body.velocity.x = -160;
    runner.body.velocity.x = 200;
    flag.body.velocity.x = -130;
    iline.body.velocity.x = -130;
    arrow.body.velocity.x = -130;
    platform.body.velocity.x = -130;
    platform1.body.velocity.x = -130;
    platform2.body.velocity.x = -130;
    platform3.body.velocity.x = -130;
    platform4.body.velocity.x = -130;
    spikes.body.velocity.x = -130;
    spikes1.body.velocity.x = -130;
    spikes2.body.velocity.x = -130;
    spikes3.body.velocity.x = -130;
    spikes4.body.velocity.x = -130;
    spikes5.body.velocity.x = -130;
    spikes6.body.velocity.x = -130;
    spikes7.body.velocity.x = -130;
    spikes8.body.velocity.x = -130;
    spikes9.body.velocity.x = -130;
    spikes10.body.velocity.x = -130;
    spikes11.body.velocity.x = -130;
    spikes12.body.velocity.x = -130;
    spikes13.body.velocity.x = -130;
    yellowJewel.body.velocity.x = -130;
    yellowJewel1.body.velocity.x = -130;
    yellowJewel2.body.velocity.x = -130;
    yellowJewel3.body.velocity.x = -130;
    yellowJewel4.body.velocity.x = -130;
    yellowJewel5.body.velocity.x = -130;
    yellowJewel6.body.velocity.x = -130;
    yellowJewel7.body.velocity.x = -130;
    yellowJewel8.body.velocity.x = -130;
    yellowJewel9.body.velocity.x = -130;
    yellowJewel10.body.velocity.x = -130;
    yellowJewel11.body.velocity.x = -130;
    yellowJewel12.body.velocity.x = -130;
    yellowJewel13.body.velocity.x = -130;
    brokenBlock.body.velocity.x = -130;
    brokenBlock1.body.velocity.x = -130;
    brokenBlock2.body.velocity.x = -130;
    brokenBlock3.body.velocity.x = -130;
    // brokenBlock4.body.velocity.x = -130;
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
    // background.tilePosition.x +=-3;
    finishSnd.play();
  }

  function enemies(runner, enemy){
    // deathSnd.play();
    // runner.kill();
    runner.animations.play('dead');
    game.paused = true;
    document.getElementById('gameOver').style.display = 'block';
  }
  document.getElementById('gems').innerHTML = yellowJewels;
  document.getElementById('gems1').innerHTML = yellowJewels;
  // document.getElementById('lvl4').innerHTML = yellowJewels;
}
function muteMusic(){
  music.pause();
}
function render(){
  game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}