// Slot Machine Functionality
document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spin-button');
    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');
    const reels = document.querySelectorAll('.reel');

    const services = [
        {
            name: 'Payment Processing',
            description: 'Fast, secure, and cost-effective solutions.',
            link: '#payment-processing'
        },
        {
            name: 'POS Systems',
            description: 'Reliable and scalable systems.',
            link: '#pos-systems'
        },
        {
            name: 'Merchant Analytics',
            description: 'Actionable insights for your business.',
            link: '#merchant-analytics'
        },
        // Additional services can be added here
        {
            name: 'Fraud Protection',
            description: 'Protect your business from fraudulent activities.',
            link: '#fraud-protection'
        },
        {
            name: 'eCommerce Solutions',
            description: 'Seamless online payment integrations.',
            link: '#ecommerce-solutions'
        },
        {
            name: 'Customer Support',
            description: '24/7 dedicated support for your needs.',
            link: '#customer-support'
        }
    ];

    // Function to get a random service
    function getRandomService() {
        return services[Math.floor(Math.random() * services.length)];
    }

    // Function to spin the reels
    function spinReels() {
        reels.forEach((reel, index) => {
            reel.classList.add('spinning');
            // Simulate spinning delay
            setTimeout(() => {
                const service = getRandomService();
                const serviceCard = reel.querySelector('.service-card');
                serviceCard.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
                reel.setAttribute('data-service', service.name.toLowerCase().replace(' ', '-'));
                reel.classList.remove('spinning');
                // Highlight effect
                serviceCard.classList.add('highlight');
                setTimeout(() => {
                    serviceCard.classList.remove('highlight');
                }, 500);
                // Make service card clickable
                serviceCard.parentElement.onclick = () => {
                    window.location.href = service.link;
                };
            }, 1000 + index * 500); // Stagger the stop time for each reel
        });
    }

    spinButton.addEventListener('click', spinReels);

    // Up and Down Navigation
    function moveReel(direction) {
        reels.forEach((reel) => {
            let currentIndex = services.findIndex(service => service.name.toLowerCase().replace(' ', '-') === reel.getAttribute('data-service'));
            if (direction === 'up') {
                currentIndex = (currentIndex - 1 + services.length) % services.length;
            } else if (direction === 'down') {
                currentIndex = (currentIndex + 1) % services.length;
            }
            const service = services[currentIndex];
            const serviceCard = reel.querySelector('.service-card');
            serviceCard.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
            reel.setAttribute('data-service', service.name.toLowerCase().replace(' ', '-'));
            // Highlight effect
            serviceCard.classList.add('highlight');
            setTimeout(() => {
                serviceCard.classList.remove('highlight');
            }, 500);
            // Make service card clickable
            serviceCard.parentElement.onclick = () => {
                window.location.href = service.link;
            };
        });
    }

    upButton.addEventListener('click', () => moveReel('up'));
    downButton.addEventListener('click', () => moveReel('down'));

    // Initialize clickable service cards
    reels.forEach((reel) => {
        const service = getRandomService();
        const serviceCard = reel.querySelector('.service-card');
        serviceCard.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
        reel.setAttribute('data-service', service.name.toLowerCase().replace(' ', '-'));
        serviceCard.parentElement.onclick = () => {
            window.location.href = service.link;
        };
    });

    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const slotMachineSection = document.querySelector('.slot-machine');

    slotMachineSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    slotMachineSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchEndX < touchStartX - 50) {
            // Swipe Left
            spinReels();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe Right
            // You can define what happens on swipe right if needed
        }
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple HTML5 validation
        if (contactForm.checkValidity()) {
            // You can handle form submission here (e.g., send data to server)
            alert('Thank you! Your message has been received.');
            contactForm.reset();
        } else {
            // Highlight the invalid fields
            contactForm.reportValidity();
        }
    });
});
    
