// //event pada saat diklik
// $('.page-scroll').on('click', function (e) {
//   //ambil href
//   var tujuan = $(this).attr('href');
//   //tangkap elemen yang bersangkutan
//   var elementujuan = $(tujuan);
//   //pindahkan scroll
//   $('body').animate(
//     {
//       scrollTop: elementujuan.offset().top - 50,
//     },
//     1000
//   );
//   e.preventDefault();
// });
$('.page-scroll').on('click', function (e) {
  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);

  $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 50,
  });

  e.preventDefault();
});

//paralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    transform: 'translate(0px,' + wScroll / 4 + '%)',
  });
  $('.jumbotron h1').css({
    transform: 'translate(0px,' + wScroll / 2 + '%)',
  });
  $('.jumbotron p').css({
    transform: 'translate(0px,' + wScroll / 1.5 + '%)',
  });
  //portfolio
  if (wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio.thumbnail').each(function (i) {
      setTimeout(function () {
        $('.portfolio.thumbnail').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    });
  }
});
