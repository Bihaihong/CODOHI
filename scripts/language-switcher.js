// Language data
const translations = {
    en: {
        "nav.home": "Home",
        "nav.products": "Products",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.cart": "Cart",
        "hero.title": "Welcome to CODOHI",
        "hero.subtitle": "Premium quality for your lifestyle",
        "hero.cta": "Shop Now",
        "products.title": "Our Products",
        "products.product1.name": "CODOHI Signature Watch",
        "products.product1.price": "$199.00",
        "products.product1.description": "Elegant timepiece with premium materials",
        "products.product2.name": "CODOHI Leather Wallet",
        "products.product2.price": "$89.00",
        "products.product2.description": "Handcrafted genuine leather wallet",
        "products.add_to_cart": "Add to Cart",
        "about.title": "About CODOHI",
        "about.content": "CODOHI is a premium lifestyle brand dedicated to creating high-quality products that combine functionality with elegant design. Founded in 2020, we take pride in our attention to detail and commitment to sustainability.",
        "contact.title": "Contact Us",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "footer.quick_links": "Quick Links",
        "footer.contact": "Contact",
        "footer.address": "123 Brand Street, Fashion District",
        "footer.city": "New York, NY 10001",
        "footer.email": "info@codohi.com",
        "footer.rights": "All rights reserved"
    },
    zh: {
        "nav.home": "首页",
        "nav.products": "产品",
        "nav.about": "关于我们",
        "nav.contact": "联系我们",
        "nav.cart": "购物车",
        "hero.title": "欢迎来到CODOHI",
        "hero.subtitle": "为您的生活方式提供优质产品",
        "hero.cta": "立即购买",
        "products.title": "我们的产品",
        "products.product1.name": "CODOHI经典腕表",
        "products.product1.price": "¥1399.00",
        "products.product1.description": "采用优质材料的优雅时计",
        "products.product2.name": "CODOHI真皮钱包",
        "products.product2.price": "¥599.00",
        "products.product2.description": "手工制作的真皮钱包",
        "products.add_to_cart": "加入购物车",
        "about.title": "关于CODOHI",
        "about.content": "CODOHI是一个高端生活方式品牌，致力于创造将功能性与优雅设计相结合的高品质产品。成立于2020年，我们以对细节的关注和对可持续发展的承诺为荣。",
        "contact.title": "联系我们",
        "contact.form.name": "姓名",
        "contact.form.email": "电子邮箱",
        "contact.form.message": "留言内容",
        "contact.form.submit": "发送信息",
        "footer.quick_links": "快速链接",
        "footer.contact": "联系方式",
        "footer.address": "品牌街123号，时尚区",
        "footer.city": "纽约市，NY 10001",
        "footer.email": "info@codohi.com",
        "footer.rights": "保留所有权利"
    }
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set default language to English
    let currentLang = 'en';
    
    // Get language buttons
    const enBtn = document.getElementById('en-btn');
    const zhBtn = document.getElementById('zh-btn');
    
    // Load language preference from localStorage if available
    if (localStorage.getItem('language')) {
        currentLang = localStorage.getItem('language');
        updateActiveButton();
    }
    
    // Apply translations for current language
    applyTranslations(currentLang);
    
    // English button click handler
    enBtn.addEventListener('click', function() {
        currentLang = 'en';
        localStorage.setItem('language', 'en');
        applyTranslations('en');
        updateActiveButton();
        document.documentElement.lang = 'en';
    });
    
    // Chinese button click handler
    zhBtn.addEventListener('click', function() {
        currentLang = 'zh';
        localStorage.setItem('language', 'zh');
        applyTranslations('zh');
        updateActiveButton();
        document.documentElement.lang = 'zh';
    });
    
    // Update active button style
    function updateActiveButton() {
        enBtn.classList.remove('active');
        zhBtn.classList.remove('active');
        
        if (currentLang === 'en') {
            enBtn.classList.add('active');
        } else {
            zhBtn.classList.add('active');
        }
    }
    
    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
                
                // Special case for input placeholders
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
            }
        });
    }
});