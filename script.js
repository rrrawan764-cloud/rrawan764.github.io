function loadComponent(name) {
    const container = document.getElementById('dynamic-content');
    container.style.opacity = 0;
    setTimeout(() => {
        if (components[name]) {
            container.innerHTML = components[name];
            container.style.opacity = 1;
            decodeEffect(); // تشغيل تأثير Matrix
        }
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick').includes(name)) btn.classList.add('active');
        });
    }, 200);
}

function decodeEffect() {
    const elements = document.querySelectorAll('h2, h3, p');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    elements.forEach(el => {
        const originalText = el.innerText;
        let iteration = 0;
        const interval = setInterval(() => {
            el.innerText = originalText.split("").map((letter, index) => {
                if(index < iteration) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join("");
            if(iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    });
}

// حماية الكود (Security Protocol)
document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))) return false;
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('about');
});
