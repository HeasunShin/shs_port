// const observeItems = document.querySelectorAll(".observe-item");
// const observer = new IntersectionObserver(
//   (observeItems) => {
//     observeItems.forEach((observeItem) => {
//       if (observeItem.isIntersecting) {
//         observeItem.target.classList.add("visible");
//       } else {
//         observeItem.target.classList.remove("visible");
//       }
//     });
//   },
//   { threshold: 0.5 }
//   // 요소가 절반이 보인 후에 기능을 실행하겠다는 의미
// );
// observeItems.forEach((observeItem) => observer.observe(observeItem));

const observeItems = document.querySelectorAll(".observe-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.5, // 요소가 50% 이상 보이면 콜백 실행
  }
);

observeItems.forEach((item) => observer.observe(item));
