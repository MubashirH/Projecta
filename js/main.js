function headerFooterLoad() {
  $("#header").load("./components/header.html");
  $("#footer").load("./components/footer.html");
}

$(document).ready(function () {
  AOS.init();
  headerFooterLoad();
  const bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      grabCursor: true,
      dynamicBullets: true,
    },
  });
});
