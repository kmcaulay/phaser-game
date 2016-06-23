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
// sfx = [];

function preload(){
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	game.load.image('background', '/images/airadventurelevel3.png');
	game.load.image('line', '/images/whiteline.png');
	game.load.image('tree', '/images/tree33.png');
	game.load.image('tree1', '/images/tree33.png');
	game.load.image('tree2', '/images/tree33.png');
	game.load.image('tree3', '/images/tree33.png');
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

	// sfx.push(deathSnd);
	// sfx.push(jumpSnd);
	// sfx.push(gemSnd);

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
	tree1 = game.add.sprite(2480, 400, 'tree1');
	game.physics.arcade.enable(tree1);	
// ===============================
	tree2 = game.add.sprite(3720, 400, 'tree2');
	game.physics.arcade.enable(tree2);	
// ===============================
	tree3 = game.add.sprite(4960, 400, 'tree3');
	game.physics.arcade.enable(tree3);	
// ===============================	
	cloud = game.add.sprite(600, 100, 'cloud');
	game.physics.arcade.enable(cloud);
// ===============================	
	block1 = game.add.sprite(400, 600, 'block1');
	game.physics.arcade.enable(block1);
	block1.body.immovable = true;
	block1.body.friction = 0;
// ===============================
	block2 = game.add.sprite(900, 600, 'block2');
	game.physics.arcade.enable(block2);
	block2.body.immovable = true;
	block2.body.friction = 0;
// ===============================
	block3 = game.add.sprite(1400, 600, 'block3');
	game.physics.arcade.enable(block3);
	block3.body.immovable = true;
// ===============================
	block4 = game.add.sprite(3500, 600, 'block4');
	game.physics.arcade.enable(block4);
	block4.body.immovable = true;
// ===============================
	platform = game.add.sprite(1650, 500, 'platform');
	game.physics.arcade.enable(platform);
	platform.body.immovable = true;
	platform.friction = 0;
// ===============================
	platform1 = game.add.sprite(2300, 500, 'platform1');
	game.physics.arcade.enable(platform1);
	platform1.body.immovable = true;
// ===============================
	platform2 = game.add.sprite(2800, 400, 'platform2');
	game.physics.arcade.enable(platform2);
	platform2.body.immovable = true;
// ===============================
	yellowJewel = game.add.sprite(470, 500, 'yellowJewel');
	yellowJewel.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel);
// ===============================
	yellowJewel1 = game.add.sprite(970, 500, 'yellowJewel1');
	yellowJewel1.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel1.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel1);
// ===============================
	yellowJewel2 = game.add.sprite(720, 400, 'yellowJewel2');
	yellowJewel2.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel2.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel2);
// ===============================
	yellowJewel3 = game.add.sprite(1470, 500, 'yellowJewel3');
	yellowJewel3.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel3.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel3);
// ===============================
	yellowJewel4 = game.add.sprite(1700, 400, 'yellowJewel4');
	yellowJewel4.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel4.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel4);
// ===============================
	yellowJewel5 = game.add.sprite(1900, 400, 'yellowJewel5');
	yellowJewel5.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel5.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel5);
// ===============================
	yellowJewel6 = game.add.sprite(2170, 300, 'yellowJewel6');
	yellowJewel6.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel6.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel6);
// ===============================
	yellowJewel7 = game.add.sprite(2470, 400, 'yellowJewel7');
	yellowJewel7.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel7.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel7);
// ===============================
	yellowJewel8 = game.add.sprite(2900, 300, 'yellowJewel8');
	yellowJewel8.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel8.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel8);
// ===============================
	yellowJewel9 = game.add.sprite(3100, 300, 'yellowJewel9');
	yellowJewel9.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel9.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel9);
// ===============================
	yellowJewel10 = game.add.sprite(3400, 200, 'yellowJewel10');
	yellowJewel10.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel10.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel10);
// ===============================
	yellowJewel11 = game.add.sprite(3600, 470, 'yellowJewel11');
	yellowJewel11.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel11.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(yellowJewel11);
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

	// game.camera.follow(runner);
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
	game.physics.arcade.collide(runner, block4);
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

	background.tilePosition.x +=-3;
	runner.body.velocity.x = 0;
	// flag.body.velocity.x = 0;	
	// tree.body.velocity.x = 0;
	// tree1.body.velocity.x = 0;
	// tree2.body.velocity.x = 0;
	// tree3.body.velocity.x = 0;
	// cloud.body.velocity.x = 0;
	// flag.body.velocity.x = 0;
	// arrow.body.velocity.x = 0;
	// platform.body.velocity.x = 0;
	// platform1.body.velocity.x = 0;
	// platform2.body.velocity.x = 0;
	// block1.body.velocity.x = 0;
	// block2.body.velocity.x = 0;
	// block3.body.velocity.x = 0;
	// block4.body.velocity.x = 0;
	// yellowJewel.body.velocity.x = 0;
	// yellowJewel1.body.velocity.x = 0;
	// yellowJewel2.body.velocity.x = 0;
	// yellowJewel3.body.velocity.x = 0;
	// yellowJewel4.body.velocity.x = 0;
	// yellowJewel5.body.velocity.x = 0;
	// yellowJewel6.body.velocity.x = 0;
	// yellowJewel7.body.velocity.x = 0;
	// yellowJewel8.body.velocity.x = 0;
	// yellowJewel9.body.velocity.x = 0;
	// yellowJewel10.body.velocity.x = 0;
	// yellowJewel11.body.velocity.x = 0;

	// runner physics logic with keys
	if(cursors.left.isDown)
	{
// setting velocity when going left(backwords)
		runner.body.velocity.x = -225;
		
	} 
	else if(cursors.right.isDown)
	{
// setting velocity when going righ†(forward)
		// background.tilePosition.x +=-3;
		runner.body.velocity.x = 100;
		flag.body.velocity.x = -130;
		tree.body.velocity.x =-120;
		tree1.body.velocity.x =-120;
		tree2.body.velocity.x =-120;
		tree3.body.velocity.x =-120;
		cloud.body.velocity.x = -120;
		arrow.body.velocity.x = -130;
		platform.body.velocity.x = -130;
		platform1.body.velocity.x = -130;
		platform2.body.velocity.x = -130;
		block1.body.velocity.x = -130;
		block2.body.velocity.x = -130;
		block3.body.velocity.x = -130;
		block4.body.velocity.x = -130;
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
			document.getElementById('gameOver').style.display = 'block';
		} else {
			killer++
			enemy.kill();
		}
	}
	// runner.events.outOfBounds.add(function(){
	// 	runner.kill();
	// 	document.getElementById('gameOver').style.display = 'block'
	// })
}
function muteMusic(){
	music.pause();
}
// function muteSFX(){
// 	deathSnd.muted = true;
// 	console.log("checking1");
// 	jumpSnd.stop();
// 	console.log(jumpSnd);
// 	gemSnd.muted = true;
// 	console.log("checking3");
// }
function render(){
	stopWatch -= (game.paused)?0 : this.game.time.elapsed;
	game.debug.text("Timer: " + stopWatch , 32, 32, '#648C44', '80px');
	game.debug.text("Enemies Slayed: " + killer, 700, 20, '#648C44','Lobster 80px');
	game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');
}
