var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...',{
			font: '30px Courier', fill: '#ffffff'});

		game.load.image('runner', '/images/playerRed_stand.png');
	}

	create: function(){
		game.state.start('menu');
	}

}