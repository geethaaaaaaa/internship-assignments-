const products = [
    {
        name: "Smartphone",
        category: "electronics",
        price: 12000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        name: "Laptop",
        category: "electronics",
        price: 45000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        name: "T-Shirt",
        category: "clothing",
        price: 800,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        name: "Jeans",
        category: "clothing",
        price: 1500,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d"
    },
    {
        name: "Headphones",
        category: "electronics",
        price: 2500,
        image: "https://images.unsplash.com/photo-1518449035422-9f7eaa6c3c3d"
    }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(list) {
    productContainer.innerHTML = "";

    if (list.length === 0) {
        productContainer.innerHTML = "<p>No products found</p>";
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" 
                 onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p class="price">₹${product.price}</p>
        `;

        productContainer.appendChild(card);
    });
}

function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    const price = document.getElementById("priceFilter").value;

    let filtered = products;

    // Category filter
    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    // Price filter
    if (price === "low") {
        filtered = filtered.filter(p => p.price < 1000);
    } else if (price === "mid") {
        filtered = filtered.filter(p => p.price >= 1000 && p.price <= 3000);
    } else if (price === "high") {
        filtered = filtered.filter(p => p.price > 3000);
    }

    displayProducts(filtered);
}

// Event listeners
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("change", filterProducts);

// Initial load
displayProducts(products);