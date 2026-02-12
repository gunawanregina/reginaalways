// Function to show yes message with amazing effects
function showYesMessage() {
    const cta = document.querySelector('.cta-section');
    
    cta.style.transition = 'all 0.5s ease';
    cta.innerHTML = `
        <h2 style="font-size: 2.5em; color: #ff6b9d; margin-bottom: 20px; animation: bounce 1s ease;">
            YES! ❤️❤️❤️
        </h2>
        <p style="font-size: 1.3em; color: #d63384; margin: 20px 0;">
            Aku sangat senang! Terima kasih telah memilihku!
        </p>
        <p style="font-size: 1.1em; color: #666;">
            Aku tidak sabar untuk merayakan momen spesial itu bersama kamu! 💕
        </p>
        <button onclick="createMassiveHearts()" class="yes-button" style="margin-top: 30px;">
            Buat Perayaan! 🎉
        </button>
    `;
    
    // Trigger massive heart effect
    createMassiveHearts();
}

// Massive Heart Falling Effect
function createMassiveHearts() {
    const container = document.getElementById('hearts-container');
    const heartVariants = ['❤️', '💕', '💖', '💝', '💗', '💓'];
    
    // Create 100 hearts falling at different speeds
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            const randomVariant = heartVariants[Math.floor(Math.random() * heartVariants.length)];
            heart.innerHTML = randomVariant;
            heart.className = 'heart-animation-enhanced';
            
            // Random horizontal position
            const startX = Math.random() * window.innerWidth;
            heart.style.left = startX + 'px';
            heart.style.top = '-50px';
            
            // Random size
            const size = Math.random() * 3 + 1.5;
            heart.style.fontSize = size + 'em';
            
            // Random colors
            const colors = ['#ff6b9d', '#ff1493', '#ff69b4', '#ff85c0', '#ffb6d9', '#ffa8c5'];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random duration
            const duration = Math.random() * 3 + 2.5;
            heart.style.setProperty('--duration', duration + 's');
            
            // Random horizontal drift
            const drift = Math.random() * 200 - 100;
            heart.style.setProperty('--drift', drift + 'px');
            
            container.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 50); // Stagger hearts
    }
}

// Move button away when hovering
function moveButton(event) {
    const button = event.target;
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transition = 'all 0.2s ease';
    button.style.zIndex = '1000';
}

// Page load animation
window.addEventListener('load', () => {
    document.querySelectorAll('.animate-fade-in').forEach((el, index) => {
        el.style.animationDelay = (index * 0.2) + 's';
    });
});
