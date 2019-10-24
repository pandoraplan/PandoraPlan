//顾问团队左右滑动效果
function teamSwiper(){
    var leftBtn=false;
    //左移
    $(".turnLeft").click(function () {
        if(leftBtn){
            $(".index_content5_list ul").animate({marginLeft:"0"},1000);
            leftBtn=!leftBtn;
        }
    });
//右移
    $(".turnRight").click(function () {
        if(!leftBtn){
            $(".index_content5_list ul").animate({marginLeft:"-1200px"},1000);
            leftBtn=!leftBtn;
        }
    });
}
teamSwiper();
//手机端导航菜单显示隐藏
$('.navIcon').click(function () {
    if($('.nav').css('display') == 'none'){
        $('.navIcon').css("background","rgba(0,0,0,0)");
        $(".nav").show(200);
        $(".mask").show();
    }else {
        $(".nav").hide(200);
        $(".mask").hide();
        $('.navIcon').css("background","rgba(0,0,0,.2)");
    }
    });
//点击蒙版导航菜单隐藏
$(".mask").click(function () {
    $(".nav").hide(200);
    $(".mask").hide();
    $('.navIcon').css("background","rgba(0,0,0,.2)");
})

//资讯滚动
$(".Information .turnRight").click(function () {
    var distance =parseInt($(".Information_list").css('marginLeft'));
    var length=$(".Information_list li").length;
    if(length>4){
        if(distance === 0){
            $(".Information_list").animate({marginLeft:-260+'px'});
        }else {
            $(".Information_list").css({marginLeft:'-260px'});
            $(".Information_list").append($(".Information_list li:first-child"));
            $(".Information_list").animate({marginLeft:-520+'px'});
        }
    }


});
$(".Information .turnLeft").click(function () {
    var length=$(".Information_list li").length;
    var distance =parseInt($(".Information_list").css('marginLeft'));
    if(length>4){
        $(".Information_list").css({marginLeft:'-260px'});
        $(".Information_list").animate({marginLeft:'0px'});
        $(".Information_list").prepend($(".Information_list li:last-child"));
    }





});

