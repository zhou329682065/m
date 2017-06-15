// banner js code start
var random=parseInt(Math.random()*10000+300000);//random

var script=document.createElement("script");
//banner data
script.src="https://static-api.letv.com/blockNew/get?id=9744&callback=banner&="+ random;
$("body").append(script);
//banner style

var index=0;
var ind=0;
var banner_t=null;
var banner_t1=null;
function banner(data){
    // console.log(data)
    var str_banner='';
    var str_nav_con='';
        for(var i=0;i<10;i++){//因为轮播图数据多但是页面只要好10个
            str_banner+='<a class="banner_div"  style="background:url('+data.data.blockContent[i].pic1+')no-repeat top center;" href=" '+data.data.blockContent[i].url+' "><div class="">';
            str_banner+='</div></a>';
        };
    str_nav_con+='<ul class="banner_ul">';//轮播图小圆点
        for(var i=0;i<10;i++){
            str_nav_con+='<li class="banner_li"></li>'
        };
    str_nav_con+='</ul>';//轮播图小圆点over
    str_nav_con+='<a href="javascript:;" class="banner_left iconfont">';
        str_nav_con+='&#xe693;';
    str_nav_con+='</a>';
    str_nav_con+='<a href="javascript:;" class="banner_right iconfont">';
        str_nav_con+="&#xe694;";
    str_nav_con+='</a>';

    $(".banner").html(str_banner);
    $(".nav_con").html(str_nav_con);
    $(".banner_li").eq(0).css({"background":"rgb(183,144,90)"});//banner下第一个小圆点颜色
    banner_active();//call banner effect-fn
    banner_dot();//小圆点事件
    banner_btn();//左右按钮点击事件

};//banner style over
// banner js code over


// ------------------------banner fn-------------------------------
function banner_active(){//banner effect-fn
    $(".banner_div").eq(0).show();
    clearInterval(banner_t)
    banner_t=setInterval(move,2500);
};//banner effect-function over
function banner_dot(){//轮播小圆点被hover时事件
    $(".banner_li").hover(function(){
        clearInterval(banner_t)
        ind=$(this).index();
        // console.log(ind)/
        $(this).css({background:"rgb(183,144,90)"}).siblings().css("background","");
        $(".banner_div").eq(ind).fadeIn().siblings().fadeOut();
        index=ind;
    },function(){
        banner_t=setInterval(move,2500);
    });
};//轮播小圆点事件over
//左右按钮点击事件
function banner_btn(){
    $('.banner_left').click(function(){
        clearInterval(banner_t);
        index--;
        if(index<0){index=$(".banner_div").length-1};
        $(".banner_div").eq(index).fadeIn().siblings().fadeOut();
        $(".banner_li").eq(index).css({background:"rgb(183,144,90)"}).siblings().css("background","");
    });
    $('.banner_right').click(function(){
        clearInterval(banner_t);
        move();
    });
    $('.banner_left,.banner_right').mouseup(function(){
        clearTimeout(banner_t1)
        banner_t1=setTimeout(function(){
            clearInterval(banner_t);
            banner_t=setInterval(move,2500);
        },1000);
    });
};//左右按钮点击事件over


function move(){// banner move fn
    index++;
    if(index>$(".banner_div").length){
        index=0;
    };
    $(".banner_div").eq(index).fadeIn().siblings().fadeOut();
    $(".banner_li").eq(index).css({background:"rgb(183,144,90)"}).siblings().css("background","");
};// banner move fn over
// ------------------------banner fn- over------------------------------

// ----------------------------------------------land
var land_t=null;
$(".hositry, .alert-box, .land_btn, .land_text").mouseover(function(){
    $(".alert-box").show();
});
$(".user_land").mouseleave(function(){
    $(".alert-box").hide();
});
// ----------------------------------------------land over
// --------------------------------------------nav
var leftjuli=0;
$(".nav_nav1 ul li").each(function(i,v){
    $(".nav_nav1 ul li").eq(i).css({
        left:leftjuli,
    });
    leftjuli+=105;
});










