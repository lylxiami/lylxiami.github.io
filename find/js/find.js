var aImg =["img/2.png"];
loadings(function(){
	$('.loading').fadeOut(1000);
})
function loadings(cb){
		if (aImg.length>0) {
			var index = 0;
			for (var i = 0; i < aImg.length; i++) {
				var img = new aImg;
				img.src = aImg[i];
				img.onload = function(){
					index++;
					if (index==aImg.length) {
						cb&cb();
					}
				}
			}
		}
	}else{
		cb&cb();
	}
}
