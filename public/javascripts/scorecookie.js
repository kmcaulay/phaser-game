$(document).ready(function(){

	
	function getScore(jewels,display){
		if(Cookies.get(jewels)){
			Cookies.set(jewels)
			$(display).text(Cookies.get(jewels))
		} 
	}


});