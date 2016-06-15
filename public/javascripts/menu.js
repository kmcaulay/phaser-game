BasicGame.Menu = function (game){
	this.music = null;
	this.playButton = null;
};

BasicGame.Menu.prototype = {

	create: function (){
		var nameLabel = game.add.text(80, 80, 'Phaser Game', 
			{font: '50px Arial', fill: '#ffffff' })

		var startLabel = game.add.text(80, game.world.height-80, 'press SPACEBAR to begin', 
			{font: '25px Arial', fill: '#ffffff'})

		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.music = this.add.audio('');
		this.music.play();

	}

	// update: function (){


	// }

	start: function(){
		// this.music.stop();
		this.state.start('app');
	}
};