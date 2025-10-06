document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified 
  const lastModifiedSpan = document.getElementById("last-modified");
  if (lastModifiedSpan) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
});
