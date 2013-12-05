$(function(){
	var menuToTop = $(".mallMain").offset().top;
	var topToFold = 100; // 顶部固定后多少距离开始折叠
	var heightToFold = 80; //滚动多少像素开始折叠

	

	$(".mallMain").hover(function(){
		$(".subView").show();
		$(".subMenu").css("overflow","visible")
					 .animate({
					 	width: "764px"
					 	});
	},function(){
		$(".subMenu").css({"overflow":"hidden","width":"0"});
		$(".subView").hide();
	});

	$(window).scroll(function() {
		var windowToTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(windowToTop >= menuToTop){
			$(".mallMain").addClass("menuFixed");
			//滚动折叠
			var foldNum = parseInt((windowToTop - menuToTop - topToFold)/heightToFold);
			nanoMenu(foldNum);
		}else{
			$(".mallMain").removeClass("menuFixed");
		}
	});

	$('.menuCategory li').hover(function(){
		$(".subView li").eq($(this).index()).siblings().hide();
		$(".subView li").eq($(this).index()).show();
		console.log($(this).index());
		if($(this).index() > 4){
			$(".subMenu").css("top", "228px");
		}else{
			$(".subMenu").css("top","20px");
		}
	});

});

//折叠
function nanoMenu(toFold){
	var subList = $(".menuCategory li");
	for(i = 0;i < toFold;i++){
		if(i < subList.length){
			$(subList[i]).children("p").slideUp();
		}
	}

	for(i = subList.length;i >= toFold;i--){
		if(i >= 0){
			$(subList[i]).children("p").slideDown();
		}
	}
}