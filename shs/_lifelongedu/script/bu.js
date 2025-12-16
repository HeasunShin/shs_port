$(document).ready(function(){

    // 돋보기 영역
    let click=0;
    $(".serch_wrap").click(function(){
        $(".q_wrap").fadeToggle(500);
        // click++;
        // if(click>=1){
        //     $(".ham>img").attr({
        //         src:"./images/ham_close.png"
        //     })
        //     click=-1;
        // }else if(click>=0){
        //     $(".ham>img").attr({
        //         src:"./images/ham_w.png"
        //     })
        // }

    })

    // 전체메뉴 영역
    $(".ham_menu_wrap").click(function(){
        $(".all_menu").css({
            display: "block"
        })
    })
    $(".close_but").click(function(){
        $(".all_menu").css({
            display: "none"
        })
    })

    // // 배너 영역 리사이즈(MY)
    // let ban_w=$(".banner").width();

    // $(window).resize(function(){
    //     ban_w=$(".banner").width();

    //     $(".ban_move_box").css({
    //         width: (ban_w*3)+60
    //     })
    //     $(".ban").css({
    //         width: ban_w
    //     })
    
    //     setInterval(function(){
    //         $(".ban_move_box").animate({
    //             left: -(ban_w+20),
    //         },3000,function(){
    //             $(".ban").first().appendTo(".ban_move_box");
    //             $(".ban_move_box").css({
    //                 left: 0,
    //             },3000)
    //         })
    //     })

    // })

    // 배너 영역 리사이즈(T)
    let ban_w=$(".banner").width();
    $(window).resize(function(){
        banner_ani();
    })

    function banner_ani(){
        ban_w=$(".banner").width();
        $(".ban_move_box").css({
            width: (ban_w*3)+60
        })
        $(".ban").css({
            width: ban_w
        })
    }

    banner_ani();
    

    // 배너 영역
    // $(".ban_move_box").css({
    //     width: (ban_w*3)+60
    // })
    // $(".ban").css({
    //     width: ban_w
    // })

    setInterval(function(){
        $(".ban_move_box").animate({
            left: -(ban_w+20),
        },1000,function(){
            $(".ban").first().appendTo(".ban_move_box");
            $(".ban_move_box").css({
                left: 0,
            })
        })
    },3000)

    // 새소식 영역
    $(".l_arrow").click(function(){
        alert();
        $(".swiper-slide").last().prependTo(".swiper_wrapper");
        $(".swiper_wrapper").css({
            left:-352
        },500).animate({
            left: 0
        },500)
    })

    $(".r_arrow").click(function(){
        $(".swiper_wrapper").animate({
            left:-370
            },500,function(){
                $(".swiper-slide").first().appendTo(".swiper_wrapper");
                $(".swiper_wrapper").css({
                    left: 0
                },500);
        });
    })

    // => 길이값만 리사이즈에 넣어준다고 생각하면 되고 이벤트는 넣지 않는다
    // setInterval은 function에 시간값을 꼭 넣어줘야 한다.

    // 새소식 영역
    // $("body").css({
    //     width: 2000
    // })
    $(".p").css({
        width: 50,
        height: 50,
        fontSize: 20,
        background: "red",
        zIndex: 99,
        float: "left"
    })

    $(window).scroll(function(){
        let st=$(this).scrollLeft();
        $(".p").text(st);
    })

    let s_in=$(".s_info").scrollLeft();
    let s_co=$(".s_con").scrollLeft();
    let s_ev=$(".s_con").scrollLeft();
    if(s_in==0){
        // $(".news_but").removeClass("news_but_on");
        $(".news_but").removeClass("news_but_on")
        $(".news_but_1").addClass("news_but_on");
    } else{
        $(".news_but").removeClass("news_but_on")
    }
    if(s_co==0){
        // $(".news_but").removeClass("news_but_on");
        $(".news_but").removeClass("news_but_on")
        $(".news_but_2").addClass("news_but_on");
    }else{
        $(".news_but").removeClass("news_but_on")
    }
    if(s_ev==0){
        // $(".news_but").removeClass("news_but_on");
        $(".news_but").removeClass("news_but_on")
        $(".news_but_3").addClass("news_but_on");
    }else{
        $(".news_but").removeClass("news_but_on")
    }




    // 팝업
    $(".pop_up button").click(function(){
        $(".pop_up").css({
            display: "none"
        })
    })




})