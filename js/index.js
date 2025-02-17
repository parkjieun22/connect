// ============= sec2 pc (기본) =============
document.addEventListener("DOMContentLoaded", function () {
  // 모든 post_box_wrap 숨기기
  let allContent = document.querySelectorAll(".sec2_content_wrap");
  allContent.forEach((content) => {
    content.style.display = "none";
  });

  // 각 메뉴 버튼에 클릭 이벤트 추가
  document.querySelectorAll(".sec2_chips_wrap a").forEach((chip, index) => {
    chip.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지

      allContent.forEach((content) => {
        content.style.display = "none";
      });

      let targetContent = document.querySelector(`.content${index + 1}`);
      if (targetContent) {
        targetContent.style.display = "flex"; // flex로 다시 설정
      }
    });
  });

  // 기본으로 첫 번째 컨텐츠 보이게 설정
  document.querySelector(".content1").style.display = "flex"; // flex로 기본 설정
});

// ============= sec2 모바일 =============
document.addEventListener("DOMContentLoaded", function () {
  // 모든 post_box_wrap 숨기기
  let allContent = document.querySelectorAll(".sec2_content_wrap");
  allContent.forEach((content) => {
    content.style.display = "none";
  });

  // 각 메뉴 버튼에 클릭 이벤트 추가
  document
    .querySelectorAll(".sec2_chips_wrap_mobile a")
    .forEach((chip, index) => {
      chip.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 동작 방지

        allContent.forEach((content) => {
          content.style.display = "none";
        });

        let targetContent = document.querySelector(`.content${index + 1}`);
        if (targetContent) {
          targetContent.style.display = "flex"; // flex로 다시 설정
        }
      });
    });

  // 기본으로 첫 번째 컨텐츠 보이게 설정
  document.querySelector(".content1").style.display = "flex"; // flex로 기본 설정
});

// ============= sec3 =============
document.addEventListener("DOMContentLoaded", function () {
  // 모든 sec3_right_wrap 숨기기
  let allContent = document.querySelectorAll(".sec3_right_wrap");
  allContent.forEach((content) => {
    content.style.display = "none";
  });

  // 각 메뉴 버튼에 클릭 이벤트 추가
  document.querySelectorAll(".sec3_chips_wrap a").forEach((chip, index) => {
    chip.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지

      // 클릭된 메뉴에 해당하는 content1, content2 등 보이게 하기
      let targetContent = document.querySelector(
        `.section3_content${index + 1}`
      );

      allContent.forEach((content) => {
        content.style.display = "none";
      });

      // sec3_right_wrap을 flex로 설정
      if (targetContent) {
        targetContent.style.display = "flex"; // flex로 보이게 설정
      }
    });
  });

  // 기본으로 첫 번째 컨텐츠 보이게 설정
  document.querySelector(".section3_content1").style.display = "flex"; // 첫 번째 콘텐츠를 기본으로 보이게
});
