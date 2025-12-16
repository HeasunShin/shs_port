const toTopEl = document.querySelector('.top_btn'); // 먼저 html 파일에 to-top이라는 id로 생성해둔 버튼요소를 가져온다.
toTopEl.addEventListener('click', function(){ // 해당 버튼을 클릭했을 경우 동작시킬 함수를 작성한다.
	gsap.to(window, 0.7, {	// gsap의 사용방법
    	scrollTo: 0		// 이 옵션을 사용하기 위해 ScrollToPlugin을 추가한 것. 
    });
});