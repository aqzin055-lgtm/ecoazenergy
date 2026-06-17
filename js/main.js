const translations = {
    az: {
        // Nav
        logo: "ECO AZ ENERGY", nav_solar: "Günəş Enerjisi", nav_transformer: "Transformatorlar", nav_lighting: "İşıqlandırma", nav_projects: "Layihələr", nav_about: "Haqqımızda",
        
        // Buttons
        btn_explore: "Kəşf et", btn_contact: "Əlaqə saxla", btn_order: "İndi sifariş ver", btn_learn: "Daha çox öyrən", btn_calc: "Hesabla", btn_submit: "Göndər", btn_projects: "Layihələrə bax",
        
        // Footer
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Gizlilik Siyasəti", footer_contact: "Əlaqə: 050 250 19 53",

        // Index
        idx_h1_title: "Sabahı gücləndiririk.", idx_h1_sub: "Daha təmiz və güclü bir gələcək üçün.",
        idx_h2_title: "Günəş Sistemləri", idx_h2_sub: "On-Grid, Off-Grid və Hibrid Həllər",
        idx_h3_title: "Transformatorlar", idx_h3_sub: "2500 KVA-a qədər gücləndirilmiş stansiyalar",
        idx_h4_title: "Yol İşıqlandırması", idx_h4_sub: "Ağıllı idarəetmə ilə 70% enerji qənaəti",
        idx_h5_title: "200+ Uğurlu Layihə", idx_h5_sub: "Azərbaycanın hər bölgəsində.",

        // Solar
        sol_h1_title: "Günəş Enerjisi Sistemləri", sol_h1_sub: "Hər evin, hər binanın enerjisi — Günəşdən.",
        sol_h2_title: "On-Grid Sistem", sol_h2_sub: "Şəbəkəyə qoşulun. Artıq enerjini geri satın.", sol_h2_info: "✓ Şəbəkəyə geri satış ✓ Ən aşağı qiymət ✓ Sürətli geri dönüş",
        sol_h3_title: "Off-Grid Sistem", sol_h3_sub: "Şəbəkə yoxdur? Problem deyil.", sol_h3_info: "✓ Tam müstəqillik ✓ Gecə boyunca enerji ✓ Uzaq ərazilər üçün",
        sol_h4_title: "Hibrid Sistem", sol_h4_sub: "Ən etibarlı həll. Həm şəbəkə, həm batareya.", sol_h4_info: "✓ Elektrik kəsilməsində işləyir ✓ Geri satış mümkündür",
        sol_h5_title: "Dünya brendləri ilə.", sol_h5_sub: "Premium keyfiyyət. Rəsmi zəmanət.",
        sol_b1: "Almaniya | Aurora Series 550W | Shadow Series 440W",
        sol_b2: "Hi-MO 6 | 580W TOPCon | Yüksək verimlilik",
        sol_b3: "550W Monokristal | Büdcə dostu",
        sol_h6_title: "İnvertorlar", sol_h6_sub: "Sistemin ürəyi.",
        sol_i1: "10kW Hibrid | Üç fazalı",
        sol_i2: "5kW On-Grid | Yüksək səmərəlilik",
        sol_calc_title: "Sistemini Hesabla", sol_calc_lbl1: "Aylıq elektrik xərci (AZN)", sol_calc_on: "On-Grid", sol_calc_hyb: "Hibrid", sol_calc_off: "Off-Grid",
        
        // Transformers
        tr_h1_title: "Transformator Quraşdırılması", tr_h1_sub: "10/0.4 kV və 35 kV gərginlik. 2500 KVA-a qədər.",
        tr_h2_title: "Tam Xidmət Dövrü",
        tr_s1: "Transformatorların Alınması və Quraşdırılması",
        tr_s2: "10 kV və 35 kV Açıq/Qapalı Yarımstansiyalar",
        tr_s3: "Yüksək Gərginlikli Hava Xətlərinin Çəkilməsi",
        tr_h3_title: "Texniki Göstəricilər",

        // Lighting
        li_h1_title: "Yol İşıqlandırması", li_h1_sub: "Enerji sərfiyyatını 70% azaldın.",
        li_h2_title: "Xüsusiyyətlər",
        li_s1: "Yüksək güclü LED dirəklər",
        li_s2: "Avtomatik sensor sistemi",
        li_s3: "Mərkəzləşdirilmiş idarəetmə",
        li_h3_title: "Modern Şəhər Layihəsi", li_h3_sub: "Bakıətrafı magistral yolların işıqlandırılması.",

        // Projects
        pj_h1_title: "İcra Edilmiş Layihələr", pj_h1_sub: "2004-cü ildən bəri 200+ uğurlu layihə.",
        pj_h2_title: "Cəbrayıl Mega Layihəsi", pj_h2_sub: "Soltanlı kəndində 424 evin günəş paneli ilə təchizi.",
        pj_h3_title: "Gəncə Şəhəri", pj_h3_sub: "25 kVt On-Grid günəş paneli sistemi.",
        pj_h4_title: "Gədəbəy Off-Grid", pj_h4_sub: "Elektrik şəbəkəsi olmayan ərazidə 40 kWatt sistem.",
        pj_st1_val: "200+", pj_st1_lbl: "Layihə",
        pj_st2_val: "424", pj_st2_lbl: "Ev (Cəbrayıl)",
        pj_st3_val: "60%", pj_st3_lbl: "Qənaət",
        pj_st4_val: "20+", pj_st4_lbl: "İl Təcrübə",

        // About
        ab_h1_title: "Eco Az Energy", ab_h1_sub: "2004-cü ildən bəri enerji sektorunda innovativ mühəndislik.",
        ab_h2_title: "Geniş profilli mühəndislik və texniki xidmət şirkəti.",
        ab_p1: "Biz transformatorların quraşdırılması, yüksək gərginlikli hava xətlərinin çəkilməsi, elektrik təchizatı və işıqlandırma sistemlərinin tam layihələndirilib qurulması sahəsində peşəkar xidmətlər göstəririk.",
        ab_p2: "Beynəlxalq keyfiyyət standartlarına uyğun olaraq AE-Solar, Longi, GoodWe və Growatt kimi dünya brendləri ilə tərəfdaşlıq edirik.",
        ab_h3_title: "Komanda",
        ab_t1_name: "Həmzə Vəliyev", ab_t1_role: "Təsisçi Direktor | 20 il təcrübə",
        ab_t2_name: "Rövşən Namazov", ab_t2_role: "Baş Mühəndis | Elektrik mühəndisliyi",
        ab_t3_name: "Rəvan Məmmədli", ab_t3_role: "Dizayner Mühəndis | AutoCAD",
        ab_h4_title: "Niyə Biz?",
        ab_w1: "Sübut edilmiş təcrübə", ab_w2: "Dünya standartları", ab_w3: "Enerji qənaəti (60%)", ab_w4: "Tam texniki dəstək", ab_w5: "Hüquqi dəstək (AYNA)", ab_w6: "İnnovativ yanaşma",
        ab_h5_title: "Partnyorlar",
        ab_h6_title: "Əlaqə",
        ab_c_name: "Adınız", ab_c_email: "E-poçt", ab_c_msg: "Mesaj",
        ab_c_info1: "ecoazenergy@gmail.com", ab_c_info2: "050 250 19 53", ab_c_info3: "Bakı ş. Ağ Şəhər Yaşıl Ada 2. küçəsi", ab_c_info4: "Zaqatala r. Bizim İnşaat"
    },
    ru: {
        logo: "ECO AZ ENERGY", nav_solar: "Солнечная Энергия", nav_transformer: "Трансформаторы", nav_lighting: "Освещение", nav_projects: "Проекты", nav_about: "О нас",
        btn_explore: "Исследовать", btn_contact: "Связаться", btn_order: "Заказать сейчас", btn_learn: "Узнать больше", btn_calc: "Рассчитать", btn_submit: "Отправить", btn_projects: "Смотреть проекты",
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Политика Конфиденциальности", footer_contact: "Контакты: 050 250 19 53",
        idx_h1_title: "Укрепляем будущее.", idx_h1_sub: "Для более чистого и сильного будущего.",
        idx_h2_title: "Солнечные Системы", idx_h2_sub: "On-Grid, Off-Grid и Гибридные решения",
        idx_h3_title: "Трансформаторы", idx_h3_sub: "Усиленные станции до 2500 КВА",
        idx_h4_title: "Дорожное Освещение", idx_h4_sub: "Экономия энергии 70% с умным управлением",
        idx_h5_title: "200+ Успешных Проектов", idx_h5_sub: "Во всех регионах Азербайджана.",
        sol_h1_title: "Солнечные Системы", sol_h1_sub: "Энергия каждого дома от Солнца.",
        sol_h2_title: "On-Grid Система", sol_h2_sub: "Подключитесь к сети. Продавайте излишки.", sol_h2_info: "✓ Продажа в сеть ✓ Низкая цена ✓ Быстрая окупаемость",
        sol_h3_title: "Off-Grid Система", sol_h3_sub: "Нет сети? Не проблема.", sol_h3_info: "✓ Полная независимость ✓ Энергия ночью ✓ Для удаленных зон",
        sol_h4_title: "Гибридная Система", sol_h4_sub: "Самое надежное решение. Сеть + Батарея.", sol_h4_info: "✓ Работает при отключениях ✓ Возможна продажа",
        sol_h5_title: "Мировые бренды.", sol_h5_sub: "Премиум качество. Официальная гарантия.",
        sol_b1: "Германия | Aurora Series 550W | Shadow Series 440W",
        sol_b2: "Hi-MO 6 | 580W TOPCon | Высокая эффективность",
        sol_b3: "550W Монокристалл | Бюджетный",
        sol_h6_title: "Инверторы", sol_h6_sub: "Сердце системы.",
        sol_i1: "10kW Гибрид | Трехфазный",
        sol_i2: "5kW On-Grid | Высокая эффективность",
        sol_calc_title: "Рассчитай свою систему", sol_calc_lbl1: "Ежемесячный расход (AZN)", sol_calc_on: "On-Grid", sol_calc_hyb: "Гибрид", sol_calc_off: "Off-Grid",
        tr_h1_title: "Установка Трансформаторов", tr_h1_sub: "Напряжение 10/0.4 кВ и 35 кВ. До 2500 КВА.",
        tr_h2_title: "Полный Цикл Услуг",
        tr_s1: "Покупка и Установка Трансформаторов", tr_s2: "10 кВ и 35 кВ Подстанции", tr_s3: "Прокладка высоковольтных воздушных линий",
        tr_h3_title: "Технические Показатели",
        li_h1_title: "Дорожное Освещение", li_h1_sub: "Снизьте энергопотребление на 70%.",
        li_h2_title: "Особенности", li_s1: "Мощные LED столбы", li_s2: "Система автоматических сенсоров", li_s3: "Централизованное управление",
        li_h3_title: "Современный Городской Проект", li_h3_sub: "Освещение пригородных магистралей Баку.",
        pj_h1_title: "Реализованные Проекты", pj_h1_sub: "200+ успешных проектов с 2004 года.",
        pj_h2_title: "Мегапроект Джабраил", pj_h2_sub: "Обеспечение 424 домов солнечными панелями в Солтанлы.",
        pj_h3_title: "Город Гянджа", pj_h3_sub: "On-Grid солнечная система 25 кВт.",
        pj_h4_title: "Гедабек Off-Grid", pj_h4_sub: "Система 40 кВт в зоне без электросети.",
        pj_st1_val: "200+", pj_st1_lbl: "Проектов", pj_st2_val: "424", pj_st2_lbl: "Дома (Джабраил)", pj_st3_val: "60%", pj_st3_lbl: "Экономия", pj_st4_val: "20+", pj_st4_lbl: "Лет Опыта",
        ab_h1_title: "Eco Az Energy", ab_h1_sub: "Инновационная инженерия в энергетическом секторе с 2004 года.",
        ab_h2_title: "Широкопрофильная инжиниринговая и сервисная компания.",
        ab_p1: "Мы предоставляем профессиональные услуги по установке трансформаторов, прокладке высоковольтных линий и проектированию систем освещения.",
        ab_p2: "Сотрудничаем с мировыми брендами, такими как AE-Solar, Longi, GoodWe и Growatt.",
        ab_h3_title: "Команда",
        ab_t1_name: "Хамза Велиев", ab_t1_role: "Учредитель | 20 лет опыта", ab_t2_name: "Ровшан Намазов", ab_t2_role: "Главный Инженер", ab_t3_name: "Раван Мамедли", ab_t3_role: "Инженер-Дизайнер",
        ab_h4_title: "Почему Мы?", ab_w1: "Доказанный опыт", ab_w2: "Мировые стандарты", ab_w3: "Экономия 60%", ab_w4: "Полная поддержка", ab_w5: "Юр. поддержка", ab_w6: "Инновации",
        ab_h5_title: "Партнеры", ab_h6_title: "Контакты",
        ab_c_name: "Ваше Имя", ab_c_email: "Email", ab_c_msg: "Сообщение",
        ab_c_info1: "ecoazenergy@gmail.com", ab_c_info2: "050 250 19 53", ab_c_info3: "Баку, Белый Город, Зеленый Остров 2", ab_c_info4: "Загатала, Bizim İnşaat"
    },
    en: {
        logo: "ECO AZ ENERGY", nav_solar: "Solar Energy", nav_transformer: "Transformers", nav_lighting: "Lighting", nav_projects: "Projects", nav_about: "About Us",
        btn_explore: "Explore", btn_contact: "Contact Us", btn_order: "Order Now", btn_learn: "Learn More", btn_calc: "Calculate", btn_submit: "Submit", btn_projects: "View Projects",
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Privacy Policy", footer_contact: "Contact: +994 50 250 19 53",
        idx_h1_title: "Powering tomorrow.", idx_h1_sub: "For a cleaner and stronger future.",
        idx_h2_title: "Solar Systems", idx_h2_sub: "On-Grid, Off-Grid and Hybrid Solutions",
        idx_h3_title: "Transformers", idx_h3_sub: "Reinforced stations up to 2500 KVA",
        idx_h4_title: "Road Lighting", idx_h4_sub: "70% energy savings with smart control",
        idx_h5_title: "200+ Successful Projects", idx_h5_sub: "Across all regions of Azerbaijan.",
        sol_h1_title: "Solar Energy Systems", sol_h1_sub: "Energy for every home, directly from the Sun.",
        sol_h2_title: "On-Grid System", sol_h2_sub: "Connect to the grid. Sell excess power.", sol_h2_info: "✓ Sell to grid ✓ Lowest cost ✓ Fast ROI",
        sol_h3_title: "Off-Grid System", sol_h3_sub: "No grid? No problem.", sol_h3_info: "✓ Full independence ✓ Night energy ✓ For remote areas",
        sol_h4_title: "Hybrid System", sol_h4_sub: "The most reliable. Grid + Battery.", sol_h4_info: "✓ Works during blackouts ✓ Grid-tie possible",
        sol_h5_title: "Global Brands.", sol_h5_sub: "Premium quality. Official warranty.",
        sol_b1: "Germany | Aurora Series 550W | Shadow Series 440W",
        sol_b2: "Hi-MO 6 | 580W TOPCon | High Efficiency",
        sol_b3: "550W Monocrystalline | Budget Friendly",
        sol_h6_title: "Inverters", sol_h6_sub: "The heart of the system.",
        sol_i1: "10kW Hybrid | Three-phase", sol_i2: "5kW On-Grid | High Efficiency",
        sol_calc_title: "Calculate Your System", sol_calc_lbl1: "Monthly Electricity Bill (AZN)", sol_calc_on: "On-Grid", sol_calc_hyb: "Hybrid", sol_calc_off: "Off-Grid",
        tr_h1_title: "Transformer Installation", tr_h1_sub: "10/0.4 kV and 35 kV voltage. Up to 2500 KVA.",
        tr_h2_title: "Full Service Cycle", tr_s1: "Purchase and Installation of Transformers", tr_s2: "10 kV and 35 kV Substations", tr_s3: "Installation of High Voltage Overhead Lines",
        tr_h3_title: "Technical Specifications",
        li_h1_title: "Road Lighting", li_h1_sub: "Reduce energy consumption by 70%.",
        li_h2_title: "Features", li_s1: "High-power LED poles", li_s2: "Automatic sensor system", li_s3: "Centralized control",
        li_h3_title: "Modern City Project", li_h3_sub: "Lighting of suburban highways in Baku.",
        pj_h1_title: "Implemented Projects", pj_h1_sub: "200+ successful projects since 2004.",
        pj_h2_title: "Jabrayil Mega Project", pj_h2_sub: "Equipping 424 houses with solar panels in Soltanli.",
        pj_h3_title: "Ganja City", pj_h3_sub: "25 kW On-Grid solar panel system.",
        pj_h4_title: "Gadabay Off-Grid", pj_h4_sub: "40 kWatt system in a remote area.",
        pj_st1_val: "200+", pj_st1_lbl: "Projects", pj_st2_val: "424", pj_st2_lbl: "Houses (Jabrayil)", pj_st3_val: "60%", pj_st3_lbl: "Savings", pj_st4_val: "20+", pj_st4_lbl: "Years Exp.",
        ab_h1_title: "Eco Az Energy", ab_h1_sub: "Innovative engineering in the energy sector since 2004.",
        ab_h2_title: "Multi-profile engineering and technical service company.",
        ab_p1: "We provide professional services in the installation of transformers, high-voltage lines, and full lighting systems.",
        ab_p2: "We collaborate with global brands like AE-Solar, Longi, GoodWe, and Growatt.",
        ab_h3_title: "The Team", ab_t1_name: "Hamza Valiyev", ab_t1_role: "Founder | 20 yrs exp", ab_t2_name: "Rovshan Namazov", ab_t2_role: "Chief Engineer", ab_t3_name: "Ravan Mammadli", ab_t3_role: "Design Engineer",
        ab_h4_title: "Why Us?", ab_w1: "Proven experience", ab_w2: "World standards", ab_w3: "60% Savings", ab_w4: "Full support", ab_w5: "Legal support", ab_w6: "Innovation",
        ab_h5_title: "Partners", ab_h6_title: "Contact",
        ab_c_name: "Name", ab_c_email: "Email", ab_c_msg: "Message",
        ab_c_info1: "ecoazenergy@gmail.com", ab_c_info2: "+994 50 250 19 53", ab_c_info3: "Baku, White City, Green Island 2", ab_c_info4: "Zagatala, Bizim Inshaat"
    }
};

let currentLang = 'az';

function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key] !== undefined) {
            if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.innerText = lang.toUpperCase();
    }
    currentLang = lang;
    localStorage.setItem('eco_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Language Setup
    const savedLang = localStorage.getItem('eco_lang') || 'az';
    applyLanguage(savedLang);

    const selector = document.getElementById('langSelector');
    const btn = document.getElementById('langBtn');
    if (btn && selector) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            selector.classList.toggle('open');
        });
        document.querySelectorAll('.lang-dropdown button').forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                if (lang) applyLanguage(lang);
                selector.classList.remove('open');
            });
        });
        document.addEventListener('click', () => selector.classList.remove('open'));
    }

    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section-content').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if(menuBtn && closeBtn && mobileOverlay) {
        menuBtn.addEventListener('click', () => mobileOverlay.classList.add('open'));
        closeBtn.addEventListener('click', () => mobileOverlay.classList.remove('open'));
    }
});
