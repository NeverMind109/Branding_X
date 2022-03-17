$(function () {
  $(".menu-btn").on("click", function () {
    $(".navigation").toggleClass("navigation--active");
    $(".menu-list__link").on("click", function () {
      $(".navigation").removeClass("navigation--active");
    });
    $(".logo").on("click", function () {
      $(".navigation").removeClass("navigation--active");
    });
    $(".cart").on("click", function () {
      $(".navigation").removeClass("navigation--active");
    });
  });

  $("a.scroll-to").on("click", function (event) {
    var target = $(this.getAttribute("href"));
    var offsetDownLarge = 20; // Отступ для больших экранов
    var offsetDownSmall = 120; // Отступ для маленьких экранов
    if (target.length) {
      event.preventDefault();
      var clientWidth = document.body.clientWidth;
      var offset = clientWidth >= 576 ? offsetDownLarge : offsetDownSmall; // Размер ширины экрана, начиная с которой применяется большой отступ
      var scroll = target.offset().top - offset;
      $("html, body").stop().animate(
        {
          scrollTop: scroll,
        },
        200
      ); // Время прокрутки
    }
  });
});
