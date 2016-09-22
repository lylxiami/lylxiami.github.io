$(function(){
	var disY=0,moveY=0,id=0;
	function photoShow(){
		$(".enterNext").hide();
		if(id <0){
			id=0
		}else if(id >=3){
			id = 3;
			$(".enterNext").show();
		}
		$(".photo").css({
			"-webkit-transform":"translateY(-"+(561*id)+"px)",
			"-webkit-transition":"all 1s"
		});
	}
	$(".w2").get(0).addEventListener("touchstart",function(e){
		disY = e.touches[0].pageY;
		$(".photo").removeClass("moveIn").css("-webkit-transition","all 1s");
	},false);
	$(".w2").get(0).addEventListener("touchmove",function(e){
		moveY = e.touches[0].pageY - disY;
	},false);
	$(".w2").get(0).addEventListener("touchend",function(e){
//		lastMove = moveY;
		if(moveY <= -50){
			id++
		}else if(moveY >= 50){
			id--;
		}
		moveY = 0;
		photoShow();
	},false);
	$(".enterNext").one("click",function(){
		$(".w2").get(0).addEventListener = null;
		$(".w2").fadeOut();
		$(".w3").show();
	});
});	