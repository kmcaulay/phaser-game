var game = new Phaser.Game(1024, 768, Phaser.CANVAS, '', {
	preload: preload, 
	create: create, 
	update: update,
	render: render
});

var yellowJewels = [];

function preload(){
	game.load.image('background', '/images/airadventurelevel3.png');
	game.load.image('line', '/images/brownline1.png');
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
// timer
	game.time.events.add(Phaser.Timer.SECOND * 100);
// music
	music = game.add.audio('music');
	music.play();
// adding background img and setting size variables
	background = game.add.tileSprite(0, 0, 2000, 1080, 'background');
	background.scale.x = game.rnd.realInRange(.70, .70);
	background.scale.y = game.rnd.realInRange(.70, .70);

	line = game.add.sprite(0, 620, 'line');

}
function update(){

}
function render(){

}
