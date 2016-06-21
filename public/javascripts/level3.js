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
sfx = [];

function preload(){
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	game.load.image('background', '/images/airadventurelevel3.png');
	game.load.image('line', '/images/whiteline.png');
	game.load.image('tree', '/images/tree33.png');
	game.load.image('cloud', '/images/cloud1.png');
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
	game.load.image('block1', '/images/ground_snow_small.png');
	game.load.image('block2', '/images/ground_snow_small.png');
	game.load.image('block3', '/images/ground_snow_small.png');
	game.load.image('block4', '/images/ground_snow_small.png');
	game.load.image('block5', '/images/ground_snow_small.png');
	game.load.image('block6', '/images/ground_snow_small.png');
	game.load.image('platform', '/images/ground_snow.png');
	game.load.image('platform1', '/images/ground_snow.png');
	game.load.image('platform2', '/images/ground_snow.png');
	game.load.image('brokenBlock', '/images/blockGrey_broken.png');
	game.load.image('flag', '/images/flagGreen_up.png');
	game.load.image('arrow', '/images/signArrow_right.png');
	game.load.audio('music', '/sounds/ILovetheMountains.mp3');
	game.load.audio('jump', '/sounds/Jump.mp3');
	game.load.audio('gemSnd', '/sounds/Supercoin.mp3');
	game.load.audio('death', '/sounds/mbdie.mp3');
	game.load.image('runner', '/images/playerRed_stand.png');
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

	sfx.push(deathSnd);
	sfx.push(jumpSnd);
	sfx.push(gemSnd);

// adding background img and setting size variables
	background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
	background.scale.x = game.rnd.realInRange(.70, .70);
	background.scale.y = game.rnd.realInRange(.70, .70);
// ===============================
	arrow = game.add.sprite(100, 560, 'arrow');
	game.physics.arcade.enable(arrow);
// ===============================
	line = game.add.sprite(0, 660, 'line');
	game.physics.arcade.enable(line);
	line.body.immovable = true;
// ===============================
	tree = game.add.sprite(1240, 400, 'tree');
	game.physics.arcade.enable(tree);	
// ===============================	
	cloud = game.add.sprite(600, 100, 'cloud');
	game.physics.arcade.enable(cloud);
// ===============================	
	block1 = game.add.sprite(400, 600, 'block1');
	game.physics.arcade.enable(block1);
	block1.body.immovable = true;
// ===============================
	block2 = game.add.sprite(900, 600, 'block2');
	game.physics.arcade.enable(block2);
	block2.body.immovable = true;
// ===============================
	block3 = game.add.sprite(1400, 600, 'block3');
	game.physics.arcade.enable(block3);
	block3.body.immovable = true;
// ===============================
	platform = game.add.sprite(1650, 500, 'platform');
	game.physics.arcade.enable(platform);
	platform.body.immovable = true;
// ===============================
	platform1 = game.add.sprite(2300, 500, 'platform1');
	game.physics.arcade.enable(platform1);
	platform1.body.immovable = true;
// ===============================
	platform2 = game.add.sprite(2800, 400, 'platform2');
	game.physics.arcade.enable(platform2);
	platform2.body.immovable = true;
// ===============================
	flag = game.add.sprite(4800, 600, 'flag');
	flag.scale.x = game.rnd.realInRange(2, 2);
	flag.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(flag);
	flag.body.immovable = true;
// setting player
	runner = game.add.sprite(10, 500, 'runner')
	runner.scale.x = game.rnd.realInRange(1.8, 1.8);
	runner.scale.y = game.rnd.realInRange(1.8, 1.8);
// giving the runner physics
	game.physics.arcade.enable(runner);
	runner.body.gravity.y = 500;
	runner.body.checkWorldBounds = true;
// ===============================
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	cursors = game.input.keyboard.createCursorKeys();

	game.camera.follow(runner);

}
function update(){
	game.physics.arcade.collide(runner, line);
	game.physics.arcade.collide(runner, flag, levelComplete);
	game.physics.arcade.collide(runner, platform);
	game.physics.arcade.collide(runner, platform1);
	game.physics.arcade.collide(runner, platform2);
	game.physics.arcade.collide(runner, block1);
	game.physics.arcade.collide(runner, block2);
	game.physics.arcade.collide(runner, block3);
	game.physics.arcade.collide(runner, platform, setFriction);

	runner.body.velocity.x = 0;	
	flag.body.velocity.x = 0;	
	tree.body.velocity.x = 0;
	cloud.body.velocity.x = 0;
	flag.body.velocity.x = 0;
	arrow.body.velocity.x = 0;
	platform.body.velocity.x = 0;
	platform1.body.velocity.x = 0;
	platform2.body.velocity.x = 0;
	block1.body.velocity.x = 0;
	block2.body.velocity.x = 0;
	block3.body.velocity.x = 0;

	// runner physics logic with keys
	if(cursors.left.isDown)
	{
// setting velocity when going left(backwords)
		runner.body.velocity.x = -125;
		
	} 
	else if(cursors.right.isDown)
	{
// setting velocity when going righ†(forward)
		runner.body.velocity.x = 75;
		flag.body.velocity.x = -130;
		background.tilePosition.x +=-3;
		tree.body.velocity.x =-120;
		cloud.body.velocity.x = -120;
		arrow.body.velocity.x = -130;
		platform.body.velocity.x = -130;
		platform1.body.velocity.x = -130;
		platform2.body.velocity.x = -130;
		block1.body.velocity.x = -130;
		block2.body.velocity.x = -130;
		block3.body.velocity.x = -130;
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
		// game.paused = true;
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
	}
	function setFriction(runner, platform){
		platform.body.x -= platform.body.x - platform.body.prev.x;
	}
	
	function enemies(runner, enemy){
		if(runner.checkCollision.left = true){
			runner.kill();
		} else {
			killer++
			enemy.kill();
		}
	}
}
function muteMusic(){
	music.pause();
}
function muteSFX(){
	console.log("checkcheck")
	sfx.pause().each;
}
function render(){
	stopWatch -= (game.paused)?0 : this.game.time.elapsed;
	game.debug.text("Timer: " + stopWatch , 32, 32, '#648C44', '80px');
	game.debug.text("Enemies Slayed: " + killer, 700, 20, '#648C44','Lobster 80px');
	game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}
