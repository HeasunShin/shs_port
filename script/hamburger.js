document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".header__nav-list_mo");
  const navLinks = document.querySelectorAll(".header__nav-list_mo a");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active_ham"); // 햄버거 버튼 애니메이션 적용
    mobileNav.classList.toggle("active"); // 모바일 메뉴 보이기/숨기기
  });

  // a 링크 이동 시 햄버거 메뉴 자연스럽게 닫히기
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active_ham"); // 햄버거 버튼 상태 초기화
      mobileNav.classList.remove("active"); // 메뉴 닫기
    });
  });
});
