// 메뉴 열기/닫기 버튼 토글
function btnToggle() {
  $(".menu_btn__open").toggleClass("on");
  $(".menu_btn__close").toggleClass("on");
}

// 메뉴버튼 클릭 시 왼쪽에서 나옴
$(".menu_btn__open").click(e => {
  e.preventDefault();
  $(".menu_bar").animate({ left: 0 });
  $(".menu_bar__bg").animate({ left: 0 });
  btnToggle();
});

// 메뉴 닫기 버튼 클릭 시 왼쪽으로 들어감
$(".menu_btn__close").click(e => {
  e.preventDefault();
  $(".menu_bar").animate({ left: "-100%" });
  $(".menu_bar__bg").animate({ left: "-100%" });
  btnToggle();
});
