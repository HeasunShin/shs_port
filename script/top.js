document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollToPlugin); // 플러그인 등록

  const topBtn = document.querySelector("#top-button");

  if (topBtn) {
    topBtn.addEventListener("click", function () {
      gsap.to(window, { duration: 0.7, scrollTo: 0 });
    });
  } else {
    console.error("#top-button 요소를 찾을 수 없습니다.");
  }
});
