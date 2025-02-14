document.addEventListener("DOMContentLoaded", function () {
  // 모든 post_box_wrap 숨기기
  let allContent = document.querySelectorAll(".base_content");
  allContent.forEach((content) => (content.style.display = "none"));

  // 각 메뉴 버튼에 클릭 이벤트 추가
  document.querySelectorAll(".sec2_menu_wrap a").forEach((chip, index) => {
    chip.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지

      // 모든 post_box_wrap 숨기기
      allContent.forEach((content) => (content.style.display = "none"));

      // 해당하는 post_box_wrap 보이게 하기
      let targetContent = document.querySelector(`.content${index + 1}`);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });

  // 기본으로 첫 번째 컨텐츠 보이게 설정
  document.querySelector(".content1").style.display = "block";
});
