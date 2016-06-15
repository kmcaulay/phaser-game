var boot = function(game){
	console.log('heellllllo')
	
	boot.prototype = {
		preload: function(){
			this.game.load.image('loading', '/images/cloud1.png')
		}
		create: function(){
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.pageAlignHorizontally = true;
			this.scale.setScreenSize();
			this.game.state.start('load');
		}
	}
}