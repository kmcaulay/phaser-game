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
	game.load.image('background', '/images/colored_desert.png');
	game.load.image('line', '/images/brownline1.png');
	game.load.image('cloud', '/images/cloud1.png');
	game.load.image('cloud1', '/images/cloud2.png');
	game.load.image('cactus', '/images/tree18.png');
	game.load.image('cactus1', '/images/tree19.png');
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
	game.load.image('plant', '/images/plantTop_yellow.png');
	game.load.image('block', '/images/tileBrown_18.png');
	game.load.image('block1', '/images/tileBrown_18.png');
	game.load.image('block2', '/images/tileBrown_18.png');
	game.load.image('block3', '/images/tileBrown_18.png');
	game.load.image('block4', '/images/tileBrown_18.png');
	game.load.image('block5', '/images/tileBrown_18.png');
	game.load.image('block6', '/images/tileBrown_18.png');
	game.load.image('brokenBlock', '/images/blockGrey_broken.png');
	game.load.image('browngrass', '/images/grass1.png');
	game.load.image('arrow', '/images/signArrow_right.png');
	game.load.image('platform', '/images/ground_stone.png');
	game.load.image('platform4', '/images/ground_stone.png');
	game.load.image('platform6', '/images/ground_stone.png');
	game.load.image('spikes', '/images/spikesLow.png');
	game.load.image('spikes1', '/images/spikesLow.png');
	game.load.image('spikes2', '/images/spikesLow.png');
	game.load.image('spikes3', '/images/spikesLow.png');
	game.load.image('spikes4', '/images/spikesLow.png');
	game.load.image('spikes5', '/images/spikesLow.png');
	game.load.image('spikes6', '/images/spikesLow.png');
	game.load.image('spikes7', '/images/spikesLow.png');
	game.load.image('spikes8', '/images/spikesLow.png');
	game.load.spritesheet('enemy', '/images/enemy1.png', 34, 44);
	game.load.spritesheet('enemy1', '/images/enemy1.png', 34, 44);
	game.load.spritesheet('enemy2', '/images/enemy1.png', 34, 44);
	game.load.image('flag', '/images/flagGreen_up.png');
	game.load.image('iline', '/images/line.png');
	game.load.audio('music', '/sounds/ILovetheMountains.mp3');
	game.load.audio('jump', '/sounds/Jump.mp3');
	game.load.audio('gemSnd', '/sounds/Supercoin.mp3');
	game.load.audio('death', '/sounds/mbdie.mp3');
	game.load.audio('finishSnd', '/sounds/finish.mp3');
	game.load.spritesheet('runner', '/images/guyRed.png', 39, 48);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.world.setBounds(0,0,8000,0);	
// music
	music = game.add.audio('music');
	// music.play();

// sfx
	deathSnd = game.add.audio('death');
	jumpSnd = game.add.audio('jump');
	gemSnd = game.add.audio('gemSnd');
	finishSnd = game.add.audio('finishSnd');

// adding background img and setting size variables
	background = game.add.tileSprite(0, 0, 4000, 1080, 'background');
	background.scale.x = game.rnd.realInRange(.70, .70);
	background.scale.y = game.rnd.realInRange(.70, .70);

	cactus = game.add.sprite(550,345, 'cactus');
	game.physics.arcade.enable(cactus);

	cactus1 = game.add.sprite(1200,345, 'cactus1');
	game.physics.arcade.enable(cactus1);

	cloud = game.add.sprite(600, 15, 'cloud');
	game.physics.arcade.enable(cloud);

	arrow = game.add.sprite(100, 500, 'arrow');
	game.physics.arcade.enable(arrow);
// ===============================
	line = game.add.sprite(0, 620, 'line');
	line.scale.x = game.rnd.realInRange(2,2);
	game.physics.arcade.enable(line);
	line.body.immovable = true;
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
	enemy1 = game.add.sprite(3650, 550, 'enemy1');
	enemy1.scale.x = game.rnd.realInRange(1.8, 1.8);
	enemy1.scale.y = game.rnd.realInRange(1.8, 1.8);

	enemy1.animations.add('run', [0,1], 7, true);
	enemy1.animations.play('run');

	game.physics.arcade.enable(enemy1)
	enemy1.body.bounce.set(.9);
	enemy1.body.velocity.x = 200;
// ===============================
	enemy2 = game.add.sprite(3700, 550, 'enemy2');
	enemy2.scale.x = game.rnd.realInRange(1.8, 1.8);
	enemy2.scale.y = game.rnd.realInRange(1.8, 1.8);

	enemy2.animations.add('run', [0,1], 7, true);
	enemy2.animations.play('run');

	game.physics.arcade.enable(enemy2)
	enemy2.body.bounce.set(1);
	enemy2.body.velocity.x = 200;
// ===============================
// boxes
	block = game.add.sprite(700, 500, 'block')
	block.scale.x = game.rnd.realInRange(1.9, 1.9);
	block.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block);
	block.body.immovable = true;
// ===============================
	block1 = game.add.sprite(1500, 500, 'block1');
	block1.scale.x = game.rnd.realInRange(1.9, 1.9);
	block1.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block1);
	block1.body.immovable = true;
// ===============================
	block2 = game.add.sprite(1600, 500, 'block2');
	block2.scale.x = game.rnd.realInRange(1.9, 1.9);
	block2.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block2);
	block2.body.immovable = true;
// ===============================
	block3 = game.add.sprite(1550, 400, 'block3');
	block3.scale.x = game.rnd.realInRange(1.9, 1.9);
	block3.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block3);
	block3.body.immovable = true;
// ===============================
	block4 = game.add.sprite(2872, 500, 'block4');
	block4.scale.x = game.rnd.realInRange(1.9, 1.9);
	block4.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block4);
	block4.body.immovable = true;
	// ===============================
	block5 = game.add.sprite(3500, 500, 'block5');
	block5.scale.x = game.rnd.realInRange(1.9, 1.9);
	block5.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block5);
	block5.body.immovable = true;
// ===============================
	block6 = game.add.sprite(4400, 500, 'block6');
	block6.scale.x = game.rnd.realInRange(1.9, 1.9);
	block6.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block6);
	block6.body.immovable = true;
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
	brokenBlock = game.add.sprite(2000, 500, 'brokenBlock');
	brokenBlock.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(brokenBlock);
// ===============================
	platform = game.add.sprite(2100, 375, 'platform')
	game.physics.arcade.enable(platform);
	platform.body.immovable = true;
	platform.scale.x = game.rnd.realInRange(.7, .7);
	platform.scale.y = game.rnd.realInRange(.7, .7);
// ===============================
	platform4 = game.add.sprite(2356, 300, 'platform4')
	game.physics.arcade.enable(platform4);
	platform4.body.immovable = true;
	platform4.scale.x = game.rnd.realInRange(.7, .7);
	platform4.scale.y = game.rnd.realInRange(.7, .7);
// ===============================
	platform6 = game.add.sprite(3128, 375, 'platform6')
	game.physics.arcade.enable(platform6);
	platform6.body.immovable = true;
	platform6.scale.x = game.rnd.realInRange(.7, .7);
	platform6.scale.y = game.rnd.realInRange(.7, .7);
// ===============================
	yellowJewel = game.add.sprite(300, 550, 'yellowJewel')
	yellowJewel.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel);
// ===============================
	yellowJewel12 = game.add.sprite(730, 400, 'yellowJewel12')
	yellowJewel12.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel12.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel12);
	// ===============================
	yellowJewel1 = game.add.sprite(1590, 300, 'yellowJewel1')
	yellowJewel1.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel1.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel1);
	// ===============================
	yellowJewel2 = game.add.sprite(2000, 400, 'yellowJewel2')
	yellowJewel2.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel2.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel2);
// ===============================
	yellowJewel3 = game.add.sprite(2100, 200, 'yellowJewel3')
	yellowJewel3.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel3.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel3);
// ===============================
	yellowJewel4 = game.add.sprite(2200, 200, 'yellowJewel4')
	yellowJewel4.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel4.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel4);
// ===============================
	yellowJewel5 = game.add.sprite(2300, 150, 'yellowJewel5')
	yellowJewel5.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel5.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel5);
// ===============================
	yellowJewel6 = game.add.sprite(2400, 150, 'yellowJewel6')
	yellowJewel6.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel6.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel6);
// ===============================
	yellowJewel7 = game.add.sprite(3000, 550, 'yellowJewel7')
	yellowJewel7.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel7.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel7);
// ===============================
	yellowJewel8 = game.add.sprite(3200, 300, 'yellowJewel8')
	yellowJewel8.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel8.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel8);
// ===============================
	yellowJewel9 = game.add.sprite(3300, 300, 'yellowJewel9')
	yellowJewel9.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel9.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel9);
// ===============================
	yellowJewel10 = game.add.sprite(4450, 400, 'yellowJewel10')
	yellowJewel10.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel10.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel10);
// ===============================
	yellowJewel11 = game.add.sprite(4800, 400, 'yellowJewel11')
	yellowJewel11.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel11.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel11);
// finish line
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
// ===============================
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

	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
// collisions
	game.physics.arcade.collide(runner, line);
	game.physics.arcade.collide(runner, enemy, enemies);
	game.physics.arcade.collide(enemy, block);
	game.physics.arcade.collide(enemy, block1);
	game.physics.arcade.collide(runner, enemy1, enemies);
	game.physics.arcade.collide(runner, enemy2, enemies);
	game.physics.arcade.collide(enemy1, block5);
	game.physics.arcade.collide(enemy1, block6);
	game.physics.arcade.collide(enemy2, block5);
	game.physics.arcade.collide(enemy2, block6);
	game.physics.arcade.collide(enemy1, enemy2)
	game.physics.arcade.collide(runner, block);
	game.physics.arcade.collide(runner, block1);
	game.physics.arcade.collide(runner, block2);
	game.physics.arcade.collide(runner, block3);
	game.physics.arcade.collide(runner, block4);
	game.physics.arcade.collide(runner, block5);
	game.physics.arcade.collide(runner, block6);
	game.physics.arcade.collide(runner, brokenBlock);
	game.physics.arcade.collide(runner, platform);
	game.physics.arcade.collide(runner, platform4);
	game.physics.arcade.collide(runner, platform6);
	game.physics.arcade.collide(runner, spikes, spikeDeath);
	game.physics.arcade.collide(runner, spikes1, spikeDeath);
	game.physics.arcade.collide(runner, spikes2, spikeDeath);
	game.physics.arcade.collide(runner, spikes3, spikeDeath);
	game.physics.arcade.collide(runner, spikes4, spikeDeath);
	game.physics.arcade.collide(runner, spikes5, spikeDeath);
	game.physics.arcade.collide(runner, spikes6, spikeDeath);
	game.physics.arcade.collide(runner, spikes7, spikeDeath);
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
	game.physics.arcade.collide(runner, flag, levelComplete);
	game.physics.arcade.collide(runner, iline, levelComplete);

// runner physics logic with keys
	if(cursors.left.isDown)
	{
// setting velocity when going left(backwords)
		runner.body.velocity.x = -200;
		
	} 
	else if(cursors.right.isDown)
	{
// setting velocity when going righ†(forward)
		runner.animations.play('run');
		line.body.velocity.x = -160;
		runner.body.velocity.x = 200;
		cloud.body.velocity.x = -120;
		cactus.body.velocity.x =-120; 
		cactus1.body.velocity.x =-120; 
		arrow.body.velocity.x = -130;
		block.body.velocity.x = -130;
		block1.body.velocity.x = -130;
		block2.body.velocity.x = -130;
		block3.body.velocity.x = -130;
		block4.body.velocity.x = -130;
		block5.body.velocity.x = -130;
		block6.body.velocity.x = -130;
		brokenBlock.body.velocity.x = -130;
		platform.body.velocity.x = -130;
		platform4.body.velocity.x = -130;
		platform6.body.velocity.x = -130;
		spikes.body.velocity.x = -130;
		spikes1.body.velocity.x = -130;
		spikes2.body.velocity.x = -130;
		spikes3.body.velocity.x = -130;
		spikes4.body.velocity.x = -130;
		spikes5.body.velocity.x = -130;
		spikes6.body.velocity.x = -130;
		spikes7.body.velocity.x = -130;
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
		iline.body.velocity.x = -130;
		flag.body.velocity.x = -130;
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
		// deathSnd.play();
		document.getElementById('gameOver').style.display = 'block';
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
		document.getElementById('nextLevel').style.display = 'block';
		game.paused = true;
		// background.tilePosition.x +=-3;
		finishSnd.play();
	}

	function enemies(runner, enemy){
		// deathSnd.play();
		runner.animations.play('dead');
		// runner.kill();
		game.paused = true;
		document.getElementById('gameOver').style.display = 'block';
	}
	document.getElementById('gems').innerHTML = yellowJewels;
	document.getElementById('gems1').innerHTML = yellowJewels;
	// document.getElementById('lvl2').innerHTML = yellowJewels;

}
function muteMusic(){
	music.pause();
}
function render(){
	game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}
