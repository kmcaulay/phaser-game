window.addEventListener('resize', onResizeCalled, false);

var game = new Phaser.Game(1024, 768, Phaser.CANVAS, '', {
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
	game.load.image('background', '/images/colored_talltrees.png');
	game.load.image('tree', '/images/tree27.png');
	game.load.image('tree1', '/images/tree27.png');
	game.load.image('cloud', '/images/cloud2.png');
	game.load.image('grass', '/images/grass4.png');
	game.load.image('grass1', '/images/grass4.png');
	game.load.image('line', '/images/brownline1.png');
	game.load.image('block', '/images/tileBrown_18.png');
	game.load.image('block1', '/images/tileBrown_18.png');
	game.load.image('block2', '/images/tileBrown_18.png');
	game.load.image('block3', '/images/tileBrown_18.png');
	game.load.image('block4', '/images/tileBrown_18.png');
	game.load.image('block5', '/images/tileBrown_18.png');
	game.load.image('block6', '/images/tileBrown_18.png');
	game.load.image('block7', '/images/tileBrown_18.png');
	game.load.image('block8', '/images/tileBrown_18.png');
	game.load.image('block9', '/images/tileBrown_18.png');
	game.load.image('spikes', '/images/spikesLow.png');
	game.load.image('spikes1', '/images/spikesLow.png');
	game.load.image('spikes2', '/images/spikesLow.png');
	game.load.image('brokenBlock', '/images/blockGrey_broken.png');
	game.load.image('brokenBlock1', '/images/blockGrey_broken.png');
	game.load.image('brokenBlock2', '/images/blockGrey_broken.png');
	game.load.image('brokenBlock3', '/images/blockGrey_broken.png');
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
	game.load.image('arrow', '/images/signArrow_right.png');
	game.load.image('flag', '/images/flagGreen_up.png');
	game.load.image('runner', '/images/playerRed_stand.png', 50, 50);
	game.load.image('grassfront', '/images/grass6.png');
	game.load.image('grassfront1', '/images/grass2.png');
	game.load.image('grassfront2', '/images/grass6.png');
	game.load.image('grassfront3', '/images/grass2.png');
	game.load.image('grassfront4', '/images/grass4.png');
	game.load.image('grassfront5', '/images/grass2.png');
	game.load.image('grassfront6', '/images/grass2.png');
	game.load.image('grassfront7', '/images/grass4.png');
	game.load.image('menu', '/images/puzzleRed.png')
	game.load.audio('music', '/sounds/8-Bit.mp3')
	game.load.audio('jump', '/sounds/Jump.mp3')

};


function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
// music
	music = game.add.audio('music');
	music.play();

// adding background img and setting size variables
	background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
	background.scale.x = game.rnd.realInRange(.70, .70);
	background.scale.y = game.rnd.realInRange(.70, .70);

	arrow = game.add.sprite(100, 500, 'arrow')
	game.physics.arcade.enable(arrow)

// setting background assets/physics
	tree = game.add.sprite(550,335, 'tree');
	tree1 = game.add.sprite(1500, 335, 'tree1')
// tree physics
	game.physics.arcade.enable(tree);
	game.physics.arcade.enable(tree1);

	cloud = game.add.sprite(600, 15, 'cloud');
// cloud physics
	game.physics.arcade.enable(cloud);

	grass = game.add.sprite(200, 530, 'grass');
	grass1 = game.add.sprite(900, 530, 'grass1');
// grass physics
	game.physics.arcade.enable(grass);
	game.physics.arcade.enable(grass1);	

// finish line
	flag = game.add.sprite(4000, 500, 'flag');
	flag.scale.x = game.rnd.realInRange(2, 2);
	flag.scale.y = game.rnd.realInRange(2, 2);
	game.physics.arcade.enable(flag);


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
	block3 = game.add.sprite(1550, 400, 'block3')
	block3.scale.x = game.rnd.realInRange(1.9, 1.9);
	block3.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block3);
	block3.body.immovable = true;
// ===============================
	block4 = game.add.sprite(2000, 500, 'block4')
	block4.scale.x = game.rnd.realInRange(1.9, 1.9);
	block4.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block4);
	block4.body.immovable = true;
// ===============================
	block5 = game.add.sprite(2100, 500, 'block5')
	block5.scale.x = game.rnd.realInRange(1.9, 1.9);
	block5.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block5);
	block5.body.immovable = true;
// ===============================
	block6 = game.add.sprite(2100, 400, 'block6')
	block6.scale.x = game.rnd.realInRange(1.9, 1.9);
	block6.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block6);
	block6.body.immovable = true;
// ===============================
	spikes =  game.add.sprite(2225, 600, 'spikes')
	game.physics.arcade.enable(spikes)
	spikes.body.immovable = true;
	spikes1 =  game.add.sprite(2290, 600, 'spikes1')
	game.physics.arcade.enable(spikes1)
	spikes1.body.immovable = true;
	spikes2 =  game.add.sprite(2330, 600, 'spikes2')
	game.physics.arcade.enable(spikes2)
	spikes2.body.immovable = true;
// ===============================
	block7 = game.add.sprite(2400, 500, 'block7')
	block7.scale.x = game.rnd.realInRange(1.9, 1.9);
	block7.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block7);
	block7.body.immovable = true;
// ===============================
	block8 = game.add.sprite(2400, 400, 'block8')
	block8.scale.x = game.rnd.realInRange(1.9, 1.9);
	block8.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block8);
	block8.body.immovable = true;
// ===============================
	block9 = game.add.sprite(2500, 500, 'block9')
	block9.scale.x = game.rnd.realInRange(1.9, 1.9);
	block9.scale.y = game.rnd.realInRange(1.9, 1.9);
// brownbox physics
	game.physics.arcade.enable(block9);
	block9.body.immovable = true;
// setting ground
	line = game.add.sprite(0, 620, 'line');

//=============================
// broken box 
	brokenBlock = game.add.sprite(1200, 500, 'brokenBlock')
	brokenBlock.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock.scale.y = game.rnd.realInRange(1.9, 1.9);
// broken box physics
	game.physics.arcade.enable(brokenBlock);
//=============================
	yellowJewel9 = game.add.sprite(1240, 525, 'yellowJewel9')
	yellowJewel9.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel9.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel9);
//=============================
//yellow jewel
	yellowJewel = game.add.sprite(300, 550, 'yellowJewel')
	yellowJewel.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel);
//=============================
	yellowJewel1 = game.add.sprite(735, 300, 'yellowJewel1')
	yellowJewel1.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel1.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel1);
//=============================
	yellowJewel2 = game.add.sprite(1240, 300, 'yellowJewel2')
	yellowJewel2.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel2.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel2);
//=============================
	yellowJewel3 = game.add.sprite(1000, 500, 'yellowJewel3')
	yellowJewel3.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel3.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel3);
//=============================
	yellowJewel4 = game.add.sprite(1600, 200, 'yellowJewel4')
	yellowJewel4.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel4.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel4);
//=============================
	yellowJewel5 = game.add.sprite(2100, 300, 'yellowJewel5')
	yellowJewel5.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel5.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel5);
//=============================
	yellowJewel6 = game.add.sprite(2300, 200, 'yellowJewel6')
	yellowJewel6.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel6.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel6);
//=============================
	yellowJewel7 = game.add.sprite(2400, 300, 'yellowJewel7')
	yellowJewel7.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel7.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel7);
//=============================
	yellowJewel8 = game.add.sprite(3000, 400, 'yellowJewel8')
	yellowJewel8.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel8.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel8);
//=============================
	yellowJewel10 = game.add.sprite(3200, 100, 'yellowJewel10')
	yellowJewel10.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel10.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel10);
//=============================
	yellowJewel11 = game.add.sprite(4000, 400, 'yellowJewel11')
	yellowJewel11.scale.x = game.rnd.realInRange(2, 2);
	yellowJewel11.scale.y = game.rnd.realInRange(2, 2);	
// yellow jewel physics 
	game.physics.arcade.enable(yellowJewel11);
//=============================
// broken box 
	brokenBlock1 = game.add.sprite(3000, 500, 'brokenBlock1')
	brokenBlock1.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock1.scale.y = game.rnd.realInRange(1.9, 1.9);
// broken box physics
	game.physics.arcade.enable(brokenBlock1);
//=============================
// broken box 
	brokenBlock2 = game.add.sprite(3120, 500, 'brokenBlock2')
	brokenBlock2.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock2.scale.y = game.rnd.realInRange(1.9, 1.9);
// broken box physics
	game.physics.arcade.enable(brokenBlock2);
//=============================
// broken box 
	brokenBlock3 = game.add.sprite(3120, 378, 'brokenBlock3')
	brokenBlock3.scale.x = game.rnd.realInRange(1.9, 1.9);
	brokenBlock3.scale.y = game.rnd.realInRange(1.9, 1.9);
// broken box physics
	game.physics.arcade.enable(brokenBlock3);
//=============================
// giving the line physics
	game.physics.arcade.enable(line);
	line.body.immovable = true;

// setting player sprite in beginning of level
	runner = game.add.sprite(10, 500, 'runner');
	runner.scale.x = game.rnd.realInRange(1.8, 1.8);
	runner.scale.y = game.rnd.realInRange(1.8, 1.8);
// giving the runner physics
	game.physics.arcade.enable(runner);
	runner.body.gravity.y = 500;
	runner.body.collideWorldBounds = true;
// add animation to character running
	// runner.animation.add('right', [0,1,2,1], 2, true);

	grassfront = game.add.sprite(400, 600, 'grassfront')
	grassfront1 = game.add.sprite(800, 620, 'grassfront1')
	grassfront2 = game.add.sprite(1100, 600, 'grassfront2')
	grassfront3 = game.add.sprite(1450, 610, 'grassfront3')
	grassfront4 = game.add.sprite(1600, 620, 'grassfront4')
	grassfront5 = game.add.sprite(1800, 615, 'grassfront5')
	grassfront6 = game.add.sprite(2200, 600, 'grassfront6')
	grassfront7 = game.add.sprite(2500, 620, 'grassfront7')
	game.physics.arcade.enable(grassfront);	
	game.physics.arcade.enable(grassfront1);	
	game.physics.arcade.enable(grassfront2);	
	game.physics.arcade.enable(grassfront3);	
	game.physics.arcade.enable(grassfront4);	
	game.physics.arcade.enable(grassfront5);	
	game.physics.arcade.enable(grassfront6);	
	game.physics.arcade.enable(grassfront7);	

// establish jumping for runner
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	jump = game.add.audio('jump')
	
	cursors = game.input.keyboard.createCursorKeys();

	game.camera.follow(runner);
	

};

function update() {
// collisions
	game.physics.arcade.collide(runner, line);
	game.physics.arcade.collide(runner, block);
	game.physics.arcade.collide(runner, block1);
	game.physics.arcade.collide(runner, block2);
	game.physics.arcade.collide(runner, block3);
	game.physics.arcade.collide(runner, block4);
	game.physics.arcade.collide(runner, block5);
	game.physics.arcade.collide(runner, block6);
	game.physics.arcade.collide(runner, block7);
	game.physics.arcade.collide(runner, block8);
	game.physics.arcade.collide(runner, block9);
	game.physics.arcade.collide(runner, brokenBlock);
	game.physics.arcade.collide(runner, brokenBlock1);
	game.physics.arcade.collide(runner, brokenBlock2);
	game.physics.arcade.collide(runner, brokenBlock3);
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
	game.physics.arcade.collide(runner, flag);
	game.physics.arcade.collide(runner, spikes, spikeDeath);
	game.physics.arcade.collide(runner, spikes1, spikeDeath);
	game.physics.arcade.collide(runner, spikes2, spikeDeath);
// speed with no movement from runner
	runner.body.velocity.x = 0;
	cloud.body.velocity.x = 0;
	tree.body.velocity.x = 0;
	tree1.body.velocity.x = 0;
	grass.body.velocity.x = 0;
	grass1.body.velocity.x = 0;
	grassfront.body.velocity.x = 0;
	grassfront1.body.velocity.x = 0;
	grassfront2.body.velocity.x = 0;
	grassfront3.body.velocity.x = 0;
	grassfront4.body.velocity.x = 0;
	grassfront5.body.velocity.x = 0;
	grassfront6.body.velocity.x = 0;
	grassfront7.body.velocity.x = 0;
	block.body.velocity.x = 0;
	block1.body.velocity.x = 0;
	block2.body.velocity.x = 0;
	block3.body.velocity.x = 0;
	block4.body.velocity.x = 0;
	block5.body.velocity.x = 0;
	block6.body.velocity.x = 0;
	block7.body.velocity.x = 0;
	block8.body.velocity.x = 0;
	block9.body.velocity.x = 0;
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
	brokenBlock.body.velocity.x = 0;
	brokenBlock1.body.velocity.x = 0;
	brokenBlock2.body.velocity.x = 0;
	brokenBlock3.body.velocity.x = 0;
	arrow.body.velocity.x = 0;
	flag.body.velocity.x = 0;
	spikes.body.velocity.x = 0;
	spikes1.body.velocity.x = 0;
	spikes2.body.velocity.x = 0;
// runner physics logic with keys
	if(cursors.left.isDown)
	{
// setting velocity when going left(backwords)
		runner.body.velocity.x = -250;
		
	} 
	else if(cursors.right.isDown)
	{
// setting velocity when going righ†(forward)
		background.tilePosition.x +=-3;
		runner.body.velocity.x = 75;
		cloud.body.velocity.x = -120;
		tree.body.velocity.x =-120;
		tree1.body.velocity.x =-120;
		grass.body.velocity.x =-120;
		grass1.body.velocity.x =-120;
		grassfront.body.velocity.x = -130;
		grassfront1.body.velocity.x = -130;
		grassfront2.body.velocity.x = -130;
		grassfront3.body.velocity.x = -130;
		grassfront4.body.velocity.x = -130;
		grassfront5.body.velocity.x = -130;
		grassfront6.body.velocity.x = -130;
		grassfront7.body.velocity.x = -130;
		block.body.velocity.x = -130;
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
		brokenBlock.body.velocity.x = -130;
		brokenBlock1.body.velocity.x = -130;
		brokenBlock2.body.velocity.x = -130;
		brokenBlock3.body.velocity.x = -130;
		arrow.body.velocity.x = -130
		block1.body.velocity.x = -130;
		block2.body.velocity.x = -130;
		block3.body.velocity.x = -130;
		block4.body.velocity.x = -130;
		block5.body.velocity.x = -130;
		block6.body.velocity.x = -130;
		block7.body.velocity.x = -130;
		block8.body.velocity.x = -130;
		block9.body.velocity.x = -130;
		flag.body.velocity.x = -130;
		spikes.body.velocity.x = -130;
		spikes1.body.velocity.x = -130;
		spikes2.body.velocity.x = -130;

	}
// only allow jump when runner on ground
	if(jumpButton.isDown && (runner.body.onFloor() || runner.body.touching.down))
	{
		runner.body.velocity.y = -400;
	}
	// runner dies when touch spikes
	function spikeDeath(runner, spikes){
		runner.kill();
	}
// grabbing jewels	
	function hitJewel(runner, yellowJewel){
		yellowJewels++
		yellowJewel.kill();
	}
	// pausing game with menu
	if(document.getElementById('light').style.display == 'block'){
		game.paused = true;
	} 
	// unpausing game with menu
	if(document.getElementById('light').style.display == 'none'){
		game.paused = false;
		}
};
function render(){
	stopWatch -= (game.paused)?0 : this.game.time.elapsed;
	game.debug.text("Timer: " + stopWatch , 32, 32, '#648C44', 'Lobster 80px');
	
	game.debug.text('GEMS: ' + yellowJewels, 500, 20, '#648C44','Lobster 80px');

}

