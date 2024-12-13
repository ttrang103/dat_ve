document.addEventListener("DOMContentLoaded", () => {
  const menuTrigger = document.querySelector(".menu-trigger");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle Dropdown Menu
  menuTrigger.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  // Close Dropdown Menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar")) {
      dropdownMenu.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const today = new Date();
  const datesContainer = document.getElementById("dates-container");

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const dayName = daysOfWeek[date.getDay()];
    const dayNumber = date.getDate();
    const monthNumber = date.getMonth() + 1;

    const dateElement = document.createElement("span");
    dateElement.className = "date-item";
    dateElement.dataset.date = `${date.getFullYear()}-${monthNumber}-${dayNumber}`;
    dateElement.innerHTML = `${dayName}<br>${dayNumber}/${monthNumber}`;
    datesContainer.appendChild(dateElement);

    // Sự kiện chọn ngày
    dateElement.addEventListener("click", () => {
      document
        .querySelectorAll(".date-item")
        .forEach((item) => item.classList.remove("active"));
      dateElement.classList.add("active");
      document.getElementById("selected-date").textContent =
        dateElement.dataset.date;
    });
  }
});
