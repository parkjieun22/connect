// 반응형 햄버거
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const menu = document.getElementById("hamburger-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
