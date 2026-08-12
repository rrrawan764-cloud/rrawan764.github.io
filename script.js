/**
 * RAWAN TECH - ملف البرمجيات الرئيسي
 * يتعامل مع التفاعلات الأساسية في الموقع
 */

(function() {
    'use strict';

    // ============================
    // 1. قائمة الهاتف
    // ============================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });

        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('open') && 
                !navLinks.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }

    // ============================
    // 2. عدادات الإحصائيات
    // ============================
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounters() {
        statNumbers.forEach(el => {
            const target = parseFloat(el.dataset.count);
            if (isNaN(target)) return;

            const duration = 2000;
            const start = performance.now();
            const isFloat = target % 1 !== 0;

            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * target;

                if (isFloat) {
                    el.textContent = current.toFixed(1);
                } else {
                    el.textContent = Math.floor(current);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = isFloat ? target.toFixed(1) : Math.floor(target);
                }
            }

            requestAnimationFrame(update);
        });
    }

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(heroStats);
    }

    // ============================
    // 3. زر العودة للأعلى
    // ============================
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================
    // 4. التنقل النشط
    // ============================
    const navLinksAll = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ============================
    // 5. الدردشة
    // ============================
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.querySelector('.chat-messages');

    if (chatButton && chatModal) {
        chatButton.addEventListener('click', function() {
            chatModal.classList.toggle('open');
        });

        if (chatClose) {
            chatClose.addEventListener('click', function() {
                chatModal.classList.remove('open');
            });
        }

        document.addEventListener('click', function(e) {
            if (chatModal.classList.contains('open') && 
                !chatModal.contains(e.target) && 
                !chatButton.contains(e.target)) {
                chatModal.classList.remove('open');
            }
        });

        function sendMessage() {
            if (!chatInput || !chatMessages) return;
            const text = chatInput.value.trim();
            if (!text) return;

            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0');
            userMsg.innerHTML = `
                <div class="message-content"><p>${escapeHtml(text)}</p></div>
                <div class="message-time">${timeStr}</div>
            `;
            chatMessages.appendChild(userMsg);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'message bot';
                const botNow = new Date();
                const botTime = botNow.getHours().toString().padStart(2, '0') + ':' + 
                                botNow.getMinutes().toString().padStart(2, '0');
                botMsg.innerHTML = `
                    <div class="message-content"><p>شكراً لتواصلك! سأرد عليك قريباً.</p></div>
                    <div class="message-time">${botTime}</div>
                `;
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }

        if (chatSend) {
            chatSend.addEventListener('click', sendMessage);
        }

        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') sendMessage();
            });
        }
    }

    // ============================
    // 6. نماذج الإرسال
    // ============================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('تم إرسال طلبك بنجاح! سأتواصل معك خلال 24 ساعة.', 'success');
            this.reset();
        });
    }

    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (input && input.value.trim()) {
                showToast('تم الاشتراك في النشرة البريدية بنجاح!', 'success');
                input.value = '';
            }
        });
    });

    // ============================
    // 7. دالة عرض الإشعارات
    // ============================
    function showToast(message, type = 'info') {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        const colors = {
            success: '#e91e63',
            error: '#f87171',
            info: '#60a5fa',
            warning: '#fbbf24'
        };
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--dark);
            border: 1px solid ${colors[type] || colors.info};
            border-right: 4px solid ${colors[type] || colors.info};
            padding: 16px 24px;
            border-radius: 12px;
            color: #fff;
            font-size: 14px;
            font-family: 'Tajawal', sans-serif;
            z-index: 9999;
            max-width: 400px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
            animation: slideInRight 0.3s ease;
            direction: rtl;
        `;
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }, 4000);
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    console.log('RAWAN TECH - الموقع جاهز للاستخدام 🚀');

})();
