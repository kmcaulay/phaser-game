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
	}
	// only allow jump when runner on ground
	if(jumpButton.isDown && (runner.body.onFloor() || runner.body.touching.down))
	{
		runner.body.velocity.y = -400;
		jumpSnd.play();
	}
	// runner dies when touch spikes
	function spikeDeath(runner, spikes){
		deathSnd.play();
		runner.kill();
		// document.getElementById('gameOver').style.display == 'block'
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
