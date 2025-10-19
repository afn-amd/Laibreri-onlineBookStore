document.addEventListener("DOMContentLoaded", function () {
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
  const searchInput = document.querySelector(".search-box input");
  searchInput.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.05)";
  });
  searchInput.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
  const calendarNavs = document.querySelectorAll(".calendar-nav");
  calendarNavs.forEach((nav) => {
    nav.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });
  const startBtn = document.querySelector(".start-reading-btn");
  startBtn.addEventListener("click", function () {
    this.innerHTML = 'Starting... <i class="fas fa-spinner fa-spin"></i>';
    setTimeout(() => {
      this.innerHTML = "Start Reading →";
    }, 2000);
  });
  const sections = document.querySelectorAll(
    "section, .current-reading, .calendar, .friends-section"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translate(0)";
      }
    });
  });
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
  });
});
