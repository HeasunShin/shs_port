const items = document.querySelectorAll(".item");
const texts = document.querySelectorAll(".text");

// 첫 번째 아이템과 텍스트를 기본적으로 hover 상태로 보여줌
items[0].classList.add("hovered");
texts[0].classList.add("visible");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const index = item.dataset.index;

    items.forEach((i) => i.classList.remove("hovered"));
    texts.forEach((text) => text.classList.remove("visible"));

    item.classList.add("hovered"); // 현재 아이템을 hover 상태로
    texts[index].classList.add("visible"); // 해당 텍스트 보이기
  });

  item.addEventListener("mouseleave", () => {
    items.forEach((i) => i.classList.remove("hovered"));
    texts.forEach((text) => text.classList.remove("visible"));

    // 다시 첫 번째 아이템과 텍스트로 돌아가기
    items[0].classList.add("hovered");
    texts[0].classList.add("visible");
  });
});
