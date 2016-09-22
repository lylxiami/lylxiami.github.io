$(function() {
	changeWidthLoad();
	function changeWidthLoad() {
		//loading
		var speed = 0;
		var imagesarray = ['img/bg.jpg','img/logo.png','img/shou.png','img/sui1.png','img/sui2.png','img/group1/bg2.jpg','img/group1/bg3.jpg','img/group1/book.png','img/group1/clock353.png','img/group1/zp481.png','img/group1/zz.png','img/group1/time2.png','img/group1/jn.png','img/group1/zp481.png'];
		function preloadimages(arr) {
			var newimages = [],
				loadedimages = 0;
			var arr = (typeof arr != "object") ? [arr] : arr;

			function imageloadpost() {
				loadedimages++;
				speed = parseInt(loadedimages / arr.length * 100);
				$('.loading p').text(speed + "%");
				if (loadedimages == arr.length) {
					$('.loading').hide();
					bgm.play();
				}
			}
			for (var i = 0; i < arr.length; i++) {
				newimages[i] = new Image()
				newimages[i].src = arr[i]
				newimages[i].onload = function() {
					imageloadpost();
				}
				newimages[i].onerror = function() {
					imageloadpost()
				}
			}
		}
		preloadimages(imagesarray);
	}
});