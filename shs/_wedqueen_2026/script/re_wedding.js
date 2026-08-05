$(document).ready(function () {
  // 배너 영역

  let num = 0;
  setInterval(function () {
    num++;
    if (num > 4) {
      num = 0;
    }
    $(".ban_con").fadeOut(1000);
    $(".ban_con").eq(num).fadeIn(1000);
  }, 4000);
});
