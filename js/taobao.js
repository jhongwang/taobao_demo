$(document).ready(function() {



	/*公告Tab栏部分*/
	 $(".notice-hd li").hover(function() {
	 	$(this).addClass('current1').siblings().removeClass('current1');
	 	$(".notice-bd ul").eq($(this).index()).show().siblings().hide();
	 });


	/* main3右侧收藏部分*/
	$(".main3-r-bd dd").hover(function() {
		$(this).children('.shoucang').stop().slideToggle();

	});


/*
	main2部分*/


	$(".main2 .dl2").hover(function() {
		$(this).find('img').stop().animate({"marginLeft":"7px"},200);
	}, function() {
		$(this).find('img').stop().animate({"marginLeft":"0"},200);
	});


	/*main3,tufan部分*/


	$(".main3-r-bd .ddlast li").hover(function() {
		$(this).find(".tufan").stop().toggle();
	});

	$(".ft-1-bd a").hover(function() {
		$(this).find(".tufan").stop().toggle();
	});

/*main6tufan部分*/
	  $(".m6-l-1").hover(function() {
	  	 $(this).children('.m6tufan').stop().toggle();
	  });

	$(".m6-l-2 div,.m6-l-3 div").hover(function() {
	  	 $(this).find('#m6tufan2').stop().toggle();
	  });

/*main6,main8右侧没有边.main10右侧*/	
    $(".m6-l-2:last").css("border-right","none");
	$(".main8 div:last").css("border-right","none");
	$(".m10-hd li:last").css("margin-left","30px");



/*大轮播图*/
  var $key=0;
  var speed=1000;
  var $circle=0;
  /*左右两个箭头*/
  $("#m-r-b-l-hd").hover(function() {
  	 $(".left,.right").stop().toggle();
  });

  $(".left,.right,#left,#right").hover(function() {
  	  
  	 $(this).stop().fadeTo(10,0.7);
  }, function() {
  	 
  	 $(this).stop().fadeTo(10,0.4);
  });

  $(".m-r-b-l-bd").hover(function() {
  	$("#left,#right").stop().toggle();
  });


/*轮播开始*/
$(".right").click(function(event) {
	autoplay();
});

/*左击*/
$(".left").click(function(event) {
	$key--;
	if($key<0)
	{
		$key=4;
		$(".m-r-b-l-hd-son").css("left","-2600px");
	}
	$(".m-r-b-l-hd-son").stop().animate({"left":-$key*520},speed);

	$circle--;
	if($circle<0)
	{
		$circle=4;
	}
	$(".circle li").eq($circle).addClass('current').siblings().removeClass('current');
});



/*定时器*/
var time=setInterval(autoplay,6000);
 function autoplay(){
 	  $key++;
	if($key>5)
	{
		$key=1;
		$(".m-r-b-l-hd-son").css("left",0);
	}
	$(".m-r-b-l-hd-son").stop().animate({"left":-$key*520},speed);

	$circle++;
	if($circle>4)
	{
		$circle=0;
	}
	$(".circle li").eq($circle).addClass('current').siblings().removeClass('current');

 }

 /*小圆点点击事件*/
$(".circle li").click(function(event) {
	 $circle=$(this).index();
	 $key=$(this).index();
	 $(".m-r-b-l-hd-son").stop().animate({"left":-$key*520},speed);
	
	 $(".circle li").eq($circle).addClass('current').siblings().removeClass('current');
     

});


 /*清除定时器*/
$("#m-r-b-l-hd").hover(function() {
	clearInterval(time);
}, function() {
	clearInterval(time);
	time=setInterval(autoplay,6000);
});
});





/*小轮播图*/
$(function() {
	var num=0;
    var d=0;
    var sudu=1000;
 
 $("#right").click(function(event) {
 	  xiao();
 });    

$("#left").click(function(event) {
	num--;
	if(num<0)
	{
		num=5;
		$(".m-r-b-l-bd-son").css("left","-3120px");
	}
	$(".m-r-b-l-bd-son").stop().animate({"left":-num*520},sudu);


	d--;
	if(d<0)
	{
		d=5;
	}
	$("#circle li").eq(d).addClass('current').siblings().removeClass('current');

});


/*点击小点*/
$("#circle li").click(function(event) {
	 num=$(this).index();
	 d=$(this).index();
	 $(this).addClass('current').siblings().removeClass('current');
	 $(".m-r-b-l-bd-son").stop().animate({"left":-num*520},sudu);
});


/*定时器*/
var timer=setInterval(xiao, 5000);
function xiao(){
	num++;
 	  if(num>6)
 	  {
 	  	num=1;
 	  	$(".m-r-b-l-bd-son").css("left",0);
 	  }
 	  $(".m-r-b-l-bd-son").stop().animate({"left":-num*520},sudu);

 	  d++;
 	  if(d>5)
 	  {
 	  	d=0;
 	  }
 	  $("#circle li").eq(d).addClass('current').siblings().removeClass('current');

}

$(".m-r-b-l-bd").hover(function() {
	clearInterval(timer);
}, function() {
	clearInterval(timer);
	timer=setInterval(xiao,5000);
});




/*小小轮播图*/
 var x=0;
 var s=3000;
 var xdsq=setInterval(lunbo,s);
 function lunbo(){
 	 x++;
 	 if(x>3)
 	 {
 	 	x=1;
 	 	$(".m5-r-b-left-son ul").css("left",0);
 	 }
 	 $(".m5-r-b-left-son ul").stop().animate({"left":-x*110},300);
 }

$(".m5-r-b-left-son li").hover(function() {
	clearInterval(xdsq);
}, function() {
	clearInterval(xdsq);
    xdsq=setInterval(lunbo,s);
});



$(".iright").click(function(event) {
	lunbo();
});


$(".ileft").click(function(event) {
	 x--;
 	 if(x<0)
 	 {
 	 	x=2;
 	 	$(".m5-r-b-left-son ul").css("left","-330px");
 	 }
 	 $(".m5-r-b-left-son ul").stop().animate({"left":-x*110},300);
 
});





/*头部滑动出来搜索栏*/
$(window).scroll(function(){
	var top=$(document).scrollTop();
	 console.log(top);
	 if(top>=140)
	 {
	 	$(".hiddensearch").stop().slideDown(50);
	 }
    else
    {
    	$(".hiddensearch").stop().slideUp(50);
    }
});


/*夜淘宝*/

var date=new Date();
var hours=date.getHours();
if(hours<6)
{
	$(".logo").css({"background":"url(images/00.gif) no-repeat","margin-top":"-20px"});
}
else if(hours<18)
{ 
	$(".logo").css({"background":"url(images/logo.png) no-repeat","margin-top":"0"});
}

else if(hours<24){
	$(".logo").css({"background":"url(images/00.gif) no-repeat","margin-top":"-20px"});
}




/*头部下拉菜单*/
$(".site-nav-bd-r li").eq(4).css({"background-color":"#f5f5f5","border":"0"});
$(".site-nav-bd-r li").hover(function() {
	
	$(this).children('.wodetaobao').stop().toggle();
	$(this).children('.wodetaobao').css("border-top-color","#fff")
});
$(".site-nav-bd-r li").eq(4).hover(function() {
	$(this).css({"background-color":"#f5f5f5","border":"0"});

}, function() {
	$(this).css({"background-color":"#f5f5f5","border":"0"});
});




});
	




	    












