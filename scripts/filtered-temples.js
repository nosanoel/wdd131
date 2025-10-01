const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.cBwWsnJEW3LYnnoU_YyHTwHaE8?pid=Api"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.o2TvxUQY1yYxPdzAOk7jagHaE7?pid=Api"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.WckCHtVJDJxD_6MN10jUHAHaE7?pid=Api"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/800%2C/0/default"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52700,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0e85ee02f9c7079448ade5ad4b8b0505a07b4231/full/320%2C/0/default"
  },
  {
    templeName: "Kinshasa DR Congo",
    location: "Kinshasa, DR Congo",
    dedicated: "2019-04-14",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019-09-15",
    area: 23000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023-10-22",
    area: 44417,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 160000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  }
];

function displayTemples(templesArray) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");

    
    const dedicatedDate = new Date(temple.dedicated);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dedicatedDate.toLocaleDateString(undefined, options);

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${formattedDate}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" loading="lazy" alt="Image of ${temple.templeName} Temple">
    `;

    container.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered = [];

  switch(type) {
    case "old":
      filtered = temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year < 1900;
      });
      break;
    case "new":
      filtered = temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year > 2000;
      });
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

document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

window.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
