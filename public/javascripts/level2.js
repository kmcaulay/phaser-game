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

yellowJewels = 0
var w = 1024, h = 768;
var stopWatch = 1000000;

function preload(){
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	game.load.image('background', '/images/colored_desert.png');
	game.load.image('line', '/images/brownline1.png');
	game.load.image('cloud', '/images/cloud1.png');
	game.load.image('cloud1', '/images/cloud2.png');
	game.load.image('cactus', '/images/tree18.png');
	game.load.image('cactus1', '/images/tree19.png');
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
	game.load.image('brokenBlock', '/images/blockGrey_broken.png');
	game.load.image('browngrass', '/images/grass1.png');
	game.load.image('arrow', '/images/signArrow_right.png');
	game.load.image('platform', '/images/plantStem_horizontal.png');
	game.load.image('platform1', '/images/plantStem_horizontal.png');
	game.load.image('platform2', '/images/plantStem_horizontal.png');
	game.load.image('platform3', '/images/plantStem_horizontal.png');
	game.load.image('platform4', '/images/plantStem_horizontal.png');
	game.load.image('platform5', '/images/plantStem_horizontal.png');
	game.load.image('enemy', '/images/enemyWalking_1.png')
	game.load.audio('music', '/sounds/ILovetheMountains.mp3');
	game.load.audio('jump', '/sounds/Jump.mp3');
	game.load.audio('gemSnd', '/sounds/Supercoin.mp3');
	game.load.audio('death', '/sounds/mb_die.mp3');
	game.load.image('runner', '/images/playerRed_stand.png');
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
// timer
	game.time.events.add(Phaser.Timer.SECOND * 100);
// music
	music = game.add.audio('music');
	music.play();

	function muteMusic(){
		game.sound.mute = true;
	}

	deathSnd = game.add.audio('death');
	jumpSnd = game.add.audio('jump');
	gemSnd = game.add.audio('gemSnd');
// adding background img and setting size variables
	background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
	background.scale.x = game.rnd.realInRange(.70, .70);
	background.scale.y = game.rnd.realInRange(.70, .70);

	cactus = game.add.sprite(550,335, 'cactus');
	game.physics.arcade.enable(cactus);

	cactus1 = game.add.sprite(1200,345, 'cactus1');
	game.physics.arcade.enable(cactus1);

	cloud = game.add.sprite(600, 15, 'cloud');
	game.physics.arcade.enable(cloud);

	arrow = game.add.sprite(100, 500, 'arrow');
	game.physics.arcade.enable(arrow);

	line = game.add.sprite(0, 620, 'line');
	game.physics.arcade.enable(line);
	line.body.immovable = true;

	enemy = game.add.sprite(800, 550, 'enemy');
	enemy.scale.x = game.rnd.realInRange(1.8, 1.8);
	enemy.scale.y = game.rnd.realInRange(1.8, 1.8);

	game.physics.arcade.enable(enemy)
	enemy.body.bounce.set(1);
	// enemy.body.immovable = true;
	// enemy.body.collideWorldBounds = true;
	enemy.body.velocity.x = 200;

// setting player
	runner = game.add.sprite(10, 500, 'runner')
	runner.scale.x = game.rnd.realInRange(1.8, 1.8);
	runner.scale.y = game.rnd.realInRange(1.8, 1.8);
// ===============================
// boxes
	block = game.add.sprite(700, 500, 'block')
	block.scale.x = game.rnd.realInRange(1.9, 1.9);
	block.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block);
	block.body.immovable = true;
// ===============================
	block1 = game.add.sprite(1500, 500, 'block1')
	block1.scale.x = game.rnd.realInRange(1.9, 1.9);
	block1.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block1);
	block1.body.immovable = true;
// ===============================
	block2 = game.add.sprite(1600, 500, 'block2')
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
	brokenBlock = game.add.sprite(2000, 500, 'brokenBlock');
	brokenBlock.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(brokenBlock);
// ===============================
	platform = game.add.sprite(2100, 375, 'platform')
	game.physics.arcade.enable(platform);
	platform.body.immovable = true;
// ===============================
	platform1 = game.add.sprite(2164, 375, 'platform1')
	game.physics.arcade.enable(platform1);
	platform1.body.immovable = true;
// ===============================
	platform2 = game.add.sprite(2228, 375, 'platform2')
	game.physics.arcade.enable(platform2);
	platform2.body.immovable = true;
// ===============================
	platform3 = game.add.sprite(2292, 375, 'platform3')
	game.physics.arcade.enable(platform3);
	platform3.body.immovable = true;
	// ===============================
	platform4 = game.add.sprite(2356, 300, 'platform4')
	game.physics.arcade.enable(platform4);
	platform4.body.immovable = true;
	// ===============================
	platform5 = game.add.sprite(2420, 300, 'platform5')
	game.physics.arcade.enable(platform5);
	platform5.body.immovable = true;

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
	yellowJewel1 = game.add.sprite(1550, 300, 'yellowJewel1')
	yellowJewel1.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel1.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel1);
	// ===============================
	yellowJewel2 = game.add.sprite(1600, 550, 'yellowJewel2')
	yellowJewel2.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel2.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel2);
// ===============================
	yellowJewel3 = game.add.sprite(1700, 550, 'yellowJewel3')
	yellowJewel3.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel3.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel3);
// ===============================
	yellowJewel4 = game.add.sprite(1700, 550, 'yellowJewel4')
	yellowJewel4.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel4.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel4);
// ===============================
	yellowJewel5 = game.add.sprite(1800, 550, 'yellowJewel5')
	yellowJewel5.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel5.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel5);
// ===============================
	yellowJewel6 = game.add.sprite(2000, 550, 'yellowJewel6')
	yellowJewel6.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel6.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel6);
// ===============================
	yellowJewel7 = game.add.sprite(2200, 550, 'yellowJewel7')
	yellowJewel7.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel7.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel7);
// ===============================
	yellowJewel8 = game.add.sprite(2400, 550, 'yellowJewel8')
	yellowJewel8.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel8.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel8);
// ===============================
	yellowJewel9 = game.add.sprite(2600, 550, 'yellowJewel9')
	yellowJewel9.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel9.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel9);
// ===============================
	yellowJewel10 = game.add.sprite(2700, 550, 'yellowJewel10')
	yellowJewel10.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel10.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel10);
// ===============================
	yellowJewel11 = game.add.sprite(2800, 550, 'yellowJewel11')
	yellowJewel11.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel11.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel11);

// giving the runner physics
	game.physics.arcade.enable(runner);
	runner.body.gravity.y = 500;
	runner.body.checkWorldBounds = true;

	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	cursors = game.input.keyboard.createCursorKeys();

	game.camera.follow(runner);
}
function update(){
// collisions
	game.physics.arcade.collide(runner, line);
	game.physics.arcade.collide(runner, enemy);
	game.physics.arcade.collide(enemy, block);
	game.physics.arcade.collide(enemy, block1);
	game.physics.arcade.collide(runner, block);
	game.physics.arcade.collide(runner, block1);
	game.physics.arcade.collide(runner, block2);
	game.physics.arcade.collide(runner, block3);
	game.physics.arcade.collide(runner, brokenBlock);
	game.physics.arcade.collide(runner, platform);
	game.physics.arcade.collide(runner, platform1);
	game.physics.arcade.collide(runner, platform2);
	game.physics.arcade.collide(runner, platform3);
	game.physics.arcade.collide(runner, platform4);
	game.physics.arcade.collide(runner, platform5);
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

// speed with no movement from runner
	runner.body.velocity.x = 0;
	cloud.body.velocity.x = 0;
	cactus.body.velocity.x = 0;
	cactus1.body.velocity.x = 0;
	arrow.body.velocity.x = 0;
	block.body.velocity.x = 0;
	block1.body.velocity.x = 0;
	block2.body.velocity.x = 0;
	block3.body.velocity.x = 0;
	brokenBlock.body.velocity.x = 0;
	platform.body.velocity.x = 0;
	platform1.body.velocity.x = 0;
	platform2.body.velocity.x = 0;
	platform3.body.velocity.x = 0;
	platform4.body.velocity.x = 0;
	platform5.body.velocity.x = 0;
	yellowJewel.body.velocity.x = 0;
	yellowJewel1.body.velocity.x = 0;
	yellowJewel2.body.velocity.x = 0;
	yellowJewel3.body.velocity.x = 0;
	yellowJewel4.body.velocity.x = 0;
	yellowJewel5.body.velocity.x = 0;
	yellowJewel6.body.velocity.x = 0;
	yellowJewel7.body.velocity.x = 0;
	yellowJewel8.body.velocity.x = 0;
	yellowJewel9.body.velocity.x = 0;
	yellowJewel10.body.velocity.x = 0;
	yellowJewel11.body.velocity.x = 0;
	yellowJewel12.body.velocity.x = 0;
// runner physics logic with keys
	if(cursors.left.isDown)
	{
// setting velocity when going left(backwords)
		runner.body.velocity.x = -125;
		
	} 
	else if(cursors.right.isDown)
	{
// setting velocity when going righ†(forward)
		background.tilePosition.x +=-3;
		runner.body.velocity.x = 75;
		cloud.body.velocity.x = -120;
		cactus.body.velocity.x =-120; 
		cactus1.body.velocity.x =-120; 
		arrow.body.velocity.x = -130;
		block.body.velocity.x = -130;
		block1.body.velocity.x = -130;
		block2.body.velocity.x = -130;
		block3.body.velocity.x = -130;
		brokenBlock.body.velocity.x = -130;
		platform.body.velocity.x = -130;
		platform1.body.velocity.x = -130;
		platform2.body.velocity.x = -130;
		platform3.body.velocity.x = -130;
		platform4.body.velocity.x = -130;
		platform5.body.velocity.x = -130;
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
	}
	// only allow jump when runner on ground
	if(jumpButton.isDown && (runner.body.onFloor() || runner.body.touching.down))
	{
		runner.body.velocity.y = -400;
		jumpSnd.play();
	}
	// runner dies when touch spikes
	function spikeDeath(runner, enemy){
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

	function levelComplete(runner, flag){
		document.getElementById('nextLevel').style.display = 'block'
		game.paused = true;
		// code for level complete and link to next level
		// need to add this function to physics.arcade.collide above(same as hit jewel)
	}
}
function render(){
	stopWatch -= (game.paused)?0 : this.game.time.elapsed;
	game.debug.text("Timer: " + stopWatch , 32, 32, '#648C44', '80px');
	
	game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}
