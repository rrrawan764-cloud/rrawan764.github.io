/* ============================================
   إعادة تعيين وإعدادات عامة
============================================ */
:root {
    /* الألوان الأساسية */
    --primary-color: #00ff9d;
    --primary-dark: #00cc7d;
    --primary-light: #33ffb1;
    --secondary-color: #0a192f;
    --secondary-dark: #020c1b;
    --secondary-light: #112240;
    --accent-color: #64ffda;
    --accent-dark: #52d9b8;
    
    /* ألوان النصوص */
    --text-primary: #e6f1ff;
    --text-secondary: #a8b2d1;
    --text-muted: #8892b0;
    
    /* ألوان الخلفيات */
    --bg-primary: #0a192f;
    --bg-secondary: #112240;
    --bg-card: #1a2b4a;
    --bg-overlay: rgba(10, 25, 47, 0.85);
    
    /* ألوان الحالة */
    --success-color: #00ff9d;
    --warning-color: #ffb347;
    --danger-color: #ff6b6b;
    --info-color: #4ecdc4;
    
    /* الظلال */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.4);
    
    /* التدريج */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 20px;
    --radius-full: 9999px;
    
    /* الانتقالات */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* المسافات */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Tajawal', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    direction: rtl;
}

/* ============================================
   التمرير المخصص
============================================ */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--secondary-dark);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}

/* ============================================
   الحاوية العامة
============================================ */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
}

@media (max-width: 768px) {
    .container {
        padding: 0 var(--space-md);
    }
}

/* ============================================
   شريط التنقل
============================================ */
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: var(--space-md) 0;
    transition: var(--transition-normal);
    border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.navbar.scrolled {
    padding: var(--space-sm) 0;
    background-color: rgba(10, 25, 47, 0.98);
}

.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* الشعار */
.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: var(--space-sm);
    transition: var(--transition-normal);
}

.logo:hover {
    transform: translateY(-2px);
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--secondary-color);
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-main {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1;
}

.logo-sub {
    font-size: 0.7rem;
    color: var(--text-muted);
    font-weight: 500;
}

/* روابط التنقل */
.nav-links {
    display: flex;
    list-style: none;
    gap: var(--space-lg);
    align-items: center;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    transition: var(--transition-normal);
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
    background-color: rgba(0, 255, 157, 0.1);
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 6px;
    height: 6px;
    background-color: var(--primary-color);
    border-radius: 50%;
}

/* القوائم المنسدلة */
.nav-dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--bg-card);
    border: 1px solid rgba(100, 255, 218, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: var(--transition-normal);
    box-shadow: var(--shadow-lg);
    z-index: 100;
}

.nav-dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: var(--transition-fast);
}

.dropdown-menu a:hover {
    background-color: rgba(0, 255, 157, 0.1);
    color: var(--primary-color);
}

/* أزرار التنقل */
.nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
}

.nav-phone {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition-normal);
}

.nav-phone:hover {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--primary-color);
    font-size: 1.5rem;
    cursor: pointer;
    padding: var(--space-sm);
    border-radius: var(--radius-sm);
    transition: var(--transition-normal);
}

.menu-toggle:hover {
    background-color: rgba(0, 255, 157, 0.1);
}

/* ============================================
   الأزرار
============================================ */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-xl);
    border: none;
    border-radius: var(--radius-md);
    font-family: 'Tajawal', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: var(--transition-normal);
}

.btn:hover::before {
    transform: translateX(100%);
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: var(--secondary-color);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: rgba(0, 255, 157, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.2);
}

.btn-small {
    padding: var(--space-sm) var(--space-lg);
    font-size: 0.9rem;
}

.btn-lg {
    padding: var(--space-lg) var(--space-2xl);
    font-size: 1.1rem;
}

.btn-block {
    width: 100%;
}

.btn-service,
.btn-course,
.btn-package,
.btn-cert {
    background-color: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid rgba(100, 255, 218, 0.2);
}

.btn-service:hover,
.btn-course:hover,
.btn-package:hover,
.btn-cert:hover {
    background-color: rgba(0, 255, 157, 0.1);
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.btn-service.emergency {
    background-color: var(--danger-color);
    color: white;
    border: none;
}

.btn-service.emergency:hover {
    background-color: #ff5252;
    transform: scale(1.05);
}

/* ============================================
   القسم الرئيسي (Hero)
============================================ */
.hero {
    position: relative;
    padding-top: 120px;
    padding-bottom: var(--space-3xl);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
    z-index: -2;
}

.cyber-grid {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(0, 255, 157, 0.1) 0%, transparent 50%);
    z-index: -1;
}

.hero .container {
    display: flex;
    align-items: center;
    gap: var(--space-3xl);
}

.hero-content {
    flex: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    background-color: rgba(0, 255, 157, 0.1);
    color: var(--primary-color);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-full);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: var(--space-xl);
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--space-lg);
    background: linear-gradient(45deg, var(--text-primary), var(--primary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.highlight {
    color: var(--primary-color);
    position: relative;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    right: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(0, 255, 157, 0.2);
    z-index: -1;
    border-radius: var(--radius-sm);
}

.hero-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-2xl);
    max-width: 600px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.btn-arrow {
    margin-right: var(--space-sm);
    transition: var(--transition-normal);
}

.btn-primary:hover .btn-arrow {
    transform: translateX(-5px);
}

.hero-features {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
}

.feature {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.feature i {
    color: var(--primary-color);
    font-size: 1.2rem;
}

/* المحطة الطرفية */
.hero-image {
    flex: 1;
}

.cyber-terminal {
    background-color: var(--secondary-dark);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(0, 255, 157, 0.2);
    box-shadow: var(--shadow-xl);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.terminal-header {
    background-color: var(--bg-card);
    padding: var(--space-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 255, 157, 0.1);
}

.terminal-dots {
    display: flex;
    gap: var(--space-sm);
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red { background-color: #ff5f56; }
.dot.yellow { background-color: #ffbd2e; }
.dot.green { background-color: #27ca3f; }

.terminal-title {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
}

.terminal-body {
    padding: var(--space-xl);
    font-family: 'Courier New', monospace;
    font-size: 1rem;
}

.terminal-line {
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.prompt {
    color: var(--primary-color);
    font-weight: bold;
}

.command {
    color: var(--text-primary);
}

.output {
    color: var(--success-color);
    margin-right: 25px;
}

.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* الإحصائيات */
.hero-stats {
    background-color: var(--bg-secondary);
    border-top: 1px solid rgba(0, 255, 157, 0.1);
    border-bottom: 1px solid rgba(0, 255, 157, 0.1);
    padding: var(--space-2xl) 0;
    margin-top: var(--space-2xl);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
}

.stat-card {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
}

.stat-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
}

.stat-content {
    flex: 1;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-color);
    line-height: 1;
    margin-bottom: var(--space-xs);
}

.stat-text {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* ============================================
   قسم الخدمات
============================================ */
.services {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-primary);
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    background-color: rgba(0, 255, 157, 0.1);
    color: var(--primary-color);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-full);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: var(--space-lg);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: var(--space-lg);
    color: var(--text-primary);
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* فئات الخدمات */
.service-category {
    margin-bottom: var(--space-3xl);
}

.category-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.category-icon {
    width: 80px;
    height: 80px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary-color);
    margin: 0 auto var(--space-lg);
}

.service-category h3 {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.service-category p {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

/* شبكة الخدمات */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-xl);
}

.service-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 157, 0.05), transparent);
    transform: translateX(-100%);
}

.service-card:hover::before {
    animation: shine 1.5s ease;
}

@keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-lg);
}

.service-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
}

.service-badge {
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.service-badge.new {
    background-color: var(--accent-color);
}

.service-card h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.service-card p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
}

.service-features {
    list-style: none;
    margin-bottom: var(--space-xl);
}

.service-features li {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.service-features i {
    color: var(--primary-color);
    font-size: 0.8rem;
}

.service-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
}

.service-price .price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary-color);
}

/* ============================================
   قسم الدورات
============================================ */
.courses {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-secondary);
}

/* أزرار التبويب */
.path-tabs {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-2xl);
    flex-wrap: wrap;
    justify-content: center;
}

.path-tab {
    padding: var(--space-md) var(--space-xl);
    background-color: var(--bg-card);
    border: 1px solid rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    font-family: 'Tajawal', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-normal);
}

.path-tab:hover {
    background-color: rgba(0, 255, 157, 0.1);
    color: var(--primary-color);
}

.path-tab.active {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-color: var(--primary-color);
}

/* محتوى التبويب */
.path-pane {
    display: none;
}

.path-pane.active {
    display: block;
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
}

.course-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
    display: flex;
    flex-direction: column;
}

.course-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.course-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
}

.course-level {
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.course-level.beginner {
    background-color: rgba(78, 205, 196, 0.2);
    color: var(--info-color);
}

.course-level.intermediate {
    background-color: rgba(255, 179, 71, 0.2);
    color: var(--warning-color);
}

.course-level.advanced {
    background-color: rgba(255, 107, 107, 0.2);
    color: var(--danger-color);
}

.course-level.certification {
    background-color: rgba(0, 255, 157, 0.2);
    color: var(--primary-color);
}

.course-duration {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.course-card h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    flex-grow: 1;
}

.course-card p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
    flex-grow: 1;
}

.course-meta {
    display: flex;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.course-meta span {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.course-price {
    margin-bottom: var(--space-lg);
}

.current-price {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--primary-color);
    display: block;
}

.original-price {
    font-size: 1.2rem;
    color: var(--text-muted);
    text-decoration: line-through;
    margin-right: var(--space-sm);
}

/* الباقات التعليمية */
.course-packages {
    margin-top: var(--space-3xl);
}

.packages-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: var(--space-2xl);
    color: var(--text-primary);
}

.packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
}

.package-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
    position: relative;
}

.package-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.package-card.featured {
    border-color: var(--primary-color);
    transform: translateY(-20px);
}

.package-badge {
    position: absolute;
    top: -12px;
    right: 50%;
    transform: translateX(50%);
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: var(--space-xs) var(--space-lg);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
}

.package-header {
    text-align: center;
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-xl);
    border-bottom: 1px solid rgba(0, 255, 157, 0.1);
}

.package-header h4 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.package-price .price {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-color);
    display: block;
}

.package-price .period {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.package-features {
    list-style: none;
    margin-bottom: var(--space-2xl);
}

.package-features li {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
    color: var(--text-secondary);
}

.package-features i {
    font-size: 0.9rem;
}

.package-features .fa-check {
    color: var(--primary-color);
}

.package-features .fa-times {
    color: var(--text-muted);
}

.btn-package {
    width: 100%;
    text-align: center;
}

.btn-package.featured {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
}

.btn-package.featured:hover {
    background-color: var(--primary-dark);
}

/* ============================================
   قسم الأكاديمية
============================================ */
.academy {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-primary);
    position: relative;
    overflow: hidden;
}

.academy-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(0, 255, 157, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    z-index: -1;
}

.academy-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
}

.feature-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    text-align: center;
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.feature-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
}

.feature-icon {
    width: 70px;
    height: 70px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--primary-color);
    margin: 0 auto var(--space-lg);
}

.feature-card h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.feature-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* مراحل التعلم */
.academy-process {
    margin-bottom: var(--space-3xl);
}

.academy-process h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: var(--space-2xl);
    color: var(--text-primary);
}

.process-steps {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    max-width: 900px;
}

.process-steps::before {
    content: '';
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(0, 255, 157, 0.3);
    z-index: 1;
}

.step {
    position: relative;
    z-index: 2;
    text-align: center;
    flex: 1;
}

.step-number {
    width: 60px;
    height: 60px;
    background-color: var(--bg-card);
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
    margin: 0 auto var(--space-lg);
    transition: var(--transition-normal);
}

.step:hover .step-number {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: scale(1.1);
}

.step-content h5 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.step-content p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.4;
}

/* معرض الإنجازات */
.achievements {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.achievements h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: var(--space-2xl);
    color: var(--text-primary);
}

.achievements-slider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
}

.achievement-card {
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.achievement-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
}

.achievement-content {
    position: relative;
}

.achievement-content i {
    position: absolute;
    top: -20px;
    right: -10px;
    font-size: 3rem;
    color: rgba(0, 255, 157, 0.1);
    z-index: 1;
}

.achievement-content p {
    position: relative;
    z-index: 2;
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--space-lg);
    font-style: italic;
}

.achievement-author {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
}

.achievement-author strong {
    color: var(--text-primary);
    font-size: 1.1rem;
}

.achievement-author span {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* ============================================
   قسم الهاكاثون
============================================ */
.hackathon {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-secondary);
}

.hackathon-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
}

.hackathon-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
}

.info-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.info-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
}

.info-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--space-lg);
}

.info-content h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.info-content p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
}

/* نموذج التسجيل */
.hackathon-registration {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.hackathon-registration h3 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.hackathon-registration p {
    color: var(--text-secondary);
    margin-bottom: var(--space-xl);
}

.registration-form {
    margin-bottom: var(--space-2xl);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
}

.form-group {
    margin-bottom: var(--space-lg);
}

.form-group label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: var(--space-sm);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    background-color: var(--bg-secondary);
    border: 1px solid rgba(0, 255, 157, 0.2);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-family: 'Tajawal', sans-serif;
    font-size: 1rem;
    transition: var(--transition-normal);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 255, 157, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-muted);
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
}

.checkbox-label input {
    width: auto;
}

/* حالة التسجيل */
.registration-status {
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.status-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-lg);
}

.status-header h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
}

.status-badge {
    padding: var(--space-xs) var(--space-md);
    background-color: var(--success-color);
    color: var(--secondary-color);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
}

.status-progress {
    margin-bottom: var(--space-lg);
}

.progress-bar {
    height: 8px;
    background-color: var(--bg-primary);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-bottom: var(--space-sm);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: var(--radius-full);
    transition: width 1s ease;
}

.progress-text {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.status-info {
    text-align: center;
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* ============================================
   قسم الشهادات
============================================ */
.certifications {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-primary);
}

.certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
}

.cert-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    text-align: center;
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cert-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.cert-logo {
    width: 80px;
    height: 80px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: var(--space-lg);
}

.cert-card h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.cert-card p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
    flex-grow: 1;
}

.cert-meta {
    display: flex;
    justify-content: center;
    gap: var(--space-xl);
    margin-bottom: var(--space-lg);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.cert-meta span {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.btn-cert {
    margin-top: auto;
}

/* خطوات الحصول على الشهادة */
.cert-process {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.cert-process h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: var(--space-2xl);
    color: var(--text-primary);
}

.cert-process .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-xl);
    position: relative;
}

.cert-process .process-steps::before {
    display: none;
}

.cert-process .step {
    text-align: center;
}

.cert-process .step-icon {
    width: 70px;
    height: 70px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--primary-color);
    margin: 0 auto var(--space-lg);
    transition: var(--transition-normal);
}

.cert-process .step:hover .step-icon {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: scale(1.1);
}

.cert-process .step h5 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.cert-process .step p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.4;
}

/* ============================================
   قسم المدونة
============================================ */
.blog {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-secondary);
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
}

.blog-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
    position: relative;
}

.blog-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-xl);
}

.blog-card.featured {
    grid-column: span 2;
}

.blog-image {
    height: 200px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    position: relative;
    overflow: hidden;
}

.image-overlay {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
}

.blog-category {
    padding: var(--space-xs) var(--space-md);
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--primary-color);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.blog-date {
    position: absolute;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background-color: var(--bg-primary);
    padding: var(--space-sm);
    border-radius: var(--radius-md);
    text-align: center;
    min-width: 60px;
}

.blog-date .day {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
    display: block;
    line-height: 1;
}

.blog-date .month {
    font-size: 0.8rem;
    color: var(--text-secondary);
    display: block;
}

.blog-content {
    padding: var(--space-xl);
}

.blog-content h4 {
    font-size: 1.3rem;
    margin-bottom: var(--space-md);
}

.blog-content h4 a {
    color: var(--text-primary);
    text-decoration: none;
    transition: var(--transition-normal);
}

.blog-content h4 a:hover {
    color: var(--primary-color);
}

.blog-content p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
}

.blog-meta {
    display: flex;
    gap: var(--space-xl);
    margin-bottom: var(--space-lg);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.blog-meta span {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.blog-read-more {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition-normal);
}

.blog-read-more:hover {
    gap: var(--space-md);
}

/* أقسام المدونة */
.blog-categories {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.blog-categories h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: var(--space-2xl);
    color: var(--text-primary);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-xl);
}

.category-card {
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    text-align: center;
    text-decoration: none;
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.category-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
}

.category-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    margin: 0 auto var(--space-lg);
}

.category-card h5 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.category-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.4;
}

/* ============================================
   قسم الاتصال
============================================ */
.contact {
    padding: var(--space-3xl) 0;
    background-color: var(--bg-primary);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
    margin-bottom: var(--space-3xl);
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    align-content: start;
}

.info-card {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
    transition: var(--transition-normal);
}

.info-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-md);
}

.info-card.large {
    grid-column: span 2;
}

.info-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--space-lg);
}

.info-content h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.info-content p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
    font-size: 0.95rem;
}

.map-link,
.phone-link,
.email-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: var(--transition-normal);
}

.map-link:hover,
.phone-link:hover,
.email-link:hover {
    gap: var(--space-md);
}

.status {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-md);
    background-color: rgba(0, 255, 157, 0.1);
    color: var(--primary-color);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
}

.status.online .fa-circle {
    color: var(--success-color);
    font-size: 0.7rem;
}

/* وسائل التواصل الاجتماعي */
.social-contact {
    grid-column: span 2;
    text-align: center;
    padding: var(--space-xl);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.social-contact h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
}

.social-link {
    width: 50px;
    height: 50px;
    background-color: var(--bg-card);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: var(--transition-normal);
}

.social-link:hover {
    transform: translateY(-5px);
    color: white;
}

.social-link.twitter:hover { background-color: #1da1f2; }
.social-link.linkedin:hover { background-color: #0077b5; }
.social-link.youtube:hover { background-color: #ff0000; }
.social-link.telegram:hover { background-color: #0088cc; }
.social-link.github:hover { background-color: #333; }

/* نموذج الاتصال */
.contact-form {
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.form-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.form-header h3 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.form-header p {
    color: var(--text-secondary);
}

.contact-form-content {
    margin-top: var(--space-xl);
}

/* الخريطة */
.contact-map {
    height: 300px;
    background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.map-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: 
        linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
}

.map-overlay {
    text-align: center;
    background-color: rgba(10, 25, 47, 0.9);
    padding: var(--space-2xl);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(0, 255, 157, 0.2);
}

.map-overlay h4 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.map-overlay p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
}

/* ============================================
   التذييل
============================================ */
.footer {
    background-color: var(--secondary-dark);
    padding: var(--space-3xl) 0 var(--space-xl);
    border-top: 1px solid rgba(0, 255, 157, 0.1);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-3xl);
    margin-bottom: var(--space-3xl);
}

.footer-col h4 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: var(--space-xl);
    position: relative;
    padding-bottom: var(--space-md);
}

.footer-col h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: var(--radius-full);
}

.footer-logo {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    margin-bottom: var(--space-lg);
}

.footer-about {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-xl);
}

.footer-social {
    display: flex;
    gap: var(--space-md);
}

.social-icon {
    width: 40px;
    height: 40px;
    background-color: var(--bg-card);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    text-decoration: none;
    transition: var(--transition-normal);
}

.social-icon:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: translateY(-3px);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: var(--space-md);
}

.footer-links a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition-normal);
}

.footer-links a:hover {
    color: var(--primary-color);
    transform: translateX(-5px);
}

.newsletter-form {
    margin-bottom: var(--space-xl);
}

.input-group {
    display: flex;
    background-color: var(--bg-card);
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid rgba(0, 255, 157, 0.1);
}

.input-group input {
    flex: 1;
    padding: var(--space-md) var(--space-lg);
    background: none;
    border: none;
    color: var(--text-primary);
    font-family: 'Tajawal', sans-serif;
}

.input-group input:focus {
    outline: none;
}

.input-group button {
    padding: var(--space-md) var(--space-lg);
    background-color: var(--primary-color);
    border: none;
    color: var(--secondary-color);
    cursor: pointer;
    transition: var(--transition-normal);
}

.input-group button:hover {
    background-color: var(--primary-dark);
}

.footer-contact p {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
    font-size: 0.95rem;
}

.footer-bottom {
    padding-top: var(--space-xl);
    border-top: 1px solid rgba(0, 255, 157, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-lg);
}

.footer-copyright p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.footer-legal {
    display: flex;
    gap: var(--space-xl);
}

.footer-legal a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition-normal);
}

.footer-legal a:hover {
    color: var(--primary-color);
}

/* ============================================
   أزرار المساعدة
============================================ */
.help-buttons {
    position: fixed;
    bottom: var(--space-xl);
    left: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    z-index: 1000;
}

.help-button {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-full);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.help-button::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
}

.help-button:hover::before {
    animation: shine 1s ease;
}

.help-button.phone {
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.help-button.whatsapp {
    background: linear-gradient(135deg, #25d366, #128c7e);
}

.help-button.chat {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border: none;
    cursor: pointer;
    font-family: 'Tajawal', sans-serif;
}

.help-text {
    font-size: 0.7rem;
    margin-top: 2px;
    opacity: 0.9;
}

.scroll-top {
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    border: none;
    border-radius: 50%;
    color: var(--secondary-color);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition-normal);
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

/* ============================================
   نموذج الدردشة
============================================ */
.chat-modal {
    position: fixed;
    bottom: 100px;
    left: 100px;
    width: 350px;
    background-color: var(--bg-card);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(0, 255, 157, 0.1);
    box-shadow: var(--shadow-xl);
    z-index: 1001;
    display: none;
    flex-direction: column;
    overflow: hidden;
}

.chat-modal.active {
    display: flex;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.chat-header {
    padding: var(--space-md) var(--space-lg);
    background-color: var(--bg-secondary);
    border-bottom: 1px solid rgba(0, 255, 157, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat-title {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.chat-title h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
}

.chat-close {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition-normal);
}

.chat-close:hover {
    color: var(--primary-color);
}

.chat-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 400px;
}

.chat-messages {
    flex: 1;
    padding: var(--space-lg);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.message {
    display: flex;
    flex-direction: column;
    max-width: 80%;
}

.message.bot {
    align-self: flex-start;
}

.message.bot .message-content {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}

.message.user {
    align-self: flex-end;
}

.message.user .message-content {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.message-content {
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-lg);
    font-size: 0.9rem;
    line-height: 1.4;
}

.message-time {
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-top: var(--space-xs);
    padding: 0 var(--space-sm);
}

.chat-input {
    padding: var(--space-md);
    border-top: 1px solid rgba(0, 255, 157, 0.1);
    display: flex;
    gap: var(--space-sm);
}

.chat-input input {
    flex: 1;
    padding: var(--space-md) var(--space-lg);
    background-color: var(--bg-secondary);
    border: 1px solid rgba(0, 255, 157, 0.1);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-family: 'Tajawal', sans-serif;
    font-size: 0.9rem;
}

.chat-input input:focus {
    outline: none;
    border-color: var(--primary-color);
}

.chat-input button {
    padding: var(--space-md) var(--space-lg);
    background-color: var(--primary-color);
    border: none;
    border-radius: var(--radius-md);
    color: var(--secondary-color);
    cursor: pointer;
    transition: var(--transition-normal);
}

.chat-input button:hover {
    background-color: var(--primary-dark);
}

/* ============================================
   التجاوب مع الشاشات الصغيرة
============================================ */
@media (max-width: 1200px) {
    .hero .container {
        flex-direction: column;
    }
    
    .hero-image {
        margin-top: var(--space-3xl);
        width: 100%;
        max-width: 600px;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 992px) {
    .section-title {
        font-size: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        flex-direction: column;
        background-color: var(--bg-primary);
        width: 300px;
        height: calc(100vh - 70px);
        padding: var(--space-2xl);
        transition: var(--transition-normal);
        box-shadow: var(--shadow-xl);
        z-index: 999;
        align-items: flex-start;
    }
    
    .nav-links.active {
        right: 0;
    }
    
    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        padding: var(--space-md) var(--space-lg);
        background: transparent;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    .nav-phone span {
        display: none;
    }
    
    .hero-stats {
        margin-top: var(--space-xl);
    }
    
    .hackathon-content {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
    }
    
    .info-card.large {
        grid-column: span 1;
    }
    
    .social-contact {
        grid-column: span 1;
    }
    
    .blog-card.featured {
        grid-column: span 1;
    }
}

@media (max-width: 768px) {
    .hero {
        padding-top: 100px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .services-grid,
    .courses-grid,
    .certs-grid,
    .achievements-slider,
    .categories-grid {
        grid-template-columns: 1fr;
    }
    
    .process-steps {
        flex-direction: column;
        gap: var(--space-2xl);
    }
    
    .process-steps::before {
        display: none;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: var(--space-md);
    }
    
    .help-buttons {
        left: var(--space-md);
        bottom: var(--space-md);
    }
    
    .chat-modal {
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 350px;
    }
}

@media (max-width: 576px) {
    .container {
        padding: 0 var(--space-md);
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .hero-badge {
        font-size: 0.8rem;
        padding: var(--space-xs) var(--space-md);
    }
    
    .hero-features {
        flex-direction: column;
        gap: var(--space-md);
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .path-tabs {
        flex-direction: column;
    }
    
    .packages-grid {
        grid-template-columns: 1fr;
    }
    
    .package-card.featured {
        transform: none;
    }
}

/* ============================================
   الرسوم المتحركة
============================================ */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-in {
    animation: fadeIn 0.6s ease forwards;
}

.delay-1 { animation-delay: 0.1s; opacity: 0; }
.delay-2 { animation-delay: 0.2s; opacity: 0; }
.delay-3 { animation-delay: 0.3s; opacity: 0; }
.delay-4 { animation-delay: 0.4s; opacity: 0; }
.delay-5 { animation-delay: 0.5s; opacity: 0; }
