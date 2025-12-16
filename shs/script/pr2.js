$(document).ready(function(){
    // if(ww>1279){
    //     pr_pc();
    // }
    // function pr_pc(){}
         // 새로고침 영역 
    // window.onload=function(){
    //     setTimeout (function(){
    //         scrollTo(0,0);
    //     },100)
    // }
    // 휠마우스 영역
    let ww=$(window).width();
    let wh=$(window).height();
    let box_index=0;
    let before_time=new Date().getTime();
    let now_time=new Date().getTime();
    let direction='';

    function wrap_scroll_down(){
        ww = $(window).width();
        wh = $(window).height();
        // Q 계속  가로세로 크기를 설정해 줘야 하는가
        if(box_index<17){
            box_index += 1;
            direction = 'down'
        }
        $('#wrap').animate({
            top: -box_index*400
        },'slow');
        before_time = now_time;

        if (box_index >= 1 && box_index < 18){
            $(".moon_text,.scroll_down").fadeOut(500);
        }
        if (box_index >= 1 && box_index < 17){
            $(".moon").css({
                marginTop: -840,
                marginLeft: 420,
                transitionDuration: "3s",
                rotate: "0deg",
                scale: "calc(1)"
            })
        } else if (box_index >16 && box_index < 18){
            $(".moon").css({
                marginTop: -350,
                marginLeft: 20,
                transitionDuration: "1s"
            })
        }
        if (box_index==3){
            $(".info_out_box_wrap").css({
                opacity: 0
            })
        } else{
            $(".info_out_box_wrap").css({
                opacity: 1
            })
        }
        if (box_index > 3 && box_index < 10){
           $(".info_out_box_wrap,.chart1").css({
                position: "fixed"
           })
           $(".content").css({
                position: "fixed"
           })
           $(".info_svg text").fadeIn();
           $(".info_svg text").addClass("text_on");
           $(".info_sub_svg:nth-child(2) text").fadeIn();
           $(".info_sub_svg:nth-child(2) text").addClass("sub_text_on");
        } else {
            $(".info_out_box_wrap,.chart1").css({
                position: "absolute"
            }) 
            $(".content").css({
                position: "absolute"
           })
            // $("svg text").fadeOut();
            // $("svg text").removeClass("text_on");
        }
        if (box_index ==4){
            $(".info_out_box_wrap").css({
                rotate: "70deg",
                transitionDuration: "1s"
           })
           
        }
        if (box_index ==5){
            $(".info_out_box_wrap").css({
                rotate: "138deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(2) text").fadeOut();
           $(".info_sub_svg:nth-child(3) text").fadeIn();
           $(".info_sub_svg:nth-child(3) text").addClass("sub_text_on");
        }
        if (box_index ==6){
            $(".info_out_box_wrap").css({
                rotate: "205deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(2) text").fadeOut();
           $(".info_sub_svg:nth-child(3) text").fadeOut();
           $(".info_sub_svg:nth-child(4) text").fadeIn();
           $(".info_sub_svg:nth-child(4) text").addClass("sub_text_on");
        }
        if (box_index ==7){
            $(".info_out_box_wrap").css({
                rotate: "275deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(2) text").fadeOut();
           $(".info_sub_svg:nth-child(4) text").fadeOut();
           $(".info_sub_svg:nth-child(5) text").fadeIn();
           $(".info_sub_svg:nth-child(5) text").addClass("sub_text_on");
        }
        if (box_index ==8){
            $(".info_out_box_wrap").css({
                rotate: "350deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(2) text").fadeOut();
           $(".info_sub_svg:nth-child(5) text").fadeOut();
           $(".info_sub_svg:nth-child(6) text").fadeIn();
           $(".info_sub_svg:nth-child(6) text").addClass("sub_text_on");
        }
        if (box_index ==9){
            $(".info_out_box_wrap").css({
                rotate: "430deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(2) text").fadeOut();
           $(".info_sub_svg:nth-child(6) text").fadeOut();
           $(".info_sub_svg:nth-child(7) text").fadeIn();
           $(".info_sub_svg:nth-child(7) text").addClass("sub_text_on");
        }
        if (box_index ==9){
            $(".box_down").fadeIn(3000);
        }
        if (box_index ==10){
            $(".box_down").addClass("moon_down");

            // 섹션_소개 / 개인포폴 영역 --- 개인포폴
            $(".port_svg text").fadeIn();
            $(".per_pro").css({
                opacity: 1
            })
            $(".per_port_box").css({
                display: "block"
            });
            $(".port_svg text").addClass("port_svg_text_on");

            auto();

        }
        if (box_index >=12 && box_index < 15){
            $(".team_menu").addClass("team_menu_space");
        }

        if (box_index ==15){
            $(".center_box>img").css({
                opacity: 1,
                transitionDuration: "3s"
            })
        }else{
            $(".center_box>img").css({
                opacity: 0,
                transitionDuration: "3s"
            })
        }

        if (box_index ==17){
            $(".hill").css({
                bottom: 0,
                transitionDuration: "2s"
            })
        }
    } // 스크롤다운 end

    function wrap_scroll_up() {
       ww = $(window).width();
       wh = $(window).height();

        if (box_index > 0) {
            box_index -= 1;
            direction = 'up';
        }
        $('#wrap').animate({
            top:-box_index*400
        }, 'slow');
        before_time = now_time;

        if (box_index == 0){
            $(".moon_text,.scroll_down").fadeIn(500);
            $(".moon").css({
                marginTop: -300,
                marginLeft: -315,
                rotate: "-15deg",
                scale: "calc(1.3)",
                transitionDuration: "3s"
            })
        }
        if (box_index >= 1 && box_index < 17){
            $(".moon_text,.scroll_down").fadeOut(500);
            $(".moon").css({
                marginTop: -840,
                marginLeft: 420,
                transitionDuration: "3s",
                rotate: "0deg",
                scale: "calc(1)"
            })
        } else if (box_index >17 && box_index < 19){
            $(".moon_text,.scroll_down").fadeIn(500);
            $(".moon").css({
                marginTop: -350,
                marginLeft: 20,
                transitionDuration: "1s"
            })
        }
        if (box_index==3){
            $(".info_out_box_wrap").css({
                opacity: 0
            })
        } else{
            $(".info_out_box_wrap").css({
                opacity: 1
            })
        }
        if (box_index > 3 && box_index < 9){
            $(".info_out_box_wrap,.chart1").css({
                 position: "fixed"
            }) 
            $(".content").css({
                position: "fixed"
           })
           $(".info_svg text").fadeIn();
           $(".info_svg text").addClass("text_on");
 
         } else {
             $(".info_out_box_wrap,.chart1").css({
                 position: "absolute"
            }) 
            $(".content").css({
                position: "absolute"
           })
         }
         if (box_index ==4){
            $(".info_out_box_wrap").css({
                rotate: "70deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(3) text").fadeOut();
           $(".info_sub_svg:nth-child(2) text").fadeIn();
           $(".info_sub_svg:nth-child(2) text").addClass("sub_text_on");
        }
        if (box_index ==5){
            $(".info_out_box_wrap").css({
                rotate: "140deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(4) text").fadeOut();
           $(".info_sub_svg:nth-child(3) text").fadeIn();
           $(".info_sub_svg:nth-child(3) text").addClass("sub_text_on");
        }
        if (box_index ==6){
            $(".info_out_box_wrap").css({
                rotate: "210deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(5) text").fadeOut();
           $(".info_sub_svg:nth-child(4) text").fadeIn();
           $(".info_sub_svg:nth-child(4) text").addClass("sub_text_on");
        }
        if (box_index ==7){
            $(".info_out_box_wrap").css({
                rotate: "280deg",
                transitionDuration: "1s"
           })
           $(".info_sub_svg:nth-child(6) text").fadeOut();
           $(".info_sub_svg:nth-child(5) text").fadeIn();
           $(".info_sub_svg:nth-child(5) text").addClass("sub_text_on");
        }
        if (box_index ==8){
            $(".info_out_box_wrap").css({
                rotate: "350deg",
                transitionDuration: "1s"
            })
            $(".information>.in_box").css({
                display: "block"
        })
        $(".info_sub_svg:nth-child(5) text").fadeOut();
        $(".info_sub_svg:nth-child(6) text").fadeIn();
        $(".info_sub_svg:nth-child(6) text").addClass("sub_text_on");
        }
        if (box_index ==9){
            $(".box_down").fadeIn(3000);
            $(".information>.in_box").css({
                display: "none"
            })
        }
        if (box_index ==10){
            $(".box_down").addClass("moon_down");
            $(".port_svg text").fadeIn();
            $(".per_port_box").css({
                display: "block"
            });
            function auto(){
                port_set=setInterval(function(){
                    $(".per_port_move_box").animate({
                        left: -550
                    },3000,function(){
                        $(".port").first().appendTo(".per_port_move_box");
                        $(".per_port_move_box").css({
                            left: 0
                        })
                    })
                },3000)
            }

        }
        if (box_index >=10 && box_index < 17){
            $(".team_menu").addClass("team_menu_space");
        }
        if (box_index >=13 && box_index < 17){
            $(".team_menu").addClass("team_menu_space");
        }
        if (box_index ==15){
            $(".center_box>img").css({
                opacity: 1,
                transitionDuration: "3s"
            })
        }else{
            $(".center_box>img").css({
                opacity: 0,
                transitionDuration: "3s"
            })
        }
        if (box_index ==17){
            $(".hill").css({
                bottom: 0,
                transitionDuration: "2s"
            })
        }

       
       
    }

    




   //  마우스휠10인부분 100으로 고치기
    $(window).on('mousewheel', function (event) {
        // $("h2").text(box_index)
        event.preventDefault();
        $('#wrap').clearQueue();
        now_time = new Date().getTime();
        if (0 > event.originalEvent.wheelDeltaY) {
            if (direction == 'down') {
                if (before_time + 300 < now_time) {
                    if (box_index >= 0) {
                        wrap_scroll_down();
                    } else {
                        wrap_scroll_up();
                    }
                }
            } else {
                if (box_index >= 0) {
                    wrap_scroll_down();
                } else {
                    wrap_scroll_up();
                }
            }
        } else {
            if (direction == 'up') {
                if (before_time + 300 < now_time) {
                    if (box_index <= 17) {
                        wrap_scroll_up();
                    } else {
                        wrap_scroll_down();
                    }
                }
            } else {
                if (box_index < 18) {
                    wrap_scroll_up();
                } else {
                    wrap_scroll_down();
                }
            }
        }
       if(box_index>0){
           $(".bottom_menu_wrap").css({
               position: "fixed",
               top: 25,
               left: 0
           })
       }
    })


    // 메인메뉴 스크롤 영역
    // let body_wh=box_index*20
    // $("body").css({
    //     width: "100%",
    //     height: body_wh,
    //     background: "greenyellow",
    //     zIndex: -999
    // })
    
    // $(".scroll").click(function(event){
    //     console.log(".scroll");
    //     event.preventDefault();
    //     $("html,body").animate({scrollTop:$(this.hash).offset().top},500);
    // })
    // $(".scroll").click(function(){
    //     $("#wrap").animate({
    //         top: -box_index*7
    //     })
    // })

    // 햄버거 메뉴 영역
    let click=0;
    $(".ham").click(function(){
        $(".ham_menu_wrap").fadeToggle(1000);
        click++;
        if(click>=1){
            $(".ham>img").attr({
                src:"./images/ham_close.png"
            })
            click=-1;
        }else if(click>=0){
            $(".ham>img").attr({
                src:"./images/ham_w.png"
            })
        }

    })

    // 메인 영역
    // $(document).ready(function() {
    //     $(".line-2").arctext({radius: 700});
    //   });

    // 메인 메뉴 영역
    $(".main_menu_1").click(function(){
        box_index=5;
        $("#wrap").animate({
            top: -box_index*400
        },"slow");
        box_index=3;
    })
    $(".main_menu_2").click(function(){
        box_index=10;
        $("#wrap").animate({
            top: -box_index*400
        },"slow");
        // box_index=9;
        $(".port_svg text").fadeIn();
        $(".per_pro").css({
            opacity: 1
        })
        $(".per_port_box").css({
            display: "block"
        });
        $(".port_svg text").addClass("port_svg_text_on");
        $(".box_down").css({
            opacity: 0,
        })
    })
    // 팀프로젝트 메뉴 클릭
    $(".main_menu_3").click(function(){
        box_index=14;
        $("#wrap").animate({
            top: -box_index*400
        },"slow");
        $(".team_menu").addClass("team_menu_space");
        $(".per_pro").css({
            opacity: 1
        })
    })
    // 콘텍트 메뉴 클릭
    $(".main_menu_4").click(function(){
        box_index=17;
        $("#wrap").animate({
            top: -box_index*400
        },"slow");
        $(".moon").css({
            marginTop: -350,
            marginLeft: 20,
            transitionDuration: "1s"
        })
        $(".hill").css({
            bottom: 0,
            transitionDuration: "2s"
        })
        $(".per_pro").css({
            opacity: 1
        })
    })

    // 섹션_개인리뉴얼 영역
    // $(".port",this).hover(function(){
    //     $(".per_1").removeClass("per_1_on");
    //     $(".per_1",this).addClass("per_1_on");
    //     $(".per_port_move_box,.port").stop(3000);
    // },function(){
    //     $(".per_1").removeClass("per_1_on")
    // })
    $(".per_port_move_box").hover(function(){
        clearInterval(port_set)
    },function(){
        // setInterval(port_set)
        auto();
    })
    $(".port").hover(function(){
        $(".per_port_text",this).css({
            opacity: 0.9,
            transitionDuration: "1s"
        })
        $(this).css({
            border: "5px solid greenyellow",
            transitionDuration: "1s"
        })
    },function(){
        $(".per_port_text").css({
            opacity: 0,
            transitionDuration: "1s"
        })
        $(".port").css({
            border: "#000000 solid 5px",
            transitionDuration: "1s"
        })
    })

    // 섹션_팀프로젝트 영역
    $(".team_menu").click(function(){
        let team=$(this).index();
        $(".team_con").fadeOut(500);
        $(".team_con").eq(team).fadeIn(500);
    })
    $(".team_menu").click(function(){
        let team_txt=$(this).index();
        $(".team_text").fadeOut(500);
        $(".team_text").eq(team_txt).fadeIn(500);
    })

    // $(".team_menu:nth-child(1)").click(function(){
    //     $(".team_menu").css({
    //         border:" #ffffff solid 3px",
    //         color: "rgb(255, 255, 255)"
    //     })
    //     $(this).addClass("team_menu_on_1");
    // });


    $(".team_menu").click(function(){
        let team_m = $(this).index();
        $(".team_menu").removeClass("team_menu_on",200);
        $(this).addClass("team_menu_on",200);
    })

    // 섹션_기획 영역
    // $(".pr_box:nth-child(1)").hover(function(){
    //     $(".center_box img").attr({
    //         src:"images/moon_b.png"
    //     })
    // },function(){
    //     $(".center_box img").attr({
    //         src:"./images/moon_3.png"
    //     })
    // })
    // $(".pr_box:nth-child(2)").hover(function(){
    //     $(".center_box img").attr({
    //         src:"images/moon_p.png"
    //     })
    // },function(){
    //     $(".center_box img").attr({
    //         src:"./images/moon_3.png"
    //     })
    // })
    // $(".pr_box:nth-child(3)").hover(function(){
    //     $(".center_box img").attr({
    //         src:"images/moon_y.png"
    //     })
    // },function(){
    //     $(".center_box img").attr({
    //         src:"./images/moon_3.png"
    //     })
    // })
    // $(".pr_box:nth-child(4)").hover(function(){
    //     $(".center_box img").attr({
    //         src:"images/moon_r.png"
    //     })
    // },function(){
    //     $(".center_box img").attr({
    //         src:"./images/moon_3.png"
    //     })
    // })

    // 섹션_2 영역
    // let info_bg=["linear-gradient(90deg, rgba(248,190,103,1) 0%, rgba(238,98,144,1) 100%)",
    // "linear-gradient(90deg, rgba(75,190,103,1) 0%, rgba(238,198,144,1) 100%)",
    // "linear-gradient(90deg, rgba(248,190,213,1) 0%, rgba(58,98,144,1) 100%)",
    // "linear-gradient(90deg, rgba(248,208,103,1) 0%, rgba(238,98,222,1) 100%)",
    // "linear-gradient(90deg, rgba(66,190,103,1) 0%, rgba(238,111,144,1) 100%)"]
    // let info_bg=["rgba(38, 255, 255, 0.8)",
    // "rgba(255, 38, 255, 0.8)",
    // "rgba(255, 255, 38, 0.8)",
    // "rgba(38, 255, 255, 0.8)",
    // "rgba(255, 35, 255, 0.8)"]
    // $(".info_out_box").css({
    //     background:function(index){
    //         return info_bg[index]
    //     }
    // });


    // 모바일 영역
    // 메뉴 색 변경 
    // $(".main_menu_mo>a").click(function(){
    //     $(this).css({
    //         color: "greenyellow"
    //     })
    // })

    // ww=$(window).width();

    function auto(){
        port_set=setInterval(function(){
            $(".per_port_move_box").animate({
                left: -550
            },3000,function(){
                $(".port").first().appendTo(".per_port_move_box");
                $(".per_port_move_box").css({
                    left: 0
                })
            })
        },3000)
    }












}) // 끝