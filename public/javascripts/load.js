var preload = function(game){
	
	preload.prototype = {
		preload: function(){
			var loadingLabel = game.add.text(80, 150, 'loading...',{
				font: '30px Courier', fill: '#ffffff'});

			this.game.load.image('runner', '/images/playerRed_stand.png');
			this.game.load.progess;
		}

		create: function(){
			this.game.state.start('menu');
		}
	}
}