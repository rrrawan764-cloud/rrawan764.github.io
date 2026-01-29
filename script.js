// دالة تشغيل الصوت
function playClickSound() {
    const sound = document.getElementById('clickSound');
    if (sound) {
        sound.currentTime = 0; // لإعادة تشغيل الصوت بسرعة
        sound.play();
    }
}

// دالة تحميل المكونات
function loadComponent(name) {
    const container = document.getElementById('dynamic-content');
    container.style.opacity = 0;
    
    setTimeout(() => {
        if (components[name]) {
            container.innerHTML = components[name];
            container.style.opacity = 1;
            decodeTextEffectOnLoad(); // تشفير عند التحميل
            addHoverDecryptEffect(); // تفعيل تشفير التمرير
        }
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            // لاحظي التغيير هنا لتجنب تكرار playClickSound
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(name)) btn.classList.add('active');
        });
    }, 200);
}

// تأثير التشفير الرقمي عند تحميل الصفحة (Matrix Effect)
function decodeTextEffectOnLoad() {
    const elements = document.querySelectorAll('h2, h3, p[data-decode]');
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

// تأثير تشفير النصوص عند التمرير بالفأرة (Hover Decrypt)
function addHoverDecryptEffect() {
    const decryptElements = document.querySelectorAll('[data-decrypt]'); // يمكن وضع هذا على h2, h3, p, div.cyber-card
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    decryptElements.forEach(el => {
        const originalText = el.innerText;
        let decryptInterval = null;

        el.addEventListener('mouseenter', () => {
            let iteration = 0;
            decryptInterval = setInterval(() => {
                el.innerText = originalText.split("").map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("");

                if (iteration >= originalText.length) clearInterval(decryptInterval);
                iteration += 1 / 3;
            }, 30);
        });

        el.addEventListener('mouseleave', () => {
            clearInterval(decryptInterval);
            el.innerText = originalText; // إعادة النص الأصلي عند إزالة الفأرة
        });
    });
}


// خلفية الماتريكس (Matrix Rain Effect)
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // يمكن إضافة أرقام أو رموز
const font_size = 16;
const columns = canvas.width / font_size;

const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function drawMatrixRain() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)'; // لون خلفية خفيف جداً
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = var_to_rgb('--matrix-green'); // لون الأخضر النيون
    ctx.font = font_size + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = latin.charAt(Math.floor(Math.random() * latin.length));
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// دالة لتحويل متغير CSS إلى قيمة RGB
function var_to_rgb(variable) {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue(variable).trim();
}

setInterval(drawMatrixRain, 35); // سرعة سقوط الماتريكس


// بروتوكول الحماية الأمني (Security Protocol)
document.onkeydown = function(e) {
    if(e.keyCode == 123) return false; // F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Inspect
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // View Source
};

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('about');
    console.log("%c RAWAN TECH SYSTEM: ONLINE & SECURE ", "background: #ff003c; color: white; padding: 10px; border-radius: 5px;");
});

// إعادة ضبط حجم الكانفاس عند تغيير حجم النافذة
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columns = canvas.width / font_size;
    drops.length = 0;
    for (let i = 0; i < columns; i++) drops[i] = 1;
});
