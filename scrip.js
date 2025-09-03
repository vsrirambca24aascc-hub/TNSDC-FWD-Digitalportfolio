// Toggle mobile menu

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");

});

// Close menu when clicking a link (mobile UX improvement)

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(item => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("show");

  });

});

// Contact form validation

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

const submitButton = contactForm.querySelector("button");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  // ✅ Fixed email pattern (dot escaped)

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {

    formStatus.textContent = "❌ Please fill in all fields.";

    formStatus.style.color = "red";

    return;

  }

  if (!emailPattern.test(email)) {

    formStatus.textContent = "❌ Please enter a valid email address.";

    formStatus.style.color = "red";

    return;

  }

  // Success

  formStatus.textContent = "✅ Message sent successfully!";

  formStatus.style.color = "blue";

  contactForm.reset();

  // Disable button briefly to prevent spam

  submitButton.disabled = true;

  setTimeout(() => {

    submitButton.disabled = false;

    formStatus.textContent = "blue";

  }, 3000);

});