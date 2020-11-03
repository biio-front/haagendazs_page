const pageNum = [$(".page1"), $(".page2"), $(".page3"), $(".page4")];
const gnbNum = [
  $(".gnb__home"),
  $(".gnb__menu"),
  $(".gnb__store"),
  $(".gnb__partener"),
];
const page2Menu = [
  $('.page2__pint'), 
  $('.page2__mini'), 
  $('.page2__bar'),
  $('.page2__con')
];
const page2Img = [
  $('.page2__pint_img img'),
  $('.page2__mini_img img'),
  $('.page2__bar_img img'),
  $('.page2__con_img img')
];

// 클릭한 메뉴 페이지로 이동
function gnbMove(pageNum_i){
  const i = pageNum_i;
  const topPos = pageNum[i].offset().top;
  
  if (window.outerWidth > window.outerHeight || window.outerWidth > 480) {
    $("html, body").stop().animate({ scrollTop: topPos - 160 }, 1000);
  } else {
    $("html, body").stop().animate({ scrollTop: topPos }, 1000);
  }
}

// 메뉴 클릭시 밑줄추가(page_on 클래스 추가) 및 페이지 이동
function pageClick(gnbNum_i, pageNum_i) {
  $('.gnb').find(gnbNum_i).click(function (e) {
    e.preventDefault();
    
    if ($(this).parent().hasClass("page_on")) return;
    $(this).parent().addClass("page_on").siblings().removeClass("page_on");
    
    gnbMove(pageNum_i);
  });
}

// page2: 메뉴 리스트 클릭시 메뉴설명 on/off
function listClickON(i){
  page2Menu[i].click(function(e){
    e.preventDefault();
    page2Img[i].toggleClass('on');
  });
}
// page2: 메뉴 이미지에 마우스 오버시 메뉴설명 on
function imgMousehoverON(){
  $('.page2__menu_img li').hover(function(){
    $(this).find('img').addClass('on');
  }, function(){
    $(this).find('img').removeClass('on');
  });
}
// page2: 메뉴 이미지 클릭시 메뉴설명 on/off
function imgClickON(){
  $('.page2__menu_img li').click(function(e){
    e.preventDefault();
    $(this).find('img').toggleClass('on');
  });
}

// page3: 하겐다즈 매장찾기 클릭시 매장리스트 열림
function storeListOpen(){
  $('.find_store button').click(function(e) {
    e.preventDefault();
    $('.store_name div').slideDown();
  });
}
// page3: 매장리스트 밖으로 마우스 이동시 리스트 닫힘
function storeListClose(){
  $('.find_store').mouseleave(function() {
    $('.store_name div').slideUp();
  });
}
// page3: 하겐다즈 매장 리스트 클릭시 리스트 닫힘
function storeListClickToClose(){
  $('.store_name a').click(function(e) {
    $('.store_name div').slideUp();
  })
}

function init() {
  for (let i = 0; i < gnbNum.length; i++) {
    pageClick(gnbNum[i], i);
  }
  //page2
  for(let i = 0; i < page2Menu.length; i++){
    listClickON(i);
  }
  imgMousehoverON();
  imgClickON();
  // page3
  storeListOpen();
  storeListClose();
  storeListClickToClose();
}

init();
