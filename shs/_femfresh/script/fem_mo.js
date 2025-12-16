$(document).ready(function(){

        // 햄버거 영역

        $(window).resize(function(){
            let mh=$(".main_logo").height();
            $(".all_menu").css({
                width: "18vw",
                height: mh
            })
        })






        let click=0;
        $(".all_menu").click(function(){
            $(".bottom_menu_wrap").fadeToggle(1000);
            // $(".bottom_menu_wrap").css({
            //     position: "absolute",
            //     top: "15vw"
            // })
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

        // 서브메뉴 영역
        // $(".bottom_menu_box").hover(function(){
        //     $(this).css({
        //         background: "grey",
        //         color: "rgba(105, 105, 105, 0.5)"
        //     })
        // },function(){
        //     $(this).css({
        //         background: "none"
        //     })
        // })

        let bg_i=["url(./img/mo_1.png)","url(./img/mo_2.png)","url(./img/mo_3.png)","url(./img/mo_4.png)"]
        $(".bg_img_mo").each(function(index){
            $(this).attr('data-index',index);
            a=$(this).attr('data-index')
        }).css({
            backgroundImage:function(a){
                return bg_i[a]
            },
            backgroundSize: "100% 100%"
        })


        // 인사이드 영역
        $(".ing_con").click(function(){
            $(".ing_con_info_2").fadeOut(500);
            let a=$(this).index();
            $(".ing_con_info").fadeOut(500);
            $(".ing_con_info").eq(a).fadeIn(500);
            
        })

        $(".ing_con_2").click(function(){
            $(".ing_con_info").fadeOut(500);
            let b=$(this).index();
            $(".ing_con_info_2").fadeOut(500);
            $(".ing_con_info_2").eq(b).fadeIn(500);

        })




        // 리뷰영역
        let arr_click=0;
        $(".arrow_box").click(function(){
            arr_click++;
            if(arr_click>=1){
                $(".review_wrap").css({
                    height: "1150px"
                })
                $(".review_inbox").css({
                    height: "1150px"
                })
                // $(".reviewer").css({
                //     height: "1800px"
                // })
                arr_click=-1;
            }else if(arr_click>=0){
                $(".review_wrap").css({
                    height: "670px"
                })
                $(".review_inbox").css({
                    height: "515px"
                })
            }
        })

    










}) // 끝