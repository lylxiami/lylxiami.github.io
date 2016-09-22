$(function(){
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");
	var arr = [{x:253,y:222},{x:365,y:176},{x:380,y:108}];	
	var isDraw = false,ifRight = false,draw1 = false,draw2 = false;
	function windowToCanvas (canvas,x,y){
		var bbox = canvas.getBoundingClientRect();
		
		return {
			x:(x - bbox.left) *(canvas.width/bbox.width),
			y:(y - bbox.top) *(canvas.height/bbox.height)
		};
	}
//	function draw(loc,id){
//		ctx.beginPath();
//		ctx.moveTo(arr[id].x,arr[id].y);
//		ctx.lineTo(loc.x,loc.y);
//	}

	ctx.lineWidth = 2;
	ctx.strokeStyle = "#aec0f1";
	
	ctx.canvas.addEventListener("touchstart",function(e){
		var loc = windowToCanvas(ctx.canvas,e.touches[0].pageX,e.touches[0].pageY);
		var distance = Math.sqrt(Math.pow(Math.abs(loc.x-arr[0].x),2) + Math.pow(Math.abs(loc.y-arr[0].y),2));
		if(Math.floor(distance) <= 25){
			isDraw = true;
		}
	},false);
	ctx.canvas.addEventListener("touchmove",function(e){
		var loc = windowToCanvas(ctx.canvas,e.touches[0].pageX,e.touches[0].pageY);
		var distance = 0;
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		for (var i=1;i<3;i++) {
			distance = Math.sqrt(Math.pow(Math.abs(loc.x-arr[i].x),2) + Math.pow(Math.abs(loc.y-arr[i].y),2));
			if(Math.floor(distance) <= 15){
				if(i == 1){
					if(!draw2){
						draw1 = true
					}else{
						draw1 = false
					}
				}else{
					if(!draw1){
						ifRight = false;
					}else{
						ifRight = true;
					}
					draw2 = true;
				}
			}
		}
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(arr[0].x,arr[0].y);
		
		if(draw1&&draw2){
			loc.x = arr[2].x;
			loc.y = arr[2].y;
		}
		if(isDraw){
			if(draw1){
				ctx.lineTo(arr[1].x,arr[1].y);
			}
			if(draw2){
				ctx.lineTo(arr[2].x,arr[2].y);
			}
			ctx.lineTo(loc.x,loc.y);
		}
		ctx.stroke();
		
	},false);
	ctx.restore();
	ctx.canvas.addEventListener("touchend",function(e){
		if(ifRight){
			setTimeout(function(){
				$(".w1").fadeOut();
				$(".w2").show();
				$(".photo").addClass("moveIn");
				$(".gd").addClass("gdAni");
			},800);
		}else{
			ifRight = false;
			draw1 = false;
			draw2 = false;
			isDraw = false;
			ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		}
	},false);
});