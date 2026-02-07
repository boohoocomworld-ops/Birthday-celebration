// script.js

// Function to create confetti effect
function startConfetti() {
    const colors = ['#FF0', '#FF5C00', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function confettiParticle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 5 + 1;
        this.speed = Math.random() * 3 + 1;
        this.angle = Math.random() * 2 * Math.PI;
    }

    const particles = Array.from({ length: 100 }, () => new confettiParticle());

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.speed * Math.cos(p.angle);
            p.y += p.speed * Math.sin(p.angle);
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(draw);
    }

    draw();
}

// Function to display interactive greeting
function displayGreeting() {
    const greeting = document.createElement('div');
    greeting.textContent = 'Happy Birthday! 🎉';
    greeting.style.position = 'absolute';
    greeting.style.top = '50%';
    greeting.style.left = '50%';
    greeting.style.transform = 'translate(-50%, -50%)';
    greeting.style.fontSize = '3em';
    greeting.style.color = '#FF69B4';
    document.body.appendChild(greeting);
}

// Start everything
startConfetti();
displayGreeting();