const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://churchofjesuschrist.org/imgs/8c/0a/8c0a0f1cb06c44878558fa9aa7e9f16a06a3d2c6/full/320%2C/0/default"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://churchofjesuschrist.org/imgs/83/8c/838cf7b715b80a1d19b26eb1c961eb24934540c2/full/320%2C/0/default"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52700,
    imageUrl: "https://churchofjesuschrist.org/imgs/99/49/99498594bcdbf6d0c665223a7c51757a2e316ddb/full/320%2C/0/default"
  }
  // Add more if you'd like
];

function displayTemples(templesArray) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}">
    `;
    container.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered;

  switch (type) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

document.getElementById("home").addEventListener("click", () => filterTemples("all"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

window.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
