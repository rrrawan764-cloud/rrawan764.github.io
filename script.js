// دالة تحميل المكونات
function loadComponent(name) {
    const container = document.getElementById('dynamic-content');
    container.style.opacity = 0;
    
    setTimeout(() => {
        if (components[name]) {
            container.innerHTML = components[name];
            container.style.opacity = 1;
            // تفعيل تأثير التشفير على العناوين الجديدة
            decodeEffect();
        }
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick').includes(name)) btn.classList.add('active');
        });
    }, 200);
}

// تأثير التشفير التلقائي (Matrix Effect)
function decodeEffect() {
    const elements = document.querySelectorAll('[data-decode], h2, h3');
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

// بروتوكول الحماية الأمني (Security Protocol)
document.onkeydown = function(e) {
    if(e.keyCode == 123) return false; // F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Inspect
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // View Source
};

// تشغيل النظام
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('about');
    console.log("%c RAWAN TECH SYSTEM: ENCRYPTED & SECURE ", "background: #ff003c; color: white; padding: 10px; border-radius: 5px;");
});
