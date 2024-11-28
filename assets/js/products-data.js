const productsData = {
    categories: [
        {
            id: 'fiber',
            name: 'Fiber Optic',
            icon: 'fa-solid fa-network-wired'
        },
        {
            id: 'telecom',
            name: 'Telecom',
            icon: 'fa-solid fa-tower-broadcast'
        },
        {
            id: 'security',
            name: 'Security',
            icon: 'fa-solid fa-shield-halved'
        },
        {
            id: 'networking',
            name: 'Networking',
            icon: 'fa-solid fa-server'
        },
        {
            id: 'audio-visual',
            name: 'Audio Visual',
            icon: 'fa-solid fa-video'
        }
    ],
    products: [
        {
            id: 'fiber-cable-sm',
            name: 'Single-Mode Fiber Cable',
            category: 'fiber',
            image: 'assets/img/products/fiber-cable.jpg',
            description: 'High-performance single-mode fiber optic cable for long-distance data transmission.',
            features: [
                'Low signal loss',
                'Long-distance capability',
                'High bandwidth capacity',
                'EMI immunity'
            ],
            specs: [
                { icon: 'fa-solid fa-arrows-left-right', text: '9/125μm core/cladding' },
                { icon: 'fa-solid fa-wave-square', text: '1310/1550nm wavelength' },
                { icon: 'fa-solid fa-ruler', text: 'Up to 100km range' }
            ]
        },
        {
            id: 'fiber-cable-mm',
            name: 'Multi-Mode Fiber Cable',
            category: 'fiber',
            image: 'assets/img/products/fiber-cable-mm.jpg',
            description: 'Cost-effective multi-mode fiber cable ideal for short-distance, high-speed networks.',
            features: [
                'High bandwidth',
                'Cost-effective',
                'Easy installation',
                'Reliable performance'
            ],
            specs: [
                { icon: 'fa-solid fa-arrows-left-right', text: '50/125μm core/cladding' },
                { icon: 'fa-solid fa-wave-square', text: '850/1300nm wavelength' },
                { icon: 'fa-solid fa-ruler', text: 'Up to 2km range' }
            ]
        },
        {
            id: 'antenna-4g',
            name: '4G/LTE Antenna',
            category: 'telecom',
            image: 'assets/img/products/antenna.jpg',
            description: 'High-gain 4G/LTE antenna for enhanced mobile network coverage.',
            features: [
                'Wide frequency range',
                'High gain design',
                'Weather-resistant',
                'Easy mounting'
            ],
            specs: [
                { icon: 'fa-solid fa-broadcast-tower', text: '698-2700 MHz' },
                { icon: 'fa-solid fa-arrows-up-down', text: '12dBi gain' },
                { icon: 'fa-solid fa-bolt', text: 'N-type connector' }
            ]
        },
        {
            id: 'cctv-dome',
            name: 'IP Dome Camera',
            category: 'security',
            image: 'assets/img/products/dome-camera.jpg',
            description: 'Professional-grade IP dome camera with advanced features for surveillance.',
            features: [
                'Full HD resolution',
                'Night vision',
                'Motion detection',
                'Weather-proof'
            ],
            specs: [
                { icon: 'fa-solid fa-camera', text: '4MP resolution' },
                { icon: 'fa-solid fa-moon', text: '30m IR range' },
                { icon: 'fa-solid fa-shield', text: 'IP67 rated' }
            ]
        },
        {
            id: 'network-switch',
            name: 'Managed Switch',
            category: 'networking',
            image: 'assets/img/products/switch.jpg',
            description: 'Enterprise-grade managed switch with advanced networking features.',
            features: [
                'VLAN support',
                'QoS management',
                'Port mirroring',
                'Link aggregation'
            ],
            specs: [
                { icon: 'fa-solid fa-network-wired', text: '24 Gigabit ports' },
                { icon: 'fa-solid fa-bolt', text: 'PoE+ support' },
                { icon: 'fa-solid fa-memory', text: '128Gb switching capacity' }
            ]
        },
        {
            id: 'projector-4k',
            name: '4K Projector',
            category: 'audio-visual',
            image: 'assets/img/products/projector.jpg',
            description: 'Professional 4K projector for immersive visual experiences.',
            features: [
                '4K UHD resolution',
                'HDR support',
                'Laser light source',
                'Flexible installation'
            ],
            specs: [
                { icon: 'fa-solid fa-display', text: '3840x2160 resolution' },
                { icon: 'fa-solid fa-sun', text: '5000 ANSI lumens' },
                { icon: 'fa-solid fa-clock', text: '20,000hrs lifetime' }
            ]
        }
    ]
};
