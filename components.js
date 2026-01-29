// components.js - ملف المكونات المنفصل

const components = {
    // صفحة "عني"
    about: `
        <section id="about" class="section">
            <h2 class="section-title"><i class="fas fa-user-tie"></i> نبذة عني</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>سُـديم الشمري</h3>
                    <p><strong>خبيرة معتمدة في الأمن السيبراني المتقدم والذكاء الاصطناعي</strong></p>
                    <p>أطور حلولاً أمنية ذكية تجمع بين خبرة الأمن السيبراني المتقدم وتقنيات الذكاء الاصطناعي الحديثة، لإنشاء أنظمة استباقية تحمي المنظمات من التهديدات الإلكترونية المتطورة.</p>
                    
                    <div class="specialization">
                        <h4><i class="fas fa-star"></i> التخصصات الرئيسية:</h4>
                        <div class="specialties">
                            <span class="specialty"><i class="fas fa-shield-alt"></i> الأمن السيبراني الشامل</span>
                            <span class="specialty"><i class="fas fa-robot"></i> الذكاء الاصطناعي للأمن</span>
                            <span class="specialty"><i class="fas fa-code"></i> بناء المنصات الذكية</span>
                            <span class="specialty"><i class="fas fa-chart-line"></i> التحليلات الأمنية المتقدمة</span>
                        </div>
                    </div>

                    <div class="vision-box">
                        <h4><i class="fas fa-eye"></i> رؤيتي:</h4>
                        <p>"أؤمن بأن الأمن السيبراني الفعال ليس مجرد حاجز دفاعي، بل نظام ذكي يتعلم ويتكيف ويتنبأ، وهذا بالضبط ما أسعى لبنائه: أنظمة أمنية حية تنمو مع نمو تهديدات العالم الرقمي."</p>
                    </div>
                </div>
                
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">مشروع أمني</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">3+</div>
                        <div class="stat-label">سنوات خبرة</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">رضا عملاء</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">دعم فني</div>
                    </div>
                </div>
            </div>
        </section>
    `,

    // صفحة "الخدمات"
    services: `
        <section id="services" class="section">
            <h2 class="section-title"><i class="fas fa-laptop-code"></i> حُـزْمَة الخدمات</h2>
            
            <div class="services-tabs">
                <button class="tab-btn active" onclick="showServiceTab('security')">🔒 الأمن السيبراني</button>
                <button class="tab-btn" onclick="showServiceTab('ai')">🤖 الذكاء الاصطناعي</button>
                <button class="tab-btn" onclick="showServiceTab('platforms')">🌐 بناء المنصات</button>
            </div>

            <div id="security-tab" class="tab-content active">
                <h3><i class="fas fa-shield-halved"></i> الخدمات الأمنية الشاملة</h3>
                <div class="services-grid">
                    <div class="service-card">
                        <h4><i class="fas fa-search"></i> التقييم والتدقيق</h4>
                        <ul>
                            <li>تحليل الفجوات الأمنية</li>
                            <li>اختبار الاختراق</li>
                            <li>مراجعة الأكواد</li>
                            <li>تقييم الامتثال</li>
                        </ul>
                    </div>
                    
                    <div class="service-card">
                        <h4><i class="fas fa-lock"></i> الحماية والمراقبة</h4>
                        <ul>
                            <li>أنظمة كشف التسلل</li>
                            <li>مراقبة التهديدات</li>
                            <li>إدارة الهوية</li>
                            <li>حماية الأجهزة</li>
                        </ul>
                    </div>
                    
                    <div class="service-card">
                        <h4><i class="fas fa-first-aid"></i> الاستجابة والتعافي</h4>
                        <ul>
                            <li>خطط الاستجابة</li>
                            <li>تحليل الأدلة</li>
                            <li>استعادة الأنظمة</li>
                            <li>تدريب الفرق</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="ai-tab" class="tab-content">
                <h3><i class="fas fa-robot"></i> خدمات الذكاء الاصطناعي</h3>
                <div class="services-grid">
                    <div class="service-card">
                        <h4><i class="fas fa-brain"></i> الأمن الذكي</h4>
                        <ul>
                            <li>نماذج ML للكشف</li>
                            <li>تحليل السلوكيات</li>
                            <li>أنظمة UEBA</li>
                            <li>أدوات مكافحة الاحتيال</li>
                        </ul>
                    </div>
                    
                    <div class="service-card">
                        <h4><i class="fas fa-cogs"></i> الأتمتة الذكية</h4>
                        <ul>
                            <li>روبوتات SOAR</li>
                            <li>مساعدات ذكية</li>
                            <li>أتمتة الاستجابة</li>
                            <li>تحليل بالزمن الحقيقي</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="platforms-tab" class="tab-content">
                <h3><i class="fas fa-layer-group"></i> بناء المنصات</h3>
                <div class="services-grid">
                    <div class="service-card">
                        <h4><i class="fas fa-desktop"></i> منصات متكاملة</h4>
                        <ul>
                            <li>منصات SIEM/SOAR</li>
                            <li>بوابات الثغرات</li>
                            <li>أنظمة إدارة التهديدات</li>
                            <li>منصات المحاكاة</li>
                        </ul>
                    </div>
                    
                    <div class="service-card">
                        <h4><i class="fas fa-code"></i> تطبيقات وحلول</h4>
                        <ul>
                            <li>APIs أمنية</li>
                            <li>تطبيقات جوال</li>
                            <li>منصات تدريب</li>
                            <li>حلول بيانات ضخمة</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,

    // صفحة "المشاريع"
    projects: `
        <section id="projects" class="section">
            <h2 class="section-title"><i class="fas fa-project-diagram"></i> محفظة المشاريع</h2>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-header">
                        <h3><i class="fas fa-shield-alt"></i> الدرع الذكي المتقدم</h3>
                        <span class="project-badge">SIEM ذكي</span>
                    </div>
                    <div class="project-body">
                        <p>منصة متكاملة لإدارة الأمن مدعومة بالذكاء الاصطناعي للكشف الاستباقي عن التهديدات.</p>
                        <div class="project-tech">
                            <span>Python</span>
                            <span>ML</span>
                            <span>React</span>
                            <span>Elastic Stack</span>
                        </div>
                    </div>
                    <div class="project-footer">
                        <button class="project-btn" onclick="viewProjectDetails(1)"><i class="fas fa-eye"></i> التفاصيل</button>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-header">
                        <h3><i class="fas fa-robot"></i> الحارس الافتراضي</h3>
                        <span class="project-badge">مساعد ذكي</span>
                    </div>
                    <div class="project-body">
                        <p>مساعد ذكي يدعم فرق الأمن السيبراني بالرد التلقائي وتحليل التهديدات.</p>
                        <div class="project-tech">
                            <span>NLP</span>
                            <span>Chatbot</span>
                            <span>Node.js</span>
                            <span>Azure AI</span>
                        </div>
                    </div>
                    <div class="project-footer">
                        <button class="project-btn" onclick="viewProjectDetails(2)"><i class="fas fa-eye"></i> التفاصيل</button>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-header">
                        <h3><i class="fas fa-graduation-cap"></i> أكاديمية الأمن</h3>
                        <span class="project-badge">منصة تدريب</span>
                    </div>
                    <div class="project-body">
                        <p>منصة تفاعلية للتدريب الأمني مع معامل افتراضية ومحاكاة الهجمات.</p>
                        <div class="project-tech">
                            <span>Vue.js</span>
                            <span>Docker</span>
                            <span>Labs</span>
                            <span>Gamification</span>
                        </div>
                    </div>
                    <div class="project-footer">
                        <button class="project-btn" onclick="viewProjectDetails(3)"><i class="fas fa-eye"></i> التفاصيل</button>
                    </div>
                </div>
            </div>
        </section>
    `,

    // صفحة "التواصل"
    contact: `
        <section id="contact" class="section">
            <h2 class="section-title"><i class="fas fa-envelope"></i> التواصل المهني الآمن</h2>
            
            <div class="contact-info">
                <p><i class="fas fa-info-circle"></i> لحماية الخصوصية والأمان، أتاح طرق التواصل الآمنة التالية:</p>
                
                <div class="contact-methods">
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h4>البريد الإلكتروني</h4>
                        <p>للاستفسارات والتفاصيل الرسمية</p>
                        <button class="contact-btn" onclick="showContactForm()">
                            <i class="fas fa-paper-plane"></i> إرسال بريد
                        </button>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <h4>LinkedIn</h4>
                        <p>للتواصل الاحترافي والشبكات</p>
                        <button class="contact-btn" onclick="openLinkedIn()">
                            <i class="fab fa-linkedin"></i> زيارة الملف
                        </button>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <h4>جدولة اجتماع</h4>
                        <p>اجتماعات افتراضية مسبقة المواعيد</p>
                        <button class="contact-btn" onclick="scheduleMeeting()">
                            <i class="fas fa-video"></i> جدولة الآن
                        </button>
                    </div>
                </div>
                
                <div class="contact-form-container" id="contactForm" style="display: none;">
                    <h3><i class="fas fa-edit"></i> نموذج التواصل</h3>
                    <form id="messageForm">
                        <div class="form-group">
                            <label for="name">الاسم الكامل:</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">البريد الإلكتروني:</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">الموضوع:</label>
                            <select id="subject">
                                <option value="consultation">استشارة أمنية</option>
                                <option value="project">مشروع جديد</option>
                                <option value="partnership">شراكة</option>
                                <option value="other">أخرى</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">الرسالة:</label>
                            <textarea id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i> إرسال الرسالة
                        </button>
                    </form>
                </div>
                
                <div class="security-note">
                    <p><i class="fas fa-lock"></i> <strong>ملاحظة:</strong> يتم التعامل مع جميع الرسائل بسرية تامة وفق أعلى معايير الأمن السيبراني.</p>
                </div>
            </div>
        </section>
    `
};
