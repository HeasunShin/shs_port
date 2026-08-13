$(document).ready(function () {
  // 배너 영역
  let num = 0;
  const $banner = $(".ban_con");

  // 처음에는 첫 번째 배너만 표시
  $banner.hide().eq(0).show();

  // 배너 전환
  setInterval(function () {
    const next = (num + 1) % $banner.length;

    // 현재 배너 숨기기
    $banner.eq(num).fadeOut(1000);

    // 다음 배너 표시
    $banner.eq(next).fadeIn(1000);

    num = next;
  }, 4000);

  // PICK 버튼
  $(".swiper-slide button").on("click", function () {
    const $button = $(this);
    const pickId = $button.data("pick");
    const name = $button.data("name");

    // 이미 선택된 카드라면 선택 해제
    if ($button.hasClass("picked")) {
      $button.removeClass("picked");
      $("#" + pickId).empty();
      return;
    }

    // 같은 카테고리의 기존 선택 해제
    $button.closest(".swiper").find("button").removeClass("picked");

    // 현재 카드 선택
    $button.addClass("picked");

    // 사이드바에 선택한 업체명 표시
    $("#" + pickId).text(name);
  });
});
