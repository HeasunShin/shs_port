// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const mobileNav = document.querySelector(".header__nav-list_mo");
//   const navLinks = document.querySelectorAll(".header__nav-list_mo a");

//   hamburger.addEventListener("click", function () {
//     this.classList.toggle("active_ham"); // 햄버거 버튼 애니메이션 적용
//     mobileNav.classList.toggle("active"); // 모바일 메뉴 보이기/숨기기
//   });

//   // a 링크 이동 시 햄버거 메뉴 자연스럽게 닫히기
//   navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       hamburger.classList.remove("active_ham"); // 햄버거 버튼 상태 초기화
//       mobileNav.classList.remove("active"); // 메뉴 닫기
//     });
//   });
// });

// function initHamburger() {
//   const hamburger = document.querySelector(".hamburger");
//   const mobileNav = document.querySelector(".header__nav-list_mo");

//   if (!hamburger || !mobileNav) return;

//   const navLinks = document.querySelectorAll(".header__nav-list_mo a");

//   hamburger.addEventListener("click", function () {
//     this.classList.toggle("active_ham");
//     mobileNav.classList.toggle("active");
//   });

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       hamburger.classList.remove("active_ham");
//       mobileNav.classList.remove("active");
//     });
//   });
// }

// document.addEventListener("includeLoaded", initHamburger);

// 모바일에서 메뉴 열릴때 스크롤 숨김 방지
document.addEventListener("includeLoaded", initHamburger);

function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".header__nav-list_mo");
  const navLinks = document.querySelectorAll(".header__nav-list_mo a");

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active_ham");
    mobileNav.classList.toggle("active");

    document.body.classList.toggle("menu-open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active_ham");
      mobileNav.classList.remove("active");

      document.body.classList.remove("menu-open");
    });
  });
}
