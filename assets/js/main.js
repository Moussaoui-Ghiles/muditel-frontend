// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // Solution Page Functionality
    function loadSolutionContent() {
        // Get the current solution page from URL
        const path = window.location.pathname;
        const solutionName = path.split('/').pop().replace('.html', '');
        const solutionData = solutionsData[solutionName];

        if (!solutionData) return;

        // Update hero section
        document.querySelector('.solution-hero').style.backgroundImage = `url('${solutionData.heroImage}')`;
        
        // Load services
        const servicesContainer = document.querySelector('#services .row');
        if (servicesContainer && solutionData.services) {
            servicesContainer.innerHTML = solutionData.services.map(service => `
                <div class="col-md-6 col-lg-4" data-aos="fade-up">
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="${service.icon}"></i>
                        </div>
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <ul class="service-features">
                            ${service.features.map(feature => `
                                <li><i class="fas fa-check"></i> ${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // Load products
        const productsContainer = document.querySelector('#products .row');
        if (productsContainer && solutionData.products) {
            productsContainer.innerHTML = solutionData.products.map(product => `
                <div class="col-md-6 col-lg-3" data-aos="fade-up">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="product-info">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                            <ul class="product-features">
                                ${product.features.map(feature => `
                                    <li><i class="fas fa-check"></i> ${feature}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Load applications
        const applicationsContainer = document.querySelector('#applications .row');
        if (applicationsContainer && solutionData.applications) {
            applicationsContainer.innerHTML = solutionData.applications.map(app => `
                <div class="col-md-6 col-lg-3" data-aos="fade-up">
                    <div class="application-card">
                        <div class="application-icon">
                            <i class="${app.icon}"></i>
                        </div>
                        <h3>${app.title}</h3>
                        <p>${app.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Load solution content if on a solution page
    if (window.location.pathname.includes('/solutions/')) {
        loadSolutionContent();
    }

    // Desktop megamenu hover functionality
    if (window.innerWidth >= 992) {
        const megaMenuItems = document.querySelectorAll('.has-megamenu');
        
        megaMenuItems.forEach(item => {
            const dropdownToggle = item.querySelector('.dropdown-toggle');
            const dropdownMenu = item.querySelector('.dropdown-menu');
            let dropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
            
            if (!dropdown) {
                dropdown = new bootstrap.Dropdown(dropdownToggle);
            }

            let timeoutId;

            const showMenu = () => {
                clearTimeout(timeoutId);
                dropdown.show();
            };

            const hideMenu = () => {
                timeoutId = setTimeout(() => {
                    dropdown.hide();
                }, 100);
            };

            item.addEventListener('mouseenter', showMenu);
            dropdownMenu.addEventListener('mouseenter', showMenu);
            
            item.addEventListener('mouseleave', (e) => {
                if (!e.relatedTarget || !e.relatedTarget.closest('.megamenu')) {
                    hideMenu();
                }
            });
            
            dropdownMenu.addEventListener('mouseleave', hideMenu);
        });
    }

    // Product filtering functionality
    const filterButtons = document.querySelectorAll('.category-filter');
    const productItems = document.querySelectorAll('.product-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                productItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});