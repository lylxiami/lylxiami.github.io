var bgm;
window.Music = function(src,btn){
	var switcher = $(btn);
	var ifOpen = true;
	
	bgm = new Audio();
	bgm.src = src;
	bgm.loop = "loop";
	switcher.on("click",function(){
		if(ifOpen){
			ifOpen = false;
			$(this).attr("src","./img/yue2.png").removeClass("mrotate");
			bgm.pause();
		}else{
			ifOpen = true;
			$(this).attr("src","./img/yue.png").addClass("mrotate");
			bgm.play();
		}
	});
}
 Music("./music/music.mp3",".yue_btn");//鑳屾櫙闊充箰