
document.addEventListener("touchmove",function(e){
			e.preventDefault();
		});
//p1
	var disX = 0,moveX = 0,ifRun = true;
	$(".pro").get(0).addEventListener("touchstart",function(e){
		disX = e.touches[0].pageX;
	},false);
	$(".pro").get(0).addEventListener("touchmove",function(e){
		e.preventDefault();	
		moveX = e.touches[0].pageX - disX;
		if(ifRun){
			if(moveX < -50){
				ifRun = false;
				$(".pro>div").eq(0).appendTo($(".pro"));
			}
		}
	},false);
	$(".pro").get(0).addEventListener("touchend",function(e){
		moveX = 0;
		ifRun = true;
	},false);
	$(".detail").on("click",function(){
		var id = $(this).parent().parent().attr("id");
		$(".detailLayer").fadeIn();
		$(".detailBox img").hide();
		$(".detailBox img").eq(id).show();
	});
	$(".detailLayer").on("click",function(){
		$(this).fadeOut();
	});
//p2
$(".btn2").one("click",function(){
	$(".g1").fadeOut();
	$(".g2").fadeIn();
	$(".txt3").addClass("fadeInLeft");
	$(".pro").get(0).addEventListener = null;
	$(".detailLayer").on("click",null);
});
$(".fp").one("touchstart",function(e){
	$(".successLayer").fadeIn();
	setTimeout(function(){
		$(".g2").fadeOut();
		$(".g3").fadeIn();
		$(".txt4").addClass("fadeInLeft");
		$(".txt4-1").addClass("fadeInLeft");
	},1000);
});
var disY = 0,moveY=0;
$(".g3").get(0).addEventListener("touchstart",function(e){
	disY = e.touches[0].pageY;

},false);
$(".g3").get(0).addEventListener("touchmove",function(e){
	e.preventDefault();
	moveY = e.touches[0].pageY - disY;
});
$(".g3").get(0).addEventListener("touchend",function(e){
	if(moveY <= -60){
		$(".g3").fadeOut();
		$(".g4").fadeIn();
		$(".g3").get(0).addEventListener = null;
	}
});
 $(".eventBtn").on("click",function(){
 	$(".eventDetail").show();
 });
  $(".close").on("click",function(){
 	$(".eventDetail").hide();
 });
 $(".rukou").on("click",function(){
		 	window.location.href = 'http://custom.yangyue.com.cn/wechat/primy/merchants/index.php?from=timeline&isappinstalled=0'
		 });