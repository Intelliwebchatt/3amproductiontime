document.getElementById("spinBtn").addEventListener("click", spinReels);
document.getElementById("upBtn").addEventListener("click", scrollUp);
document.getElementById("downBtn").addEventListener("click", scrollDown);

function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    
    const reels = [reel1, reel2, reel3];

    reels.forEach(reel => {
        let items = Array.from(reel.children);
        let randomIndex = Math.floor(Math.random() * items.length);
        let scrollAmount = randomIndex * -100;  // Adjust this for your layout
        reel.style.transform = `translateY(${scrollAmount}px)`;
    });
}

function scrollUp() {
    const reels = document.querySelectorAll('div[id^="reel"]');
    reels.forEach(reel => {
        let currentScroll = parseInt(reel.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
        let newScroll = currentScroll + 100;  // Adjust this for your layout
        reel.style.transform = `translateY(${newScroll}px)`;
    });
}

function scrollDown() {
    const reels = document.querySelectorAll('div[id^="reel"]');
    reels.forEach(reel => {
        let currentScroll = parseInt(reel.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
        let newScroll = currentScroll - 100;  // Adjust this for your layout
        reel.style.transform = `translateY(${newScroll}px)`;
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
