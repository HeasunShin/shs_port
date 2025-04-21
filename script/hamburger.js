document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".header__nav-list_mo");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active_ham"); // 햄버거 버튼 애니메이션 적용
    mobileNav.classList.toggle("active"); // 모바일 메뉴 보이기/숨기기
  });
});
