$(document).ready(function () {
  // ===== 배너 영역 =====
  let num = 0;
  const $banner = $(".ban_con");
  let bannerInterval;

  function updateDots(idx) {
    $(".dot").removeClass("active").eq(idx).addClass("active");
  }

  function startBanner() {
    clearInterval(bannerInterval); // 혹시 모를 중복 방지
    bannerInterval = setInterval(function () {
      const next = (num + 1) % $banner.length;
      $banner.eq(num).fadeOut(500);
      $banner.eq(next).fadeIn(500);
      num = next;
      updateDots(num);
    }, 4000);
  }

  // 초기 상태 세팅
  $banner.hide().eq(0).show();
  updateDots(0);
  startBanner();

  // dot 클릭 시 해당 배너로 이동 (선택 기능, 원치 않으시면 이 블록 삭제)
  $(".dot").on("click", function () {
    const idx = $(this).data("idx");
    clearInterval(bannerInterval);
    $banner.eq(num).fadeOut(500);
    $banner.eq(idx).fadeIn(500);
    num = idx;
    updateDots(num);
    startBanner();
  });

  // ===== PICK 버튼 =====
  $(".swiper-slide button").on("click", function () {
    const $button = $(this);
    const pickId = $button.data("pick");
    const name = $button.data("name");

    if ($button.hasClass("picked")) {
      $button.removeClass("picked");
      $("#" + pickId).empty();
      return;
    }

    $button.closest(".swiper").find("button").removeClass("picked");
    $button.addClass("picked");
    $("#" + pickId).text(name);
  });
});
