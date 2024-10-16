// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Slot Machine Functionality
    const spinButton = document.querySelector('.spin-btn');
    const upButton = document.querySelector('.up-btn');
    const downButton = document.querySelector('.down-btn');
    const reels = document.querySelectorAll('.reel');

    const services = [
        {
            title: 'Payment Processing',
            description: 'Fast, secure, and cost-effective solutions.',
            link: '#payment-processing'
        },
        {
            title: 'POS Systems',
            description: 'Reliable and scalable systems.',
            link: '#pos-systems'
        },
        {
            title: 'Merchant Analytics',
            description: 'Actionable insights for your business.',
            link: '#merchant-analytics'
        },
        {
            title: 'Customer Loyalty Programs',
            description: 'Boost repeat business with ease.',
            link: '#customer-loyalty'
        },
        {
            title: 'E-commerce Solutions',
            description: 'Expand your business online.',
            link: '#ecommerce'
        }
        // Add more services as needed
    ];

    function spinReels() {
        reels.forEach(function(reel) {
            reel.classList.add('spinning');
            setTimeout(function() {
                reel.classList.remove('spinning');
                updateReel(reel);
            }, 1000);
        });
    }

    function updateReel(reel) {
        const randomService = services[Math.floor(Math.random() * services.length)];
        reel.querySelector('a').textContent = randomService.title;
        reel.querySelector('a').setAttribute('href', randomService.link);
        reel.querySelector('p').textContent = randomService.description;
        // Flash effect
        reel.classList.add('flash');
        setTimeout(function() {
            reel.classList.remove('flash');
        }, 500);
    }

    function scrollReels(direction) {
        reels.forEach(function(reel) {
            let currentIndex = services.findIndex(service => service.title === reel.querySelector('a').textContent);
            if (direction === 'up') {
                currentIndex = (currentIndex - 1 + services.length) % services.length;
            } else {
                currentIndex = (currentIndex + 1) % services.length;
            }
            const newService = services[currentIndex];
            reel.querySelector('a').textContent = newService.title;
            reel.querySelector('a').setAttribute('href', newService.link);
            reel.querySelector('p').textContent = newService.description;
        });
    }

    spinButton.addEventListener('click', spinReels);

    upButton.addEventListener('click', function() {
        scrollReels('up');
    });

    downButton.addEventListener('click', function() {
        scrollReels('down');
    });

    // Form Validation
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});
