const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.cBwWsnJEW3LYnnoU_YyHTwHaE8?pid=Api"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.o2TvxUQY1yYxPdzAOk7jagHaE7?pid=Api"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.WckCHtVJDJxD_6MN10jUHAHaE7?pid=Api"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/800%2C/0/default"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52700,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0e85ee02f9c7079448ade5ad4b8b0505a07b4231/full/320%2C/0/default"
  }
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

document.getElementById("home").addEventListener("click", function () {
    window.location.href = "index.html";
  });
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

window.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
