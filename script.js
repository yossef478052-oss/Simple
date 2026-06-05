// Product Database with Premium Details
const products = [
    {
        id: 1,
        name: "Modern Sofa",
        category: "living-room",
        price: 499,
        description: "Elegant and comfortable seating",
        fullDescription: "Experience the epitome of comfort with our Modern Sofa. Handcrafted with premium materials and featuring a solid frame, this masterpiece combines contemporary aesthetics with unparalleled comfort.",
        image: "modern sofa.jpeg",
        colors: ["Midnight Black", "Warm Gray", "Navy Blue", "Ivory Cream"],
        sizes: ["2-Seater", "3-Seater", "4-Seater"],
        details: [
            "Premium upholstery",
            "Solid wood frame",
            "High-density foam cushions",
            "Removable & washable covers",
            "Lifetime structural warranty"
        ]
    },
    {
        id: 2,
        name: "Dining Table Set",
        category: "dining",
        price: 399,
        description: "Perfect for family gatherings",
        fullDescription: "Bring your family together with our exquisite Dining Table Set. Crafted from sustainable wood with elegant design, includes four chairs upholstered in premium fabric.",
        image: "dining table set.jpeg",
        colors: ["Walnut", "Oak", "Espresso", "Light Ash"],
        sizes: ["4-Seater", "6-Seater", "8-Seater"],
        details: [
            "Sustainable hardwood construction",
            "Includes 4 premium chairs",
            "Heat and scratch resistant top",
            "Extendable design available",
            "25-year durability guarantee"
        ]
    },
    {
        id: 3,
        name: "Bedroom Set",
        category: "bedroom",
        price: 799,
        description: "Ultimate sanctuary of rest",
        fullDescription: "Transform your bedroom into a luxurious retreat with our premium Bedroom Set. Features a solid bed frame with a memory foam mattress and two matching pillows.",
        image: "bedroom set .jpeg",
        colors: ["Snow White", "Soft Gray", "Charcoal", "Cream"],
        sizes: ["Single", "Double", "Queen", "King"],
        details: [
            "Premium memory foam mattress",
            "Solid hardwood frame",
            "Hypoallergenic filling",
            "Professional assembly included",
            "10-year comfort guarantee"
        ]
    },
    {
        id: 4,
        name: "Office Desk",
        category: "office",
        price: 299,
        description: "Professional workspace design",
        fullDescription: "Boost productivity with our ergonomically designed Office Desk. Features ample workspace and intelligent storage solutions.",
        image: "office deski.jpeg",
        colors: ["Matte Black", "Walnut", "Pure White", "Slate Gray"],
        sizes: ["120cm", "150cm", "180cm"],
        details: [
            "Spacious work surface",
            "Integrated cable management",
            "Sturdy steel frame",
            "Scratch-resistant laminate",
            "Height adjustable options"
        ]
    },
    {
        id: 5,
        name: "Leather Chair",
        category: "office",
        price: 249,
        description: "Premium ergonomic comfort",
        fullDescription: "Experience ultimate comfort with our executive Leather Chair, designed with advanced ergonomic features for extended sitting sessions.",
        image: "leather chier.jpeg",
        colors: ["Rich Black", "Cognac Brown", "Pure White", "Navy"],
        sizes: ["Standard"],
        details: [
            "Premium leather upholstery",
            "Advanced ergonomic design",
            "Full 360-degree swivel",
            "Gas lift height adjustment",
            "5-year structural warranty"
        ]
    },
    {
        id: 6,
        name: "Boots",
        category: "living-room",
        price: 4100,
        description: "Minimalist elegance",
        fullDescription: "Modern mirrored shoe rack.",
        images: [
            "Boots.jpeg",
            "Boots2.jpeg",
            "Boots3.jpeg",
            "Boots4.jpeg",
            "Boots5.jpeg",
        ],
        colors: ["White", "Black", "Cognac Brown", ""],
        sizes: ["Small (30cm)", "Medium (60cm)", "Large (165cm)"],
        details: ["Modern design to suit all spaces", "Excellent materials", "Made of MDF wood and coated with a high-quality melamine layer."]
    },
    {
        id: 7,
        name: "Bookshelf",
        category: "living-room",
        price: 329,
        description: "Elegant storage solution",
        fullDescription: "Organize your collection beautifully with our Bookshelf. Combines functionality with contemporary design.",
        image: "bookshelf.jpeg",
        colors: ["Walnut", "Bright White", "Natural Oak", "Ebony Black"],
        sizes: ["5-Shelf", "7-Shelf", "9-Shelf"],
        details: [
            "Solid wood construction",
            "Adjustable shelves",
            "Sturdy metal brackets",
            "Wall-mount capable",
            "Pre-drilled for easy assembly"
        ]
    },
    {
        id: 8,
        name: "Nightstand",
        category: "bedroom",
        price: 149,
        description: "Bedside storage elegance",
        fullDescription: "Complete your bedroom with our stylish Nightstand. Features practical drawers and a sleek design.",
        image: "nightstand.jpeg",
        colors: ["Classic White", "Soft Gray", "Walnut", "Natural Oak"],
        sizes: ["Single Drawer", "Double Drawer"],
        details: [
            "Smooth drawer glides",
            "Compact elegant design",
            "Spacious storage",
            "Cable pass-through holes",
            "5-year durability warranty"
        ]
    },
    {
        id: 9,
        name: "Wardrobe Closet",
        category: "bedroom",
        price: 549,
        description: "Maximize your storage",
        fullDescription: "Create the perfect wardrobe with our luxurious Closet. Features multiple compartments and hanging rails.",
        image: "warbrobe closet.jpeg",
        colors: ["Crisp White", "Deep Black", "Walnut", "Slate Gray"],
        sizes: ["3-Door", "4-Door", "5-Door"],
        details: [
            "Multiple compartments",
            "Hanging rail system",
            "Adjustable shelves",
            "Mirror included",
            "Professional assembly"
        ]
    },
    {
        id: 10,
        name: "Dining Chairs Set",
        category: "dining",
        price: 299,
        description: "Comfortable seating collection",
        fullDescription: "Complete your dining experience with our elegant Dining Chairs. Sold as a set of 4.",
        image: "diring chairs set.jpeg",
        colors: ["Charcoal Black", "Light Gray", "Chocolate Brown", "Warm Beige"],
        sizes: ["Standard Height"],
        details: [
            "Set of 4 premium chairs",
            "Upholstered seating",
            "Solid frame construction",
            "Easy to clean",
            "Stackable design"
        ]
    },
    {
        id: 11,
        name: "Cabinet",
        category: "living-room",
        price: 399,
        description: "Modern storage solution",
        fullDescription: "Organize and display with our elegant Storage Cabinet. Features adjustable shelves and clean lines.",
        image: "cabinet.jpeg",
        colors: ["Bright White", "Walnut", "Ebony Black", "Soft Gray"],
        sizes: ["4-Shelf", "5-Shelf", "6-Shelf"],
        details: [
            "Adjustable shelving system",
            "Spacious storage",
            "Soft-close doors",
            "Contemporary design",
            "Durable laminate finish"
        ]
    },
    {
        id: 12,
        name: "Desk Lamp",
        category: "office",
        price: 89,
        description: "Professional lighting solution",
        fullDescription: "Illuminate your workspace with our premium LED Desk Lamp. Features adjustable brightness and elegant design.",
        image: "desk lamp.jpeg",
        colors: ["Matte Black", "Brushed Silver", "Gold", "Pure White"],
        sizes: ["Standard"],
        details: [
            "LED technology",
            "Adjustable brightness",
            "Flexible gooseneck",
            "Low heat output",
            "Energy efficient design"
        ]
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===== SETUP FUNCTIONS =====
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

function updateCartCount() {
    const count = cart.length;
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// ===== PRODUCTS PAGE =====
function loadProducts(filter = 'all', sortBy = 'default', searchTerm = '') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    let filteredProducts = products.filter(p => {
        const categoryMatch = filter === 'all' || p.category === filter;
        const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    if (sortBy === 'low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No products found</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
            <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
            </div> 
            <div class="product-info">
                <span class="product-category">${product.category.replace('-', ' ')}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} E.G</span>
                    <a href="product-detail.html?id=${product.id}" class="view-details">View</a>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// ===== PRODUCT DETAIL PAGE =====
function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    document.getElementById('breadcrumb-product').textContent = product.name;
    document.title = `${product.name} - Simple`;

    const detailContainer = document.getElementById('product-detail');
    if (detailContainer) {
        const colorOptions = product.colors.map((color, i) => `
            <label class="color-option">
                <input type="radio" name="color" value="${color}" ${i === 0 ? 'checked' : ''}>
                <label style="margin: 0; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <div class="color-box" style="background-color: ${getColorCode(color)};"></div>
                    <span>${color}</span>
                </label>
            </label>
        `).join('');

        const sizeOptions = product.sizes.map((size, i) => `
            <label class="size-option">
                <input type="radio" name="size" value="${size}" ${i === 0 ? 'checked' : ''}>
                <label style="margin: 0;">${size}</label>
            </label>
        `).join('');

        const details = product.details.map(d => `<li>${d}</li>`).join('');

        let thumbsHTML = "";
        if (product.images && Array.isArray(product.images)) {
            thumbsHTML = product.images.map(img => `
                <img src="${img}" class="thumb-img" onclick="changeImage('${img}')">
            `).join('');
        }

        detailContainer.innerHTML = `
            <div class="product-detail-grid">
                
                <div class="image-section">
                    <div class="main-image-container">
                        <img id="main-image" src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
                    </div>
                    
                    <div class="product-thumbs">
                        ${thumbsHTML} 
                    </div>
                    <div class="product-details-list">
                        <h3>Product Specifications</h3>
                        <ul>${details}</ul>
                    </div>
                </div>
        
                <div class="product-info-section">
                    <h1>${product.name}</h1>
                    <div class="product-detail-price">${product.price} E.G</div>
                    <p class="product-description">${product.fullDescription}</p>

                    <div class="selection-group">
                        <label>Color</label>
                        <div class="color-options">${colorOptions}</div>
                    </div>

                    <div class="selection-group">
                        <label>Size</label>
                        <div class="size-options">${sizeOptions}</div>
                    </div>

                    <div class="quantity-selector">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" value="1" min="1" max="10">
                    </div>

                    <button class="add-to-cart-btn" onclick="addToCartFromDetail(${product.id})">Add to Cart</button>
                    
                </div>
                
            </div>
        `;
    }

    loadRelatedProducts(productId);
}
// حطها هنا في آخر الملف بعيد عن أي فانكشن تانية
function changeImage(imageSrc) {
    const mainImg = document.getElementById('main-image');
    if (mainImg) {
        mainImg.src = imageSrc;
    }
}
function getColorCode(color) {
    const colorMap = {
        'Midnight Black': '#1a1a1a', 'Warm Gray': '#a8a8a8', 'Navy Blue': '#1a3a52', 'Ivory Cream': '#f5f5f0',
        'Walnut': '#654321', 'Oak': '#a0826d', 'Espresso': '#2c1810', 'Light Ash': '#d3cfc9',
        'Snow White': '#ffffff', 'Soft Gray': '#d5d5d5', 'Charcoal': '#36454f', 'Cream': '#fffdd0',
        'Black': '#000000', 'White': '#ffffff', 'Slate Gray': '#708090',
        'Rich Black': '#1a1a1a', 'Cognac Brown': '#8b4513', 'Chocolate Brown': '#7b4427', 'Warm Beige': '#d4c5a9',
        'Bright White': '#ffffff', 'Ebony Black': '#1a1a1a', 'Crisp White': '#ffffff', 'Deep Black': '#0a0a0a',
        'Light Gray': '#c0c0c0', 'Charcoal Black': '#36454f', 'Brushed Silver': '#c0c0c0', 'Gold': '#ffd700', 'Navy': '#1a3a52',
        'Natural Oak': '#a0826d', 'Walnut Brown': '#654321'
    };
    return colorMap[color] || '#cccccc';
}

function addToCartFromDetail(productId) {
    const product = products.find(p => p.id === productId);
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (quantity < 1) {
        alert('Please select a valid quantity');
        return;
    }

    const cartItem = {
        id: Date.now(),
        productId: productId,
        name: product.name,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        emoji: product.emoji
    };

    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    showNotification(`✓ ${product.name} added to cart!`);
    document.getElementById('quantity').value = 1;
}

function loadRelatedProducts(currentProductId) {
    const grid = document.getElementById('related-products-grid');
    if (!grid) return;

    const current = products.find(p => p.id === currentProductId);
    const related = products.filter(p => 
        p.category === current.category && p.id !== currentProductId
    ).slice(0, 4);

    grid.innerHTML = '';
    related.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
    <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
</div>
            <div class="product-info">
                <span class="product-category">${product.category.replace('-', ' ')}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} E.G</span>
                    <a href="product-detail.html?id=${product.id}" class="view-details">View</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== CART PAGE =====
function loadCartItems() {
    const cartList = document.getElementById('cart-items-list');
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Your cart is empty</p>
                <a href="products.html">Continue Shopping</a>
            </div>
        `;
        document.getElementById('checkout-btn').disabled = true;
        document.getElementById('checkout-btn').style.opacity = '0.5';
        return;
    }

    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.productId);

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <div class="cart-item-specs">
                    <div><strong>Color:</strong> ${item.color}</div>
                    <div><strong>Size:</strong> ${item.size}</div>
                    <div><strong>Quantity:</strong> ${item.quantity}</div>
                </div>
                <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} E.G</div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
        cartList.appendChild(cartItem);
    });

    updateCartSummary();
}

function removeFromCart(index) {
    if (confirm('Remove this item from cart?')) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
        showNotification('✓ Item removed from cart');
    }
}

function updateCartSummary() {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.quantity);

    const shipping = cart.length > 0 ? 50 : 0;
    const total = subtotal + shipping;

    const updateElements = (prefix) => {
        const subtotalEl = document.getElementById(prefix + 'subtotal');
        const shippingEl = document.getElementById(prefix + 'shipping');
        const totalEl = document.getElementById(prefix + 'total');

        if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} E.G`;
        if (shippingEl) shippingEl.textContent = `${shipping.toFixed(2)} E.G`;
        if (totalEl) totalEl.textContent = `${total.toFixed(2)} E.G`;
    };

    updateElements('cart-');
    updateElements('');

    updateSummaryItems();
}

function updateSummaryItems() {
    const summaryItemsEl = document.getElementById('summary-items');
    if (!summaryItemsEl) return;

    if (cart.length === 0) {
        summaryItemsEl.innerHTML = '<p class="empty-cart" style="padding: 0; text-align: left; margin-bottom: 1rem;">No items</p>';
        return;
    }

    summaryItemsEl.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'summary-item';
        div.innerHTML = `
            <span class="summary-item-name">${item.name}<br><small>${item.color}, ${item.size} x${item.quantity}</small></span>
            <span class="summary-item-price">${(item.price * item.quantity).toFixed(2)} E.G</span>
        `;
        summaryItemsEl.appendChild(div);
    });
}

// ===== CHECKOUT PAGE =====
function setupCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }

            if (!form.checkValidity()) {
                alert('Please fill in all required fields');
                return;
            }

            const formData = new FormData(form);
            const paymentMethod = formData.get('payment_method');
            
            const orderData = {
                orderId: 'ORD-' + Date.now(),
                customer: {
                    fullname: formData.get('fullname'),
                    email: formData.get('email'),
                    phone: formData.get('phone')
                },
                shipping: {
                    address: formData.get('address'),
                    city: formData.get('city'),
                    state: formData.get('state'),
                    zipcode: formData.get('zipcode'),
                    country: formData.get('country')
                },
                paymentMethod: paymentMethod === 'immediate' ? 'Immediate Payment' : 'Pay on Receipt',
                cart: cart,
                orderDate: new Date().toLocaleString()
            };

            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));

            const paymentText = paymentMethod === 'immediate' ? 
                'Your payment will be processed securely.' : 
                'You will pay when your order arrives.';

            alert(`Thank you for your purchase, ${formData.get('fullname')}!\n\nOrder ID: ${orderData.orderId}\nPayment Method: ${orderData.paymentMethod}\n${paymentText}\n\nConfirmation sent to ${formData.get('email')}`);
            
            form.reset();
            updateCheckoutSummary();
            updateCartCount();
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
}

function updateCheckoutSummary() {
    updateSummaryItems();
    updateCartSummary();
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #27ae60, #229954);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    updateCartCount();

    // Products page
    if (document.getElementById('products-grid')) {
        loadProducts();
        document.getElementById('category-filter')?.addEventListener('change', (e) => {
            const sort = document.getElementById('price-filter')?.value || 'default';
            const search = document.getElementById('search-products')?.value || '';
            loadProducts(e.target.value, sort, search);
        });

        document.getElementById('price-filter')?.addEventListener('change', (e) => {
            const category = document.getElementById('category-filter')?.value || 'all';
            const search = document.getElementById('search-products')?.value || '';
            loadProducts(category, e.target.value, search);
        });

        document.getElementById('search-products')?.addEventListener('input', (e) => {
            const category = document.getElementById('category-filter')?.value || 'all';
            const sort = document.getElementById('price-filter')?.value || 'default';
            loadProducts(category, sort, e.target.value);
        });
    }

    // Product detail page
    if (document.getElementById('product-detail')) {
        loadProductDetail();
    }

    // Cart page
    if (document.getElementById('cart-items-list')) {
        loadCartItems();
    }

    // Checkout page
    if (document.getElementById('checkout-form')) {
        setupCheckoutForm();
        updateCheckoutSummary();
    }

    // Input formatting
    document.getElementById('phone')?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) value = value;
            else if (value.length <= 6) value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            else value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
        e.target.value = value;
    });

    document.getElementById('cardnumber')?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        e.target.value = value.replace(/(\d{4})/g, '1 E.G ').trim();
    });
});
// ===== SCROLL REVEAL ANIMATION =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.hero-content, .hero-image, .section-header, .featured-card, .about-text, .about-image, .benefit-item, .stat-item, .product-card, .filters-bar');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
                element.classList.add('scroll-reveal');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
}

// Initialize scroll reveal after DOM is loaded
setTimeout(() => {
    initScrollReveal();
}, 100);
const counters = document.querySelectorAll('.counter');
const speed = 600; // كل ما صغرت الرقم ده السرعة هتزيد

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // الرقم النهائي
            const count = +counter.innerText; // الرقم الحالي

            // بنقسم الرقم النهائي على السرعة عشان نحدد "الخطوة" في العد
            const inc = target / speed;

            if (count < target) {
                // بنزود الرقم وبنستخدم Math.ceil عشان نضمن الوصول للرقم بالظبط
                counter.innerText = Math.ceil(count + inc);
                // بنكرر العملية كل 1 مللي ثانية
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// كود عشان العداد يبدأ "فقط" لما المستخدم يوصل للسكشن ده
const observerOptions = {
    threshold: 0.5 // العداد هيبدأ لما 50% من السكشن يظهر على الشاشة
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target); // عشان يشتغل مرة واحدة بس
        }
    });
}, observerOptions);

observer.observe(document.querySelector('.stats'));