var imgArr = [
	'img/group2/bg.jpg','img/group2/bg2jpg.jpg','img/group2/box.png','img/group2/product.png','img/group2/product2.png','img/group2/product3.png','img/group2/txt2.png','img/group2/txt3.png','img/group2/txt4.png','img/group2/txt5.png'
]
function loading(){
	var speed = 0;
	var imgload = 0;
	for (var i=0;i<imgArr.length;i++) {
		var img = new Image();
		img.src = imgArr[i];
		img.onload = function(){
			imgload ++;
			speed = imgload / imgArr.length * 100;
			if(speed >95){
				$(".w6 iframe").attr("src","invite.html");
				$(".w5-loading").fadeOut();
				$(".w6").fadeIn();
				setTimeout(function(){
					$(".jt").hide();
					$(".shou2").hide();
				},4500);
			}
		}
	}
	return false;
}