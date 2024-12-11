// Components data structure
const components = {
    panels: [
        {
            id: 'panel1',
            name: '600W Solar Panel',
            description: 'High-efficiency solar panel with dimensions 2279*1134*35mm (31 panels per carton)',
            price: 399.99,
            image: '../assets/img/panel-1.jpg',
            category: 'panels',
            specifications: {
                power: '600W',
                dimensions: '2279*1134*35mm',
                panelsPerCarton: 31
            },
            solutions: ['off-grid', 'on-grid', 'hybrid']
        }
    ],
    inverters: [
        {
            id: 'inv1',
            name: '3KW Off-Grid Inverter',
            description: 'Dedicated off-grid inverter for standalone solar systems',
            price: 1299.99,
            image: '../assets/img/inverter-1.jpg',
            category: 'inverters',
            specifications: {
                power: '3KW',
                type: 'Off-grid'
            },
            solutions: ['off-grid']
        },
        {
            id: 'inv2',
            name: 'Off Hybrid Grid Inverter',
            description: 'Grid-tie inverter with built-in charge controller for on-grid systems',
            price: 1499.99,
            image: '../assets/img/inverter-2.jpg',
            category: 'inverters',
            specifications: {
                type: 'Grid-tie',
                features: ['Built-in charge controller']
            },
            solutions: ['on-grid']
        },
        {
            id: 'inv3',
            name: '8KW Hybrid Grid Solar Inverter',
            description: 'Advanced hybrid inverter with built-in MPPT charge controller',
            price: 2499.99,
            image: '../assets/img/inverter-3.jpg',
            category: 'inverters',
            specifications: {
                power: '8KW',
                type: 'Hybrid',
                features: ['Built-in MPPT charge controller']
            },
            solutions: ['hybrid']
        }
    ],
    batteries: [
        {
            id: 'bat1',
            name: '48V 200AH Lithium Battery',
            description: 'High-capacity lithium battery system without GPS',
            price: 2999.99,
            image: '../assets/img/battery-1.jpg',
            category: 'batteries',
            specifications: {
                voltage: '48V',
                capacity: '200AH',
                type: 'Lithium'
            },
            solutions: ['off-grid', 'hybrid']
        }
    ],
    accessories: [
        {
            id: 'acc1',
            name: 'PV Combiner Box',
            description: 'PV array combiner box for connecting multiple panels',
            price: 199.99,
            image: '../assets/img/combiner-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'hybrid']
        },
        {
            id: 'acc2',
            name: 'Metallic Structure',
            description: 'Mounting brackets for panel installation (28 Panel Kit)',
            price: 599.99,
            image: '../assets/img/mount-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'on-grid', 'hybrid']
        },
        {
            id: 'acc3',
            name: 'Perkins Generator 10 KVA',
            description: '10 KVA prime power, 3-phase, 2-wires, silent genset',
            price: 4999.99,
            image: '../assets/img/generator-1.jpg',
            category: 'accessories',
            specifications: {
                power: '10 KVA',
                type: '3-phase, 2-wires',
                features: ['Silent operation']
            },
            solutions: ['off-grid']
        },
        {
            id: 'acc4',
            name: 'Hybrid Grid Cabinet',
            description: 'Off-grid inverter cabinet for system housing',
            price: 399.99,
            image: '../assets/img/cabinet-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'hybrid']
        },
        {
            id: 'acc5',
            name: 'Battery Connection Kit',
            description: 'PV cables and connectors for battery system wiring',
            price: 149.99,
            image: '../assets/img/cables-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'on-grid', 'hybrid']
        },
        {
            id: 'acc6',
            name: 'MC4 Connector Set',
            description: 'Professional MC4 connectors for panel connections',
            price: 49.99,
            image: '../assets/img/connector-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'on-grid', 'hybrid']
        },
        {
            id: 'acc7',
            name: 'GSM MPPT Controller',
            description: 'GSM Series MPPT PV Controller 48V 240A with monitoring capabilities',
            price: 799.99,
            image: '../assets/img/controller-1.jpg',
            category: 'accessories',
            specifications: {
                voltage: '48V',
                current: '240A',
                type: 'MPPT'
            },
            solutions: ['off-grid']
        },
        {
            id: 'acc8',
            name: 'ATS Cabinet 63A',
            description: '63A Automatic Transfer Switch cabinet for power management',
            price: 299.99,
            image: '../assets/img/ats-1.jpg',
            category: 'accessories',
            specifications: {
                current: '63A'
            },
            solutions: ['off-grid']
        },
        {
            id: 'acc9',
            name: 'Mounting Tool Kit',
            description: 'Complete solar panel installation tool bag',
            price: 199.99,
            image: '../assets/img/tools-1.jpg',
            category: 'accessories',
            solutions: ['off-grid', 'on-grid', 'hybrid']
        },
        {
            id: 'acc10',
            name: 'Grid Connection Kit',
            description: 'Rectifier and equipment for grid integration',
            price: 699.99,
            image: '../assets/img/grid-1.jpg',
            category: 'accessories',
            solutions: ['on-grid', 'hybrid']
        }
    ]
};

// State management
let currentSolution = '';
let currentCategory = 'all';
let selectedComponents = new Map();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Check for solution parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const solution = urlParams.get('solution');
    if (solution) {
        currentSolution = solution;
        const solutionBtn = document.querySelector(`[data-solution="${solution}"]`);
        if (solutionBtn) {
            solutionBtn.classList.add('active');
        }
    }

    // Set up event listeners
    setupEventListeners();
    
    // Initial render
    renderComponents();
});

function setupEventListeners() {
    // Solution buttons
    document.querySelectorAll('.solution-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.solution-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSolution = btn.dataset.solution;
            renderComponents();
        });
    });

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderComponents();
        });
    });

    // Quote button
    document.getElementById('requestQuoteBtn').addEventListener('click', () => {
        // Implement quote request logic here
        console.log('Selected components:', Array.from(selectedComponents.values()));
    });
}

function renderComponents() {
    const grid = document.getElementById('componentsGrid');
    grid.innerHTML = '';

    // Get all components
    const allComponents = [
        ...components.panels,
        ...components.inverters,
        ...components.batteries,
        ...components.accessories
    ];

    // Filter components based on solution and category
    const filteredComponents = allComponents.filter(component => {
        const solutionMatch = !currentSolution || component.solutions.includes(currentSolution);
        const categoryMatch = currentCategory === 'all' || component.category === currentCategory;
        return solutionMatch && categoryMatch;
    });

    // Render filtered components
    filteredComponents.forEach(component => {
        const card = createComponentCard(component);
        grid.appendChild(card);
    });

    updateSummary();
}

function createComponentCard(component) {
    const div = document.createElement('div');
    div.className = 'col-lg-4 col-md-6';
    
    div.innerHTML = `
        <div class="component-card">
            <div class="component-image" style="background-image: url('${component.image}')"></div>
            <div class="component-details">
                <h3 class="component-name">${component.name}</h3>
                <p class="component-description">${component.description}</p>
                <div class="component-price">$${component.price.toFixed(2)}</div>
                <div class="component-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${component.id}">-</button>
                        <span class="quantity">${selectedComponents.get(component.id)?.quantity || 0}</span>
                        <button class="quantity-btn plus" data-id="${component.id}">+</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for quantity buttons
    const plusBtn = div.querySelector('.plus');
    const minusBtn = div.querySelector('.minus');

    plusBtn.addEventListener('click', () => updateQuantity(component, 1));
    minusBtn.addEventListener('click', () => updateQuantity(component, -1));

    return div;
}

function updateQuantity(component, change) {
    const current = selectedComponents.get(component.id);
    if (current) {
        const newQuantity = current.quantity + change;
        if (newQuantity <= 0) {
            selectedComponents.delete(component.id);
        } else {
            current.quantity = newQuantity;
        }
    } else if (change > 0) {
        selectedComponents.set(component.id, {
            ...component,
            quantity: 1
        });
    }

    renderComponents();
    updateSummary();
}

function updateSummary() {
    const summaryDiv = document.getElementById('selectedItems');
    summaryDiv.innerHTML = '';

    let total = 0;

    selectedComponents.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'selected-item';
        itemDiv.innerHTML = `
            <div class="item-details">
                <div class="item-image" style="background-image: url('${item.image}')"></div>
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <div class="item-quantity">Quantity: ${item.quantity}</div>
                </div>
            </div>
            <div class="item-price">$${itemTotal.toFixed(2)}</div>
        `;

        summaryDiv.appendChild(itemDiv);
    });

    document.getElementById('totalCost').textContent = `$${total.toFixed(2)}`;
}
