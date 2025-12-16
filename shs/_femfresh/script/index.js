
$(document).ready(function(){
     // 휠 연습
     let ww=$(window).width();
     let wh=$(window).height();
     let box_index=0;
     let before_time=new Date().getTime();
     let now_time=new Date().getTime();
     let direction='';

        // $(window).resize(function(){
        //     ww=$(window).width();
        //     wh=$(window).height();
        //     video.css({
        //         width: ww,
        //         marginTop: -100,
        //         position: "fixed",
        //         top:0,
        //         left: 0,
        //         zIndex: -99
        //     })
            
        // })

        function wrap_scroll_down(){
            ww = $(window).width();
            wh = $(window).height();
            // Q 계속  가로세로 크기를 설정해 줘야 하는가
            if(box_index<34){
                box_index += 1;
                direction = 'down'
            }
            $('#wrap').animate({
                top: -box_index*300
            },'slow');
            before_time = now_time;
   
            if (box_index > 4 && box_index < 7){
               $(".intro_text_wrap").css({
                   position: "fixed",
                   top: 130
               }) 
   
            } else {
               $(".intro_text_wrap").css({
                   position: "absolute",
               }) 
            }
            if (box_index==6){
               $(".best_main_text").css({
                   display: "none"
               })
            } else {
               $(".best_main_text").css({
                   display: "block"
               })
            }
            if (box_index>=7){
               $(".intro").css({
                   marginTop: 600,
               })
               $(".intro_img_wrap").css({
                   top: 200,
               })
   
            }
            if (box_index > 10 && box_index < 18){
                $(".best_main_text").css({
                    position:"fixed",
                    top:100,
                    right:0,
                    zIndex: 9
                })
                $(".best_none_img_wrap").css({
                    position:"fixed",
                    top:300,
                    left:0
                })
                $(".best_img_wrap").css({
                    position:"absolute",
                    top:200,
                    right:0,
                    zIndex: 0,
                })
            } else {
                $(".best_main_text").css({
                    position: "relative"
                })
                $(".best_none_img_wrap").css({
                    position: "relative"
                })
            }
            if (box_index > 20 && box_index < 23){
               $(".inside_main_text").css({
                   position: "fixed",
                   top: 80
               })
            } else {
               $(".inside_main_text").css({
                   position: "absolute",
               })
            }
        }
    
        function wrap_scroll_up() {
           ww = $(window).width();
           wh = $(window).height();
   
            if (box_index > 0) {
                box_index -= 1;
                direction = 'up';
            }
            $('#wrap').animate({
                top:-box_index*300
            }, 'slow');
            before_time = now_time;
   
            if (box_index > 5 && box_index < 8){
               $(".intro_text_wrap").css({
                   position: "fixed",
                   top: 130
               }) 
            } else {
               $(".intro_text_wrap").css({
                   position: "absolute",
               }) 
            }
            if (box_index>=7){
               $(".intro").css({
                   marginTop: 600
               })
               $(".intro_img_wrap").css({
                   top: 200
               })
            }
    
            if (box_index > 10 && box_index < 18){
                $(".best_main_text").css({
                    position:"fixed",
                    top:0,
                    right:0,
                    zIndex: 9
                })
                $(".best_none_img_wrap").css({
                    position:"fixed",
                    top:300,
                    left:60
                })
                $(".best_img_wrap").css({
                    position:"absolute",
                    top:200,
                    right:0,
                    zIndex: 0
                })
            } else {
                $(".best_main_text").css({
                    position: "absolute"
                })
                $(".best_none_img_wrap").css({
                    position: "relative"
                })
            }
            if (box_index > 19 && box_index < 23){
               $(".inside_main_text").css({
                   position: "fixed",
                   top: 80
               })
            } else {
               $(".inside_main_text").css({
                   position: "absolute",
               })
            }
   
        }
    
   
   
   
       //  마우스휠10인부분 100으로 고치기
        $(window).on('mousewheel', function (event) {
            event.preventDefault();
            $('#wrap').clearQueue();
            now_time = new Date().getTime();
            if (0 > event.originalEvent.wheelDeltaY) {
                if (direction == 'down') {
                    if (before_time + 100 < now_time) {
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
                    if (before_time + 100 < now_time) {
                        if (box_index <= 34) {
                            wrap_scroll_up();
                        } else {
                            wrap_scroll_down();
                        }
                    }
                } else {
                    if (box_index < 35) {
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
   
       // 햄버거 영역
       let click=0;
       $(".category").click(function(){
           $(".bottom_menu_wrap").fadeToggle(1000);
           click++;
           if(click>=1){
               $(".ham>img").attr({
                   src:"./img/ham_close.png"
               })
               click=-1;
           }else if(click>=0){
               $(".ham>img").attr({
                   src:"./img/ham_w.png"
               })
           }
   
       })
   
       // 메인메뉴 영역
       $(".top_menu").hover(function(){
           $(this).css({
               textShadow: "3px 3px 2px black"
           })
       },function(){
           $(this).css({
               color: "white",
               textShadow: "none"
           })
       });
   
   
       // 서브메뉴 영역
       $(".bottom_menu_box").hover(function(){
           $(this).css({
               background: "grey"
           })
       },function(){
           $(this).css({
               background: "none"
           })
       })
   
       let bg_i=["url(./img/sub_1.jpg)","url(./img/sub_2.png)","url(./img/sub_3.png)","url(./img/sub_4.png)"]
       $(".bg_img").each(function(index){
           $(this).attr('data-index',index);
           a=$(this).attr('data-index')
       }).css({
           backgroundImage:function(a){
               return bg_i[a]
           },
           backgroundSize: "100% 100%"
       })
   
   
   
   
       // $(".menu_wrap").hover(function(){
       //     $(".bottom_menu_wrap").fadeIn(1000);
       // },function(){
       //     $(".bottom_menu_wrap").fadeOut(1000);
       // })
   
       // 베스트제품 영역
       // $(".best_img_box_2").css({
       //     display: "none"
       // })
       $(".best_img_box").hover(function(){
           $(this).stop().fadeOut(500)
       },function(){
           $(this).stop().fadeIn(500)
       })
   
   
   
   
       //인사이드 영역
   
       $(".in_img").hover(function(){
           $("img",this).stop().animate({
               width: 150,
               height: 150
           },500)
           $(".in_txt_1").fadeOut();
           $(".in_txt_1",this).stop().fadeIn(300);
       },function(){
           $(".in_txt_1",this).stop().fadeOut(300);
           $("img",this).stop().animate({
               width: 100,
               height: 100
           },500)
       });
   
   
     
   
   
       // 리뷰영역
   
       $("#left_but").click(function(){
           $(".review_imgbox").last().prependTo(".review_movebox");
           $(".review_movebox").css({
               left:-370
           },500).animate({
               left: 0
           },500)
       })
   
       $("#right_but").click(function(){
           $(".review_movebox").animate({
               left:-370
               },500,function(){
                   $(".review_imgbox").first().appendTo(".review_movebox");
                   $(".review_movebox").css({
                       left: 0
                   },500);
           });
       })
   
       $(".review_imgbox").hover(function(){
           $(".review_inbox").fadeOut(500)
           $(".review_inbox",this).stop().fadeIn(500)
       },function(){
           $(".review_inbox",this).stop().fadeOut(500)
       })
   
       $(".review_but").hover(function(){
           $(this).stop().animate({
               width: 65,
               height: 65
           },500)
       },function(){
           $(this).stop().animate({
               width: 50,
               height: 50
           })
       });
   
   
   
       // let click_num=0;
       // $("#right_but").click(function(){
       //     click_num++;
       //     if(click_num>9){
       //         click_num=0;
       //     }
       //     $(".review_movebox").animate({
       //         left: -click_num*370
       //     },500)
       // });
       // $("#left_but").click(function(){
       //     click_num--;
       //     if(click_num<0){
       //         click_num=9;
       //     }
       //     $(".review_movebox").animate({
       //         left:-370*click_num
       //     },500)
       // });
   
   
       //탑버튼
       $(".top_but").click(function(){
           box_index=0;
           $("#wrap").animate({
               top:0
           },'slow');
           
       });
   
    //    $(".bottom_but").css({
    //        width: 50,
    //        height: 50,
    //        position: "fixed",
    //        bottom: 100,
    //        right: 0
    //    })
   
       $(".bottom_but").click(function(){
           box_index=33;
           $("#wrap").animate({
               bottom:0
           },'slow');
           
       });
   
   
       
   
      
   
       // 서브메뉴 영역
       // let bg_r=["url(./img/about_icon1.png)","url(./img/about_icon2.png)","url(./img/about_icon3.png)","url(./img/about_icon4.png)","url(./img/about_icon9.png)","url(./img/about_icon6.png)","url(./img/about_icon7.png)"]
       // $(".rd_img").css({
       //     background:function(index){
       //         return bg_r[index];
       //     },
       //     backgroundSize: "50% 50%",
       //     backgroundRepeat: "no-repeat"
       // }








}) // 끝
