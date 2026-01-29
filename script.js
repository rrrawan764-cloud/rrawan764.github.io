// script.js - الملف الرئيسي للوظائف

// تحميل مكون
function loadComponent(componentName) {
    const contentDiv = document.getElementById('content');
    
    if (components[componentName]) {
        contentDiv.innerHTML = components[componentName];
        
        // تحديث القائمة النشطة
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${componentName}`) {
                link.classList.add('active');
            }
        });
        
        // إذا كانت صفحة الخدمات، اجعل التبويب الأول نشطاً
        if (componentName === 'services') {
            showServiceTab('security');
        }
    } else {
        contentDiv.innerHTML = `<div class="error">المكون غير موجود</div>`;
    }
}

// عرض تبويب الخدمات
function showServiceTab(tabName) {
    // إخفاء جميع التبويبات
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إزالة النشط من جميع الأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // إظهار التبويب المحدد
    const tab = document.getElementById(`${tabName}-tab`);
    if (tab) {
        tab.classList.add('active');
    }
    
    // تفعيل الزر المحدد
    const btn = Array.from(document.querySelectorAll('.tab-btn'))
        .find(btn => btn.textContent.includes(getTabNameArabic(tabName)));
    if (btn) {
        btn.classList.add('active');
    }
}

function getTabNameArabic(tabName) {
    const tabs = {
        'security': 'الأمن السيبراني',
        'ai': 'الذكاء الاصطناعي',
        'platforms': 'بناء المنصات'
    };
    return tabs[tabName] || tabName;
}

// عرض تفاصيل المشروع
function viewProjectDetails(projectId) {
    const projects = {
        1: {
            title: "الدرع الذكي المتقدم",
            description: "منصة SIEM متكاملة مدعومة بالذكاء الاصطناعي للكشف الاستباقي عن التهديدات الأمنية.",
            features: ["تحليل تلقائي للتهديدات", "تقارير ذكية", "تكامل مع أنظمة متعددة", "واجهة مستخدم تفاعلية"],
            technologies: ["Python", "Machine Learning", "React", "Elastic Stack", "Docker"],
            duration: "3 أشهر"
        },
        2: {
            title: "الحارس الافتراضي",
            description: "مساعد ذكي يدعم فرق الأمن السيبراني بالرد التلقائي على الاستفسارات وتحليل التهديدات.",
            features: ["معالجة اللغة الطبيعية", "ردود تلقائية", "تحليل سياقي", "تكامل مع Slack/Teams"],
            technologies: ["NLP", "Node.js", "Azure AI", "MongoDB", "WebSocket"],
            duration: "2 شهر"
        },
        3: {
            title: "أكاديمية الأمن التفاعلية",
            description: "منصة تدريبية تفاعلية لأمن المعلومات مع معامل افتراضية ومحاكاة الهجمات.",
            features: ["معامل افتراضية", "محاكاة هجمات", "تقييم تلقائي", "شهادات معتمدة"],
            technologies: ["Vue.js", "Docker", "Kubernetes", "Cybersecurity Labs", "Gamification"],
            duration: "4 أشهر"
        }
    };
    
    const project = projects[projectId];
    if (project) {
        const modal = `
            <div class="modal-overlay" id="projectModal">
                <div class="modal">
                    <div class="modal-header">
                        <h3>${project.title}</h3>
                        <button onclick="closeModal()"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>الوصف:</strong> ${project.description}</p>
                        
                        <h4><i class="fas fa-list-check"></i> الميزات:</h4>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        
                        <h4><i class="fas fa-code"></i> التقنيات:</h4>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        
                        <p><strong><i class="fas fa-clock"></i> المدة:</strong> ${project.duration}</p>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-btn" onclick="closeModal()">إغلاق</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modal);
        
        // إضافة أنماط المودال
        const style = document.createElement('style');
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .modal {
                background: #1a1a2e;
                border-radius: 15px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                border: 1px solid #00b4db;
            }
            
            .modal-header {
                background: #00b4db;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 15px 15px 0 0;
            }
            
            .modal-header h3 {
                color: white;
                margin: 0;
            }
            
            .modal-header button {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-body h4 {
                color: #4fc3f7;
                margin: 20px 0 10px;
            }
            
            .modal-body ul {
                padding-right: 20px;
            }
            
            .modal-body li {
                margin-bottom: 8px;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 10px 0;
            }
            
            .tech-tags span {
                background: rgba(0, 180, 219, 0.2);
                padding: 5px 10px;
                border-radius: 15px;
                border: 1px solid #00b4db;
            }
            
            .modal-footer {
                padding: 15px 20px;
                text-align: center;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .modal-btn {
                background: #00b4db;
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 20px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.remove();
    }
}

// وظائف التواصل
function showContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

function openLinkedIn() {
    alert("يمكنك زيارة ملفي على LinkedIn:\nhttps://linkedin.com/in/sadeem-cyber-ai");
}

function scheduleMeeting() {
    alert("لجدولة اجتماع:\n1. أرسل بريداً إلكترونياً\n2. حدد 3 أوقات مناسبة\n3. اذكر طبيعة الاجتماع\n\nسيتم الرد خلال 24 ساعة");
}

// إرسال النموذج
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'messageForm') {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // هنا يمكن إضافة كود إرسال البريد
            alert(`شكراً ${name}!\n\nتم استلام رسالتك بنجاح. سأرد عليك خلال 24 ساعة على ${email}`);
            
            // إعادة تعيين النموذج
            e.target.reset();
            const contactForm = document.getElementById('contactForm');
            if (contactForm) contactForm.style.display = 'none';
        }
    });
    
    // إضافة أحداث للنقر على روابط القائمة
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const component = this.getAttribute('href').substring(1);
            loadComponent(component);
            
            // التمرير للأعلى
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
