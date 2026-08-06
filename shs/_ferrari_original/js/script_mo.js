$(document).ready(function(){
    let bg=["#000000","url(./img/bg_1.jpg)","url(./img/bg_2.jpg)","url(./img/bg_3.jpg)","url(./img/bg_4.jpg)","url(./img/bg_5.jpg)","url(./img/bg_6.jpg)","url(./img/bg_7.jpg)","url(./img/bg_8.jpg)"]
    setTimeout(function(){
        $(".lode_mo").fadeOut(500);
    },1000);  
    $('.page_mo').css({
        background:function(index){
            return bg[index];
            
        },
        backgroundPosition: "98% 100%",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    })
    // 홈버튼
    $(".home_but_mo").hover(function(){
        $(".home_1_a_mo").fadeOut(0);
        $(".home_a_mo").fadeOut(0);
        $(".home_1_b_mo").stop().fadeIn(1500);
        $(".home_b_mo").stop().fadeIn(500);
    },function(){
        $(".home_1_b_mo").fadeOut(0);
        $(".home_b_mo").fadeOut(0);
        $(".home_1_a_mo").stop().fadeIn(500);
        $(".home_a_mo").stop().fadeIn(1000);
    })

    $('.home_but_mo').click(function(){
        $('html,body').animate({
            scrollTop:0
        },3000);
    });
    

});//end

