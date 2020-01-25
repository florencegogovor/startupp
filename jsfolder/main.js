const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const copyDate = document.querySelector("#date");
const date = new Date();
copyDate.innerHTML = date.getFullYear();