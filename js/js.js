
$(function(){
	if($(".item5_d ul").length){
		$(".item5_box").each(function(){$(this).find(".item5_t li").eq(0).addClass("cur");});
		$(".item5_t li").hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(this).parent(".item5_t").find(".kmore a").eq($(this).index()).show().siblings().hide();
			$(this).parents(".item5_box").find(".item5_d ul").eq($(this).index()).show().siblings().hide();
		});
	}
	if($(".students_t2").length){
		$(".students_t2 li").each(function(){$(this).find(".students_t2 li").eq(0).addClass("cur");});
		$(".students_t2 li").hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".featured_posts ul").eq($(this).index()).show().siblings().hide();
		});
	}
	if($(".left_news_list2").length){
		$(".left_news_list2 ul li").each(function(){
			$(this).has('dl').children("a").attr({href:'javascript:;'});
			$(this).has('dl').children("a").append($(".left_news_list2").find('.jiabox').html());
			$(".left_news_list2").find('.jian').show();
		});
		$(".left_news_list2 ul li").has('dl').click(function(){
			//$(".left_news_list2 ul li").find('dl').slideUp();
			$(this).find('dl').slideToggle();
			//$(".left_news_list2").find('.jian').show();
			//$(".left_news_list2").find('.jia').hide();
			$(this).find('.jia').toggle();
			$(this).find('.jian').toggle();
		});
	}
	$('.dowebok').liMarquee({
		drag: false
	});
});

$('#share-2').share({sites: ['qzone', 'qq', 'weibo','wechat']});


$(document).ready(function() {
      $("#owl-demo").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
		  ,autoPlay:4000

      });
      $("#owl-demo2").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
		  ,autoPlay:4000

      });
		$('.short_cut_icon li a').each(function(){
									$(this).prepend($(this).find('img').clone());
		});
		$('.input-search_box').prepend($('.input-search_box1').html());
});