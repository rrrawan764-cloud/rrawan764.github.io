// تفعيل الموقع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل القائمة المتحركة على الجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // تغيير لون شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.98)';
            navbar.style.padding = '0.8rem 0';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
            navbar.style.padding = '1.2rem 0';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // إظهار/إخفاء زر العودة للأعلى
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });
    
    // تفعيل الروابط النشطة في شريط التنقل
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function activateNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', activateNavItem);
    
    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
            // مثلاً باستخدام Formspree أو خدمة مشابهة
            
            // عرض رسالة نجاح
            showNotification('شكراً لك! سنتواصل معك قريباً.', 'success');
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }
    
    // تأثير التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // زر العودة للأعلى
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // تأثيرات الكروت عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.service-card, .course-card, .cert-card, .blog-card').forEach(card => {
        observer.observe(card);
    });
    
    // وظيفة عرض الإشعارات
    function showNotification(message, type = 'info') {
        // إزالة أي إشعارات سابقة
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // إضافة الإشعار إلى الصفحة
        document.body.appendChild(notification);
        
        // إظهار الإشعار
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // إغلاق الإشعار عند النقر على زر الإغلاق
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // إزالة الإشعار تلقائياً بعد 5 ثوانٍ
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }
    
    // إضافة أنماط الإشعارات
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: var(--dark-color);
            color: var(--white-color);
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            z-index: 9999;
            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            border-right: 4px solid var(--primary-color);
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification.success {
            border-right-color: var(--success-color);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            flex: 1;
        }
        
        .notification-content i {
            font-size: 1.2rem;
            color: var(--primary-color);
        }
        
        .notification.success .notification-content i {
            color: var(--success-color);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--gray-color);
            cursor: pointer;
            font-size: 1rem;
            transition: var(--transition);
            padding: 0.2rem;
            border-radius: 4px;
        }
        
        .notification-close:hover {
            color: var(--white-color);
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
            .notification {
                left: 10px;
                right: 10px;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(notificationStyles);
    
    // تحميل الصفحة بنجاح
    console.log('موقع UCYBERS جاهز للتشغيل!');
});
