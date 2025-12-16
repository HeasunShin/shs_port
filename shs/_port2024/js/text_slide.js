

// 헤더
let scroll_rec;
let scroll_top = 0;
let move_rec = 5; // 동작이 구현되는 위치
let move_height = $('header').outerHeight(); // 영향을 받는 요소

// 스크롤 시 스크롤 했다는 것을 알림
$(window).scroll(function(event){
    scroll_rec = true;
})

// 스크롤 상태를 재설정
setInterval(function(){
    if(scroll_rec){
        hasScrolled();
        scroll_rec = false;
    }
}, 250);

// 동작구현
function hasScrolled(){
    // 현재 스크롤 위치 저장
    let state = $(this).scrollTop();

    // 설정했던 구현되는 위치보다 더 스크롤 되었는지 확인
    if(Math.abs(scroll_top - state) <= move_rec){
        return;
    }

    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤 방향 확인
    if(state > scroll_top && state > move_height){
        // 스크롤다운
        $('header').removeClass('nav_down').addClass('nav_up');
    }else{
        // 스크롤업
        if(state + $(window).height() < $(document).height()){
            $('header').removeClass('nav_up').addClass('nav_down');
        }
    }

    // 현재 스크롤 위치 지정
    scroll_top = state;
}

// 메인 토픽
// 텍스트 슬라이드
let main_topic = document.querySelector(".main_topic")

// 스크롤 이벤트 설정
window.addEventListener('scroll', () => {
    // 스크롤의 높이 가져오기
    let value = window.scrollY
    // 콘솔에 찍어서 확인 가능
    // console.log("scrollY", value);

    if(value>300) {
        main_topic.style.animation = "disappear 1s ease-out forwards";
        // forwards : 제자리로 돌아오지 않게 함
    }else{
        main_topic.style.animation = "slide 1s ease-out";
    }

    if(value>600){
        // 순차적으로 커지는 동그라미
        let observer = new IntersectionObserver((e)=>{
            e.forEach((box)=>{
                if (box.isIntersecting){
                    box.target.style.opacity = 1;
                    box.target.style.scale = 1;
                }else{
                    // box.target.style.opacity = 0;
                    // box.target.style.scale = 0.5;
                }
            })
        })
        // let circle = document.querySelectorAll('.circle')
        // observer.observe(circle[0])
        // observer.observe(circle[1])
        // observer.observe(circle[2])
        // observer.observe(circle[3])
        // observer.observe(circle[4])
        // observer.observe(circle[5])
        // observer.observe(circle[6])
        // observer.observe(circle[7])
        // observer.observe(circle[8])
        // observer.observe(circle[9])
    }
    
    
});