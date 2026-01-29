function loadComponent(name) {
    const container = document.getElementById('dynamic-content');
    container.style.opacity = 0;
    setTimeout(() => {
        if (components[name]) {
            container.innerHTML = components[name];
            container.style.opacity = 1;
            decodeEffect();
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

// بروتوكول الحماية الأمني (منع F12 و Ctrl+U)
document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('about');
    // لإنشاء تأثير النجوم المتساقطة ديناميكيا
    const starsBackground = document.querySelector('.stars-background');
    for (let i = 0; i < 100; i++) { // عدد النجوم
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsBackground.appendChild(star);
    }
    // إضافة نمط النجوم المتساقطة (يحتاج إلى CSS إضافي)
    const style = document.createElement('style');
    style.innerHTML = `
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: twinkle 1.5s infinite alternate;
            box-shadow: 0 0 5px white;
            width: 2px;
            height: 2px;
        }

        @keyframes twinkle {
            0% { opacity: 0.5; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes stars-fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(2000px); } /* لجعلها تتساقط للأسفل */
        }
    `;
    document.head.appendChild(style);
});
