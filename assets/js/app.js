document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // 헤더가 없는 페이지에서는 오류가 나지 않도록 방지
  if (!header) {
    return;
  }

  // 스크롤 이벤트 리스너 추가
  window.addEventListener("scroll", () => {
    // 20px 이상 스크롤되면 'sticky' 클래스 추가
    if (window.scrollY > 20) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});
