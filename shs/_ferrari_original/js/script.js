$(document).ready(function(){
    // 변수지정
    let ww=$(window).width();
    let wh=$(window).height();
    let box_index=0;
    let before_time=new Date().getTime();
    let now_time=new Date().getTime();
    let direction='';
    let bg=["url(./img/bg_1.jpg)","url(./img/bg_2.jpg)","url(./img/bg_3.jpg)","url(./img/bg_4.jpg)","url(./img/bg_5.jpg)","url(./img/bg_6.jpg)","url(./img/bg_7.jpg)","url(./img/bg_8.jpg)"]
    
    // 텍스트박스 구동함수
    function text_box_wrap_move(){
        $(".title_box,.text_box").animate({
            left:-1000
        })
    }
    // 스크롤다운함수
    function wrap_scroll_dowm() {
        ww = $(window).width();
        $(".page_num_box").css({
            color:"black",
            fontWeight: 100
        })
        if(box_index<14){

            box_index++;
            direction='down';
        }
        text_box_wrap_move();
        if(box_index<=1){
            // box_index=1;
            $("#move_box").animate({
                left:-box_index*ww
            },1000,function(){
                $(".page_num_box").eq(box_index-1).css({
                    color:"red",
                    fontWeight: 900
                })
                $(".title_box").animate({
                    left: 50
                },500)
                $(".text_box").animate({
                    left: 50
                },1000);
                
            })
        }else{
            $(".page_num_box").eq(box_index/2).css({
                color:"red",
                fontWeight: 900
            })
            box_index+=1;
            if(box_index>15){
                box_index-=1;
            }
            
        }
        $("#move_box").animate({
            left:-box_index*ww
        },1000,function(){
            $(".title_box").animate({
                left: 50
            },500)
            $(".text_box").animate({
                left: 50
            },1000);
        })
        before_time=now_time;
        
    }
    // 스크롤업구동함수
    function wrap_scroll_up() {
        $(".page_num_box").css({
            color:"black",
            fontWeight: 100
        })
        ww = $(window).width();
        if(box_index>0){
            box_index-=2;
            direction='up';
        }else if(box_index<0){
            box_index=1;
        }
        text_box_wrap_move();
        $("#move_box").animate({
            left:-box_index*ww
        },1000,function(){
            $(".page_num_box").eq((box_index-1)/2).css({
                color:"red",
                fontWeight: 900
            })
            $(".title_box").animate({
                left: 50
            },500)
            $(".text_box").animate({
                left: 50
            },1000);
        })
        before_time=now_time;
    }
     // 모션구동
     $(window).on('mousewheel',function(event){
        event.preventDefault();
        $("#move_box").clearQueue();
        now_time=new Date().getTime();
        
        if(0>event.originalEvent.wheelDeltaY){
            if(direction=='down'){
                if(before_time+100<now_time){
                    if(box_index>=0){
                        wrap_scroll_dowm();
                        
                    }else{
                        wrap_scroll_up();
                    }
                }
                
            }else{
                if(box_index>=0){
                    wrap_scroll_dowm();
                }else{
                    wrap_scroll_up();
                }
            }
        }else {
            if (direction=='up'){
            if (before_time+100<now_time){
                if(box_index<=15){
                    wrap_scroll_up();
                }else{
                    wrap_scroll_dowm();
                }
                }

            }else{
                if(box_index<16){
                    wrap_scroll_up();
                }else{
                    wrap_scroll_dowm();
                }
            }
            
        }
    });
    // 페이지 이름 클릭 구동
    $(".page_num_box").click(function(){
        box_index=$(this).index();
        box_index=(box_index-1)+box_index;
        text_box_wrap_move();
        $("#move_box").animate({
            left:-box_index*ww
        },2000,function(){
            $(".title_box").animate({
                left: 50
            },1000)
            $(".text_box").animate({
                left: 50
            },1500);
        });
        $(".page_num_box").css({
            color:"black",
            fontWeight: 100
        })
        $(this).css({
            color:"red",
            fontWeight: 900
        });
    });
    // 로딩화면사이즈
    
    pc_resizing();
    $(window).on("resize",function(){
        pc_resizing();
    })
    // 리사이징
    function pc_resizing(){
        ww=$(window).width();
        wh=$(window).height();

        setTimeout(function(){
            $(".lode").fadeOut(500);
        },1000);        
        $("#pc_wrap").css({
            width:ww*17,
            height:wh
        })
        $(".lode").css({
            width:ww,
            height:'100vh'
        });
        
        // 각 페이지 크기값
        $('.travel_rome,.page').css({
            width:ww,
            height:wh
        });
       
        $('#move_box').css({
            width:ww*16,
            left:ww
        })
        // 각 섹션 배경
        
        $('.page').css({
            marginLeft:ww,
            background:function(index){
                return bg[index];
            },
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        });
    }
    
    
    
    // 홈버튼
    $(".home_but").hover(function(){
        $(".home_1_a").fadeOut(0);
        $(".home_a").fadeOut(0);
        $(".home_1_b").stop().fadeIn(1500);
        $(".home_b").stop().fadeIn(500);
    },function(){
        $(".home_1_b").fadeOut(0);
        $(".home_b").fadeOut(0);
        $(".home_1_a").stop().fadeIn(500);
        $(".home_a").stop().fadeIn(1000);
    })
    
    $('.home_but').click(function(){
        $('#move_box').animate({
            left:0
        },2000);
    });
   
    
});//end