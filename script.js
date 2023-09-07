// script.js

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const showPasswordBtn = document.getElementById("showPasswordBtn");
    const toggler = document.getElementById("toggler");
  
    showPasswordBtn.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggler.className = "far fa-eye"
      } else {
        passwordInput.type = "password";
        toggler.className = "far fa-eye-slash"
      }
    });
  });
  