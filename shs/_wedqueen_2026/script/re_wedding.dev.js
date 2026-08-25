"use strict";

$(document).ready(function () {
  // ===== 배너 영역 =====
  var num = 0;
  var $banner = $(".ban_con");
  var bannerInterval;

  function updateDots(idx) {
    $(".dot").removeClass("active").eq(idx).addClass("active");
  }

  function startBanner() {
    clearInterval(bannerInterval); // 혹시 모를 중복 방지

    bannerInterval = setInterval(function () {
      var next = (num + 1) % $banner.length;
      $banner.eq(num).fadeOut(500);
      $banner.eq(next).fadeIn(500);
      num = next;
      updateDots(num);
    }, 4000);
  } // 초기 상태 세팅


  $banner.hide().eq(0).show();
  updateDots(0);
  startBanner(); // dot 클릭 시 해당 배너로 이동 (선택 기능, 원치 않으시면 이 블록 삭제)

  $(".dot").on("click", function () {
    var idx = $(this).data("idx");
    clearInterval(bannerInterval);
    $banner.eq(num).fadeOut(500);
    $banner.eq(idx).fadeIn(500);
    num = idx;
    updateDots(num);
    startBanner();
  }); // ===== PICK 버튼 =====

  $(".swiper-slide button").on("click", function () {
    var $button = $(this);
    var pickId = $button.data("pick");
    var name = $button.data("name");

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