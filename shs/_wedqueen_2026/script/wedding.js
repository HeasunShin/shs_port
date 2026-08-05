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
  }, 3000);

  // // 고정 영역
  // let con = document.querySelector('.top_sec');
  let side = document.querySelector(".a_side_wrap");
  let con = $(".top_sec");
  let bot = $(".bottom_sec");
  let wh = $(window).height();

  // 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
  // let conTop = con.getBoundingClientRect().top + window.scrollY;
  let conTop = con.offset().top;
  let bot_t = bot.offset().top - wh;
  // let stop_fix=$(".a_side_con").height();

  window.addEventListener("scroll", function () {
    if (window.scrollY >= conTop && this.window.scrollY <= bot_t) {
      side.classList.add("fixed");
    } else {
      side.classList.remove("fixed");
    }
    if (window.scrollY >= bot_t - 300) {
      $(".a_side_wrap").css({
        position: "absolute",
        left: 0,
        bottom: 0,
      });
    } else {
      $(".a_side_wrap").css({
        position: "relative",
        left: 0,
        bottom: 0,
      });
    }
  });

  // 메인갤러리 영역
  let click_num = 0;
  $(".r_but_1").click(function () {
    click_num++;
    if (click_num > 6) {
      click_num = 0;
    }
    $(".box_1").animate(
      {
        left: -285.5,
      },
      500,
      function () {
        $(".con_1").first().appendTo(".box_1");
        $(".box_1").css({
          left: 0,
        });
      },
    );
  });

  $(".l_but_1").click(function () {
    click_num--;
    if (click_num < 0) {
      click_num = 6;
    }
    $(".con_1").last().prependTo(".box_1");
    $(".box_1")
      .css({
        left: -285.5,
      })
      .animate(
        {
          left: 0,
        },
        500,
      );
  });

  let click_2 = 0;
  $(".r_but_2").click(function () {
    click_2++;
    if (click_2 > 6) {
      click_2 = 0;
    }
    $(".box_2").animate(
      {
        left: -285.5,
      },
      500,
      function () {
        $(".con_2").first().appendTo(".box_2");
        $(".box_2").css({
          left: 0,
        });
      },
    );
  });

  $(".l_but_2").click(function () {
    click_2--;
    if (click_2 < 0) {
      click_2 = 6;
    }
    $(".con_2").last().prependTo(".box_2");
    $(".box_2")
      .css({
        left: -285.5,
      })
      .animate(
        {
          left: 0,
        },
        500,
      );
  });

  let click_3 = 0;
  $(".r_but_3").click(function () {
    click_3++;
    if (click_3 > 6) {
      click_3 = 0;
    }
    $(".box_3").animate(
      {
        left: -285.5,
      },
      500,
      function () {
        $(".con_3").first().appendTo(".box_3");
        $(".box_3").css({
          left: 0,
        });
      },
    );
  });

  $(".l_but_3").click(function () {
    click_3--;
    if (click_3 < 0) {
      click_3 = 6;
    }
    $(".con_3").last().prependTo(".box_3");
    $(".box_3")
      .css({
        left: -285.5,
      })
      .animate(
        {
          left: 0,
        },
        500,
      );
  });
}); // 끝
