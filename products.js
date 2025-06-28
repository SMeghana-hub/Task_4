const products = [
  { name: "Smartphone", category: "electronics", price: 799, rating: 4.6, img: "../images/smartphone.jpg" },
  { name: "Headphones", category: "electronics", price: 199, rating: 4.3, img: "../images/headphones.jpg" },
  { name: "Sneakers", category: "fashion", price: 120, rating: 4.4, img: "../images/sneakers.jpg" },
  { name: "T-Shirt", category: "fashion", price: 30, rating: 4.1, img: "../images/tshirt.jpg" }
];

let currentProducts = [...products];

function displayProducts(list) {
  const ul = document.getElementById("productList");
  ul.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.img}" alt="${p.name}" /><div>${p.name} - ₹${p.price} - ⭐${p.rating}</div>`;
    ul.appendChild(li);
  });
}

function filterProducts() {
  const cat = document.getElementById("filter").value;
  currentProducts = (cat === "all") ? products : products.filter(p => p.category === cat);
  displayProducts(currentProducts);
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  currentProducts.sort((a, b) => b[sortBy] - a[sortBy]);
  displayProducts(currentProducts);
}

displayProducts(currentProducts);
