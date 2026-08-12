/**
 * UCYBERS - ملف المكونات البرمجية
 * يحتوي على مكونات قابلة لإعادة الاستخدام
 */

// ============================
// مكون: عداد تزايدي
// ============================
class Counter {
    constructor(element, options = {}) {
        this.element = element;
        this.target = parseFloat(element.dataset.count) || 0;
        this.duration = options.duration || 2000;
        this.isFloat = this.target % 1 !== 0;
        this.current = 0;
        this.animated = false;
    }

    start() {
        if (this.animated) return;
        this.animated = true;
        
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            this.current = eased * this.target;
            
            if (this.isFloat) {
                this.element.textContent = this.current.toFixed(1);
            } else {
                this.element.textContent = Math.floor(this.current);
            }
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                this.element.textContent = this.isFloat ? this.target.toFixed(1) : Math.floor(this.target);
            }
        };
        
        requestAnimationFrame(update);
    }

    reset() {
        this.current = 0;
        this.animated = false;
        this.element.textContent = '0';
    }
}

// ============================
// مكون: نافذة منبثقة (Modal)
// ============================
class Modal {
    constructor(options = {}) {
        this.id = options.id || 'modal-' + Date.now();
        this.title = options.title || '';
        this.content = options.content || '';
        this.buttons = options.buttons || [];
        this.onOpen = options.onOpen || null;
        this.onClose = options.onClose || null;
        this.element = null;
        this.overlay = null;
        this.isOpen = false;
    }

    create() {
        // إنشاء الخلفية
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;

        // إنشاء النافذة
        this.element = document.createElement('div');
        this.element.className = 'modal-content';
        this.element.id = this.id;
        this.element.style.cssText = `
            background: var(--dark);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: scaleIn 0.3s ease;
        `;

        // رأس النافذة
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        `;
        header.innerHTML = `
            <h3 style="font-size: 22px; margin: 0;">${this.title}</h3>
            <button class="modal-close" style="
                background: none;
                border: none;
                color: var(--text-light);
                font-size: 24px;
                cursor: pointer;
                transition: var(--transition);
            ">&times;</button>
        `;

        // محتوى النافذة
        const body = document.createElement('div');
        body.className = 'modal-body';
        body.style.cssText = `
            margin-bottom: 20px;
            color: var(--text-light);
            line-height: 1.8;
        `;
        body.innerHTML = this.content;

        // أزرار النافذة
        const footer = document.createElement('div');
        footer.style.cssText = `
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        `;

        this.buttons.forEach(btn => {
            const button = document.createElement('button');
            button.textContent = btn.label;
            button.className = btn.class || 'btn btn-primary';
            button.style.cssText = btn.style || '';
            if (btn.onClick) {
                button.addEventListener('click', () => {
                    btn.onClick(this);
                });
            }
            footer.appendChild(button);
        });

        // تجميع المكونات
        this.element.appendChild(header);
        this.element.appendChild(body);
        this.element.appendChild(footer);
        this.overlay.appendChild(this.element);

        // إضافة إلى DOM
        document.body.appendChild(this.overlay);

        // أحداث الإغلاق
        const closeBtn = this.element.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });

        // إضافة أنماط الرسوم المتحركة
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from {
                    transform: scale(0.9);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    open() {
        if (!this.overlay) this.create();
        this.overlay.style.display = 'flex';
        this.isOpen = true;
        if (this.onOpen) this.onOpen(this);
    }

    close() {
        if (this.overlay) {
            this.overlay.style.display = 'none';
            this.isOpen = false;
            if (this.onClose) this.onClose(this);
        }
    }

    destroy() {
        if (this.overlay && this.overlay.parentNode) {
            this.overlay.remove();
        }
        this.element = null;
        this.overlay = null;
        this.isOpen = false;
    }

    setContent(content) {
        if (this.element) {
            const body = this.element.querySelector('.modal-body');
            if (body) body.innerHTML = content;
        }
    }
}

// ============================
// مكون: منزلق (Carousel)
// ============================
class Carousel {
    constructor(container, options = {}) {
        this.container = container;
        this.items = container.querySelectorAll('.carousel-item') || [];
        this.currentIndex = 0;
        this.autoPlay = options.autoPlay || false;
        this.interval = options.interval || 3000;
        this.loop = options.loop !== undefined ? options.loop : true;
        this.timer = null;
        this.isAnimating = false;
        
        this.init();
    }

    init() {
        if (this.items.length === 0) return;
        
        // إنشاء هيكل الكاروسيل
        this.container.style.cssText = `
            position: relative;
            overflow: hidden;
        `;

        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';
        wrapper.style.cssText = `
            display: flex;
            transition: transform 0.5s ease;
        `;

        this.items.forEach(item => {
            item.style.cssText = `
                flex: 0 0 100%;
                min-height: 200px;
            `;
            wrapper.appendChild(item);
        });

        this.container.innerHTML = '';
        this.container.appendChild(wrapper);
        this.wrapper = wrapper;

        // إضافة أزرار التنقل
        if (this.items.length > 1) {
            this.addControls();
        }

        // بدء التشغيل التلقائي
        if (this.autoPlay) {
            this.startAutoPlay();
        }

        // عرض العنصر الأول
        this.goTo(0);
    }

    addControls() {
        const controls = document.createElement('div');
        controls.className = 'carousel-controls';
        controls.style.cssText = `
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
            pointer-events: none;
        `;

        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-prev';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.style.cssText = `
            pointer-events: all;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0,0,0,0.6);
            border: 1px solid var(--border);
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-next';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.style.cssText = `
            pointer-events: all;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0,0,0,0.6);
            border: 1px solid var(--border);
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        nextBtn.addEventListener('click', () => this.next());

        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        this.container.appendChild(controls);

        // إضافة مؤشرات
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        indicators.style.cssText = `
            position: absolute;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
        `;

        this.items.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot';
            dot.style.cssText = `
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                cursor: pointer;
                transition: var(--transition);
            `;
            dot.addEventListener('click', () => this.goTo(index));
            indicators.appendChild(dot);
        });

        this.container.appendChild(indicators);
        this.indicators = indicators.querySelectorAll('.carousel-dot');
    }

    goTo(index) {
        if (this.isAnimating) return;
        if (index < 0) index = this.loop ? this.items.length - 1 : 0;
        if (index >= this.items.length) index = this.loop ? 0 : this.items.length - 1;
        
        this.isAnimating = true;
        this.currentIndex = index;
        this.wrapper.style.transform = `translateX(-${index * 100}%)`;
        
        // تحديث المؤشرات
        if (this.indicators) {
            this.indicators.forEach((dot, i) => {
                dot.style.background = i === index ? 'var(--primary)' : 'rgba(255,255,255,0.3)';
            });
        }

        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    next() {
        if (this.isAnimating) return;
        this.goTo(this.currentIndex + 1);
    }

    prev() {
        if (this.isAnimating) return;
        this.goTo(this.currentIndex - 1);
    }

    startAutoPlay() {
        if (this.timer) this.stopAutoPlay();
        this.timer = setInterval(() => {
            if (!this.isAnimating) {
                this.next();
            }
        }, this.interval);
    }

    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    destroy() {
        this.stopAutoPlay();
        this.container.innerHTML = '';
        this.items.forEach(item => {
            item.style.cssText = '';
            this.container.appendChild(item);
        });
    }
}

// ============================
// مكون: قائمة منسدلة متجاوبة
// ============================
class Dropdown {
    constructor(trigger, options = {}) {
        this.trigger = trigger;
        this.menu = trigger.querySelector('.dropdown-menu') || 
                    trigger.nextElementSibling;
        this.isOpen = false;
        this.closeOnClickOutside = options.closeOnClickOutside !== undefined ? 
                                   options.closeOnClickOutside : true;
        this.closeOnEscape = options.closeOnEscape !== undefined ? 
                            options.closeOnEscape : true;
        
        this.init();
    }

    init() {
        if (!this.menu) return;
        
        this.trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        if (this.closeOnClickOutside) {
            document.addEventListener('click', (e) => {
                if (this.isOpen && !this.trigger.contains(e.target)) {
                    this.close();
                }
            });
        }

        if (this.closeOnEscape) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
        }
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.menu.style.display = 'block';
        this.isOpen = true;
        this.trigger.setAttribute('aria-expanded', 'true');
    }

    close() {
        this.menu.style.display = 'none';
        this.isOpen = false;
        this.trigger.setAttribute('aria-expanded', 'false');
    }
}

// ============================
// مكون: علامات تبويب (Tabs)
// ============================
class Tabs {
    constructor(container, options = {}) {
        this.container = container;
        this.tabs = container.querySelectorAll('.tab-trigger') || [];
        this.panels = container.querySelectorAll('.tab-panel') || [];
        this.activeClass = options.activeClass || 'active';
        this.defaultTab = options.defaultTab || 0;
        
        this.init();
    }

    init() {
        if (this.tabs.length === 0 || this.panels.length === 0) return;
        
        // إخفاء جميع اللوحات
        this.panels.forEach(panel => {
            panel.style.display = 'none';
        });

        // عرض اللوحة الافتراضية
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                this.activate(index);
            });
        });

        this.activate(this.defaultTab);
    }

    activate(index) {
        // إزالة الفئة النشطة من جميع التبويبات
        this.tabs.forEach(tab => {
            tab.classList.remove(this.activeClass);
        });

        // إخفاء جميع اللوحات
        this.panels.forEach(panel => {
            panel.style.display = 'none';
        });

        // تفعيل التبويب واللوحة المختارة
        if (this.tabs[index]) {
            this.tabs[index].classList.add(this.activeClass);
        }
        if (this.panels[index]) {
            this.panels[index].style.display = 'block';
        }
    }

    destroy() {
        this.tabs.forEach(tab => {
            tab.classList.remove(this.activeClass);
        });
        this.panels.forEach(panel => {
            panel.style.display = '';
        });
    }
}

// ============================
// تصدير المكونات (للاستخدام في بيئات ES Module)
// ============================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Counter,
        Modal,
        Carousel,
        Dropdown,
        Tabs
    };
}

// ============================
// تهيئة المكونات تلقائياً عند تحميل الصفحة
// ============================
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة أي مكونات موجودة في الصفحة
    
    // تهيئة علامات التبويب
    const tabContainers = document.querySelectorAll('.tabs-container');
    tabContainers.forEach(container => {
        new Tabs(container);
    });

    // تهيئة القوائم المنسدلة
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        new Dropdown(trigger);
    });

    // تهيئة الكاروسيل
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(container => {
        const items = container.querySelectorAll('.carousel-item');
        if (items.length > 0) {
            new Carousel(container, {
                autoPlay: true,
                interval: 4000,
                loop: true
            });
        }
    });

    console.log('UCYBERS - تم تهيئة المكونات بنجاح ✅');
});
