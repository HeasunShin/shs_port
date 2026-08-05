// // gsap.registerPlugin(ScrollTrigger);
// // document.addEventListener("DOMContentLoaded", (event) => {
// const showAnim = gsap
//   .from(".header", {
//     yPercent: -100,
//     paused: true,
//     duration: 0.2,
//   })
//   .progress(1);

// ScrollTrigger.create({
//   start: "top top",
//   end: "max",
//   // markers: true,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse();
//   },
// });
// //   });

// document.addEventListener("includeLoaded", initHeader);

// function initHeader() {
//   gsap.registerPlugin(ScrollTrigger);

//   const header = document.querySelector(".header");

//   if (!header) return;

//   const showAnim = gsap
//     .from(header, {
//       yPercent: -100,
//       paused: true,
//       duration: 0.2,
//     })
//     .progress(1);

//   ScrollTrigger.create({
//     start: "top top",
//     end: "max",
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse();
//     },
//   });

//   ScrollTrigger.refresh();
// }

// 모바일에서 메뉴 열릴때 스크롤 숨김 방지
document.addEventListener("includeLoaded", initHeader);

function initHeader() {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector(".header");

  if (!header) return;

  function headerScroll() {
    // 모바일은 항상 고정
    if (window.innerWidth <= 768) {
      gsap.set(header, {
        yPercent: 0,
      });

      return;
    }

    let lastScroll = 0;

    ScrollTrigger.create({
      start: "top top",
      end: "max",

      onUpdate: () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(header, {
            yPercent: -100,
            duration: 0.6,
            ease: "power2.out",
          });
        } else {
          gsap.to(header, {
            yPercent: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }

        lastScroll = currentScroll;
      },
    });
  }

  headerScroll();

  // 화면 회전 / 크기 변경 대응
  window.addEventListener("resize", () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.set(header, {
      yPercent: 0,
    });

    headerScroll();
  });

  ScrollTrigger.refresh();
}
