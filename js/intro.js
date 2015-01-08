var lis,r=70;
$(document).ready(function() {
	lis=$(".nav li").length;
	for (var i=0;i<lis;i++){
		$(".nav li:eq("+i+")").css({
		"margin-left":-50+Math.cos(i*Math.PI*2/lis)*r,
		"margin-top":-15-Math.sin(i*Math.PI*2/lis)*r,
		"-webkit-transform":"rotate("+(-i*360/lis)+"deg)",
		"-moz-transform":"rotate("+(-i*360/lis)+"deg)",
		"-ms-transform":"rotate("+(-i*360/lis)+"deg)"
		});
	}
	
	skrollr.init();
});

//跳转指定位置
function skip_to(tt){
	$("html,body").animate({scrollTop:tt},400);
}

//翻开动画
function rotate_ani(n,f,t,s){
	$("."+n).css({borderSpacing:f})
	.animate({borderSpacing:t},{
		step: function(now,fx) {
			$(this).css({'transform':"translateZ(22.5em) rotateX("+now+"deg)",
			'-webkit-transform':"translateZ(22.5em) rotateX("+now+"deg)",
			'-moz-transform':"translateZ(22.5em) rotateX("+now+"deg)",
			'-o-transform':"translateZ(22.5em) rotateX("+now+"deg)",
			'-ms-transform':"translateZ(22.5em) rotateX("+now+"deg)"})
		},
		duration:s
	},"swing");
}

/* 关闭 */
function hideadd(addnm){		
	$("#cover").hide();
	$('.'+addnm).hide();	
};
/* 弹层--fixed定位 */
function show_add(addnm){
	$("#cover").show();
	$('#'+addnm).show();
}