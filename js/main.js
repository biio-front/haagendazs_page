const $gnb = $(".gnb");
const $main = $("main");
const $page1 = $(".page1");
const $page2 = $(".page2");
const $page3 = $(".page3");
const $page4 = $(".page4");
const pageNum = [$page1, $page2, $page3, $page4];
const gnbNum = [
  $("gnb__home"),
  $(".gnb__menu"),
  $(".gnb__shop"),
  $(".gnb__partener"),
];

// 메뉴를 클릭할 때 화면 이동
function pageClick(gnbNum_i, page_i) {
  $gnb.find(gnbNum_i).click(function (e) {
    e.preventDefault();

    const i = page_i;
    const topPos = pageNum[i].offset().top;
    
    if ($(this).parent().hasClass("page_on")) return;
    $(this).parent().addClass("page_on").siblings().removeClass("page_on");
    
    if (window.outerWidth > window.outerHeight && window.outerWidth > 480) {
        // $("body").animate({ scrollTop: topPos - 180 }, 1000);
        console.log(topPos, 'pc');
    } else {
      $("body").anoimate({ scrollTop: topPos }, 1000);
    }
  });
}
// 하겐다즈 매장찾기 클릭시 매장리스트 열림
$('.find_shop button').click(function(e) {
  e.preventDefault();
  console.log('clicked');
  $('.shop_detail').find('div').css({'display' : 'block'});

});


// page2
$('page2__menu_img li').hover(function(){
  $(this).find('img:nth-child(2)').css({'display':'block'})
}, function(){
  console.log('off');
})

$('page2__menu_img li').click(function(){
console.log('...');
});

function init() {
  for (let i = 0; i < gnbNum.length; i++) {
    pageClick(gnbNum[i], i);
  }

  

}

init();
