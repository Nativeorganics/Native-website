document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const productList = document.querySelector('.container-card');
    const cards = Array.from(productList.querySelectorAll('.card'));
    const noProductsMessage = document.createElement('p');
    noProductsMessage.textContent = 'No products found!';
    noProductsMessage.style.display = 'none'; 
    noProductsMessage.style.color = 'black'; 
    productList.appendChild(noProductsMessage);

    const filterProducts = () => {
        const query = searchInput.value.toLowerCase();
        let hasVisibleProduct = false;

        cards.forEach(card => {
            const productName = card.getAttribute('data-name').toLowerCase();
            if (productName.includes(query)) {
                card.style.display = 'block';
                hasVisibleProduct = true;
            } else {
                card.style.display = 'none';
            }
        });

        noProductsMessage.style.display = hasVisibleProduct ? 'none' : 'block';
    };

    searchInput.addEventListener('input', filterProducts);

    const handleCardClick = (event) => {
        const card = event.currentTarget;
        const href = card.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
});


// Function to show side navbar
function showNavbar() {
    document.querySelector(".side-navbar").style.left = "0";
}

// Function to close side navbar
function closeNavbar() {
    document.querySelector(".side-navbar").style.left = "-60%";
}
