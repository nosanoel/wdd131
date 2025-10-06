// Sample tour packages
const tourPackages = [
  { id: "cultural", name: "Cultural Heritage Tour" },
  { id: "nature", name: "Nature & Wildlife Safari" },
  { id: "city", name: "City Highlights Tour" },
  { id: "adventure", name: "Adventure & Hiking" },
  { id: "food", name: "Food & Culinary Experience" }
];

document.addEventListener("DOMContentLoaded", () => {
  const packageSelect = document.getElementById("package");
  const form = document.getElementById("booking-form");
  const messageBox = document.getElementById("booking-message");

  // Populate packages dropdown
  tourPackages.forEach(pkg => {
    const option = document.createElement("option");
    option.value = pkg.id;
    option.textContent = pkg.name;
    packageSelect.appendChild(option);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const selectedPackage = form.package.value;
    const guests = form.guests.value;
    const date = form.date.value;

    if (!fullName || !email || !selectedPackage || !guests || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    messageBox.textContent = `Thank you, ${fullName}! Your booking for the "${tourPackages.find(p => p.id === selectedPackage).name}" on ${date} for ${guests} guest(s) has been received.`;
    messageBox.style.display = "block";

    form.reset();
  });

  // Mobile nav toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
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
