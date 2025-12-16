$(document).ready(function(){
    // $(".all_menu").click(function(){
    //     $(".sub_menu_wrap").removeClass("all_on");
    //     $(".sub_menu_wrap").addClass("all_on");
    // })

    let click=0;
    $(".all_menu").click(function(){
        // $(".sub_menu_wrap").removeClass("all_on");
        // $(".sub_menu_wrap").addClass("all_on");
        click++;
        if(click>=1){
            $(".sub_menu_wrap").addClass("all_on");
            $(".all_menu>img").attr({
                src:"./images/ham_c.png"
            })
            click=-1;
        }else if(click>=0){
            $(".sub_menu_wrap").removeClass("all_on");
            $(".all_menu>img").attr({
                src:"./images/ham_o.png"
            })
        }

    })


    // let menu=$(".sub_menu_box").index();
    // $(".sub_menu_box").click(function(){

    //     $(".sub_menu_inwrap").eq(menu).css({
    //         height: 200
    //     })
    // })

    $("").click(function(){

    })

    let click_menu=0;
    $(".sub_menu_box").click(function(){
        // $(".sub_menu_wrap").removeClass("all_on");
        // $(".sub_menu_wrap").addClass("all_on");

        click_menu++;
        if(click_menu>=1){
            $(".sub_menu_inwrap").css({
                height: 0,
                transitionDuration: "1s"
            })
            $(".sub_menu_inwrap",this).css({
                height: 200,
                transitionDuration: "1s"
            })

            click_menu=-1;
        }else if(click_menu>=0){
            $(".sub_menu_inwrap",this).css({
                height: 0,
                transitionDuration: "1s"
            })
        }

        

    })





})