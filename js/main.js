// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.querySelector('.lang-dropdown');
const langSelectors = document.querySelectorAll('[data-lang]');
const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMenu = document.getElementById('closeMenu');

// Language Dropdown Toggle
if(langBtn && langDropdown) {
    langBtn.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector')) {
            langDropdown.classList.remove('show');
        }
    });
}

// Mobile Menu Toggle
if(menuBtn && mobileOverlay && closeMenu) {
    menuBtn.addEventListener('click', () => mobileOverlay.classList.add('active'));
    closeMenu.addEventListener('click', () => mobileOverlay.classList.remove('active'));
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// ==========================================
// ORDER MODAL & EMAIL SYSTEM
// ==========================================

const modalHTML = `
<div class="modal-overlay" id="orderModal">
    <div class="modal-content">
        <button class="modal-close" onclick="closeOrderModal()">✕</button>
        <h2 class="modal-title" data-key="mdl_title">Sifariş Formu</h2>
        <p class="modal-subtitle" id="modalSubtitle" data-key="mdl_sub">Məlumatlarınızı daxil edin, mütəxəssislərimiz sizinlə əlaqə saxlayacaq.</p>
        <form id="orderForm">
            <input type="hidden" name="Sistem_Tipi" id="systemTypeInput">
            <input type="hidden" name="_subject" value="Eco AzEnergy Yeni Sifariş!">
            <input type="hidden" name="_captcha" value="false">
            
            <input type="text" name="Ad_Soyad" class="modal-input" placeholder="Adınız və Soyadınız" data-key="mdl_name" required>
            <input type="tel" name="Telefon" class="modal-input" placeholder="Əlaqə nömrəniz" data-key="mdl_phone" required>
            <input type="text" name="Unvan" class="modal-input" placeholder="Quraşdırma Ünvanı" data-key="mdl_addr" required>
            
            <button type="submit" class="btn btn-primary" style="width:100%; margin-top:8px;" id="submitBtn" data-key="mdl_btn_send">Sifariş Et</button>
        </form>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

function openOrderModal(systemType) {
    document.getElementById('systemTypeInput').value = systemType;
    document.getElementById('orderModal').classList.add('open');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('open');
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerText;
    btn.innerText = (localStorage.getItem('lang') === 'en') ? 'Sending...' : (localStorage.getItem('lang') === 'ru' ? 'Отправка...' : 'Göndərilir...');
    btn.disabled = true;

    const formData = new FormData(this);
    
    // Using FormSubmit AJAX API to send silently to aqzin.055@gmail.com
    fetch('https://formsubmit.co/ajax/aqzin.055@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert((localStorage.getItem('lang') === 'en') ? 'Your order has been received!' : (localStorage.getItem('lang') === 'ru' ? 'Ваш заказ получен!' : 'Sifarişiniz qəbul edildi!'));
        closeOrderModal();
        this.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    })
    .catch(error => {
        alert('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
        btn.innerText = originalText;
        btn.disabled = false;
    });
});

// ==========================================
// MASSIVE MULTILINGUAL DICTIONARY
// ==========================================

const translations = {
    az: {
        logo: "ECO AZ ENERGY",
        nav_solar: "Günəş Enerjisi", nav_transformer: "Transformatorlar", nav_lighting: "İşıqlandırma", nav_projects: "Layihələr", nav_about: "Haqqımızda",
        idx_h1_title: "Sabahı gücləndiririk.",
        idx_h1_sub: "Daha təmiz, müstəqil və güclü bir gələcək üçün.",
        btn_explore: "Həllərlə Tanış Olun",
        idx_mq: "Niyə məhz bizdən günəş sistemi almalısınız?",
        idx_ma: "Biz yalnız vasitəçi deyilik. Eco Az Energy olaraq, beynəlxalq standartlara cavab verən <strong>yüksək keyfiyyətli günəş panelləri və invertorları birbaşa idxal edir, düz qapınıza qədər çatdırır və peşəkar mühəndis komandamızla tam açar təslimi quraşdırırıq.</strong> 20 illik mühəndislik təcrübəmizlə evinizə və ya biznesinizə uzunmüddətli, zəmanətli qənaət təmin edirik.",
        
        sol_mq: "Niyə məhz bizdən günəş sistemi almalısınız?",
        sol_ma: "Dünya standartlarına cavab verən <strong>yüksək keyfiyyətli günəş panelləri və invertorları birbaşa idxal edir, çatdırır və quraşdırırıq.</strong> Layihələndirmədən tutmuş, dövlət qurumlarında (AYNA) sənədləşdirməyə və uzaqdan 24/7 SCADA monitorinqinə qədər tam açar təslimi hüquqi və texniki dəstək veririk.",
        sol_brands_title: "Qlobal Tərəfdaşlarımız",
        sol_brands_desc: "Layihələrimizdə yalnız beynəlxalq sertifikatlı ən keyfiyyətli panellərdən və invertorlardan istifadə edirik. Məhsulları dərindən incələmək üçün klikləyin:",
        sol_s1_title: "On-Grid Sistemlər", sol_s1_desc: "Akkumulyatorsuz (batareyasız) birbaşa dövlət şəbəkəsinə (Azərişıq) bağlanan sistem. İstehsal olunan enerji ilk növbədə sizin tələbatınızı ödəyir, artıq qalan enerji isə şəbəkəyə satılır. Ən sürətli özünü-doğrultma (ROI) və minimum texniki xidmət tələb edən qənaət növü.",
        sol_s2_title: "Off-Grid Sistemlər", sol_s2_desc: "Şəbəkədən tamamilə müstəqil, akkumulyator (batareya) dəstəkli sistemlər. Gündüz günəşdən alınan enerji həm obyekti qidalandırır, həm də batareyaları doldurur. Gecə və ya kəsinti zamanı tam avtonom fəaliyyət. Ucqar ərazilər və bağ evləri üçün əvəzedilməz həll.",
        sol_s3_title: "Hibrid Sistemlər", sol_s3_desc: "Həm şəbəkəyə (On-Grid) satmaq, həm də batareyada (Off-Grid) saxlamaq xüsusiyyətlərini eyni anda özündə birləşdirən ən ağıllı texnologiya. Təbii fəlakətlərdə və ya elektrik kəsintilərində belə işığı heç vaxt sönməyən 'ağıllı evlər' üçün nəzərdə tutulub.",
        btn_buy_now: "İndi Al", btn_learn_more: "Daha Çox",
        
        tr_h1_title: "Transformatorlar", tr_h1_sub: "Sənaye və məişət üçün güc mərkəzləri.",
        tr_mq: "Böyük bir obyektiniz var və stabil gücə ehtiyacınız var?",
        tr_ma: "Fabriklər, zavodlar və böyük yaşayış kompleksləri üçün istənilən gücdə (KVA) transformatorların peşəkar quraşdırılması, SCADA sistemi ilə izlənilməsi və daimi texniki xidməti.",
        tr_s1: "Yüksək Gərginlik Kabelləri", tr_s1_desc: "YVV, NYY, ACSR kimi beynəlxalq standartlara cavab verən yüksək keyfiyyətli alüminium və mis kabellərlə xətlərin çəkilməsi.",
        tr_s2: "SCADA & Monitorinq", tr_s2_desc: "Transformator mərkəzlərində baş verən hər bir gərginlik dəyişikliyini, cərəyan gücünü və tezliyi uzaqdan (24/7) izləmək üçün SCADA sistemlərinin qurulması.",
        tr_s3: "Paylayıcı Şkaflar (Switchgear)", tr_s3_desc: "Kompensasiya şkafları, eleqaz açarları, UPS və ildırımdan mühafizə (torpaqlama) sistemlərinin tam təhlükəsiz quraşdırılması.",

        li_h1_title: "Yol İşıqlandırması", li_h1_sub: "Qaranlıq yolları innovasiya ilə işıqlandırırıq.",
        li_mq: "Şəhər və ya magistral yollarınız üçün ağıllı həllər axtarırsınız?",
        li_ma: "Biz yalnız işıq dirəkləri quraşdırmırıq. Gecə-gündüz sensorları, mərkəzləşdirilmiş idarəetmə və 70%-ə qədər enerji qənaəti təmin edən ağıllı sistemlər qururuq. Magistral yollar, kənd yolları və körpülər üçün həm On-Grid həm də tam avtonom Off-Grid həllər mövcuddur.",
        li_s1: "On-Grid LED Sistemlər", li_s1_desc: "Elektrik şəbəkəsinə birbaşa qoşulan yüksək güclü LED dirəklər. Mərkəzləşdirilmiş idarəetmə və avtomatik gecə/gündüz sensorları ilə şəhər yolları üçün ideal.",
        li_s2: "Off-Grid Günəş Dirəkləri", li_s2_desc: "Şəbəkəsiz ərazilərdə, kənd yollarında və körpülərdə tam avtonom həll. Panel, invertor və akkumulyatorla gecə boyunca fasiləsiz işıq.",
        li_kb_title: "Qarabağda Polad Yol Layihəsi", li_kb_desc: "Qürurla bildiririk ki, Qarabağda Polad Yol üçün 16 ədəd körpünün tam avtonom günəş enerjili işıqlandırma təklifi şirkətimiz tərəfindən irəli sürülüb və qüvvədədir.",

        pj_h1_title: "Uğurlu Layihələr", pj_h1_sub: "Bütün Azərbaycanda 200-dən çox icra edilmiş layihə.",
        pj_ongoing_title: "İcrası Davam Edən Layihələr", pj_ongoing_list: "<li><strong>Xankəndi Dövlət Dram Teatrı:</strong> Yüksək Gərginlik Xətlərinin çəkilməsi.</li><li><strong>Tərtər-1 ASC:</strong> Yüksək Gərginlik Xətti çəkilməsi və transformator quraşdırılması.</li><li><strong>Ağalı Otel:</strong> SCADA sisteminin qurulması.</li><li><strong>Zeytun Pharmaceuticals & Ballı Marketlər:</strong> Depolarda elektrik təchizatının qurulması və qulluq.</li><li><strong>Cəbrayıl, Soltanlı kəndi:</strong> 424 evin günəş paneli ilə təchizi (Mega layihə).</li>",
        pj_h2_title: "Cəbrayıl Layihəsi", pj_h2_desc: "Soltanlı kəndində 424 evin günəş paneli ilə təchizi (İcrası davam edir).",
        pj_h3_title: "Gəncə & Gədəbəy", pj_h3_desc: "Gəncədə 25 kW On-Grid və Gədəbəydə 40 kW Off-Grid günəş paneli sistemlərinin tam işə salınması.",
        pj_h4_title: "Şüvəlan Layihələri", pj_h4_desc: "Xəzər rayonu Şüvəlan qəsəbəsində 17 kW və 10 kW On-Grid, həmçinin 22 kW Hibrid sistemin uğurlu quraşdırılması.",
        pj_h5_title: "Digər Əhəmiyyətli Layihələr", pj_h5_desc: "Ağdam rayonu Kəngərli kəndi İcra Hakimiyyətinin inzibati binasının enerji təchizatı.<br><br>Nəsimi rayonu ərazisində yanmış binanın elektrik xətlərinin tamamilə yenilənməsi.",

        ab_h1_title: "Eco Az Energy", ab_h1_sub: "2004-cü ildən enerji sektorunda peşəkar xidmət.",
        ab_p1: "Eco Az Energy 2004-cü ildən enerji sektorunda fəaliyyət göstərən, geniş profilli mühəndislik və texniki xidmət şirkətidir. Şirkətimiz transformatorların quraşdırılması, yüksək gərginlikli hava xətlərinin çəkilməsi, elektrik təchizatı və işıqlandırma sistemlərinin layihələndirilməsi sahələrində peşəkar xidmətlər göstərir. Həmçinin dünyanın tanınmış günəş paneli və invertor brendlərinin Azərbaycana idxalçısıdır.",
        ab_t1: "20 il", ab_t1_desc: "Enerji Sektorunda Təcrübə", ab_t2: "200+", ab_t2_desc: "İcra Edilmiş Uğurlu Layihə", ab_t3: "60%", ab_t3_desc: "Müştərilərin Enerji Qənaəti",
        ab_soc_title: "Sosial Layihələr", ab_soc_desc: "Eco AzEnergy təkcə kommersiya deyil, eyni zamanda sosial yönümlü şirkətdir. Biz 'GREEN TECH III' Startap və Yaşıl Texnologiyalar Müsabiqəsində I yer qaliblərini xüsusi mükafatlandırmış və innovativ gənclərə dəstək olmuşuq.",
        ab_team_title: "Komandamız",
        ab_tm1_n: "Həmzə Vəliyev", ab_tm1_r: "Təsisçi Direktor", ab_tm1_d: "Enerji sektorunda 20 illik təcrübə. 200+ layihənin rəhbəri və beynəlxalq əməkdaşlıqlar üzrə mütəxəssis.",
        ab_tm2_n: "Rövşən Namazov", ab_tm2_r: "Baş Mühəndis", ab_tm2_d: "Elektrik mühəndisliyi üzrə ixtisas, On-Grid/Off-Grid layihələrinin texniki nəzarəti və idarəedilməsi.",
        ab_tm3_n: "Rəvan Məmmədli", ab_tm3_r: "Dizayner Mühəndis", ab_tm3_d: "Günəş sistemlərinin AutoCAD / CAD vasitəsilə ən dəqiq texniki layihələndirilməsi.",
        btn_contact: "Əlaqə", btn_submit: "Göndər", ab_c_info: "Bizimlə əlaqə: ecoazenergy@gmail.com | +994 50 250 19 53",

        pan_h1_title: "Günəş Panelləri", pan_h1_sub: "Qlobal standartlar, birbaşa idxal və peşəkar quraşdırma.",
        pan_ae_title: "AE Solar", pan_ae_desc: "Almaniya texnologiyası və beynəlxalq keyfiyyət. Yüksək effektivlik, kölgələnməyə qarşı həssaslıq və sərt iqlim şəraitlərinə maksimum dözümlülük təqdim edən TIER-1 panellər.",
        pan_longi_title: "LonGi Solar", pan_longi_desc: "Dünyanın ən böyük monokristal panel istehsalçısı. Maksimum enerji çıxışı (High Efficiency), yarım-hüceyrə (Half-Cell) texnologiyası ilə daha az enerji itkisi və məhdud sahələrdə yüksək performans.",
        pan_faers_title: "FAERS", pan_faers_desc: "Etibarlılıq və optimal büdcə həlli. Əla qiymət/performans nisbəti ilə həm ev, həm kommersiya layihələrində güvənlə istifadə olunan dözümlü panellər.",

        inv_h1_title: "İnvertorlar", inv_h1_sub: "Günəş enerjisinin beyin mərkəzi. Ağıllı idarəetmə və SCADA monitorinqi.",
        inv_goodwe_title: "GoodWe", inv_goodwe_desc: "Dünyanın qabaqcıl invertor istehsalçılarından biri. On-Grid, Off-Grid və Hibrid sistemlər üçün nəzərdə tutulmuş, son dərəcə stabil işləyən, uzaqdan idarəetmə və monitorinq sisteminə malik ağıllı invertorlar.",
        inv_growatt_title: "Growatt", inv_growatt_desc: "Dünya üzrə ən çox satılan inverter brendlərindən biri. Sadə quraşdırma, istifadəçi dostu interfeys və yüksək enerji səmərəliliyi. Ev və kommersiya layihələri üçün qüsursuz işləmə imkanı.",

        og_h1_title: "On-Grid Sistemlər", og_h1_sub: "Akkumulyatorsuz, birbaşa dövlət şəbəkəsinə inteqrasiya.", og_h2: "Gəlir gətirən investisiya", og_p1: "On-Grid (Şəbəkəyə bağlı) sistemlər vasitəsilə siz təkcə enerji xərclərini sıfıra endirmirsiniz, eyni zamanda istehsal etdiyiniz artıq enerjini dövlətə sataraq passiv gəlir əldə edirsiniz. Batareya tələb etmədiyi üçün ən uyğun büdcəli və ən sürətli özünü-doğrultma (ROI) göstəricisinə malikdir.",
        offg_h1_title: "Off-Grid Sistemlər", offg_h1_sub: "Şəbəkədən tamamilə müstəqil, azad enerji həyatı.", offg_h2: "Hər yerdə işıq, kəsintisiz həyat", offg_p1: "Off-Grid (Şəbəkəsiz) sistemlər, elektrik xəttinin olmadığı ucqar ərazilər, fermalar və ya tam müstəqil olmaq istəyən bağ evləri üçün nəzərdə tutulub. Gündüz günəşdən toplanan enerji xüsusi lityum və ya gel batareyalarda saxlanılır və gecə boyunca evinizi tam işıqla təmin edir.",
        hyb_h1_title: "Hibrid Sistemlər", hyb_h1_sub: "Günəş və Küləyin gücü. Tam təhlükəsizlik və səmərəlilik.", hyb_h2: "Qüsursuz enerji təminatı", hyb_p1: "Hibrid sistemlər həm dövlət şəbəkəsinə satmaq (On-Grid), həm də batareyalarda enerji ehtiyatı saxlamaq (Off-Grid) funksiyalarını vahid bir platformada birləşdirir. Zərurət yarandıqda, günəş panelləri ilə yanaşı külək turbinləri də sistemə inteqrasiya edilir ki, bu da 'ağıllı evlər' üçün təbii fəlakətlərdə belə işıqların sönməməsini təmin edir.",
        
        mdl_title: "Sifariş Formu", mdl_sub: "Məlumatlarınızı daxil edin, mütəxəssislərimiz sizinlə əlaqə saxlayacaq.", mdl_btn_send: "Sifariş Et",
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Məxfilik", footer_contact: "+994 50 250 19 53"
    },
    en: {
        logo: "ECO AZ ENERGY",
        nav_solar: "Solar Energy", nav_transformer: "Transformers", nav_lighting: "Lighting", nav_projects: "Projects", nav_about: "About Us",
        idx_h1_title: "Powering Tomorrow.",
        idx_h1_sub: "For a cleaner, independent, and powerful future.",
        btn_explore: "Explore Solutions",
        idx_mq: "Why choose us for your solar system?",
        idx_ma: "We are not just middlemen. Eco Az Energy directly imports <strong>high-quality solar panels and inverters</strong> that meet international standards, delivers them right to your door, and provides full turnkey installation with our professional engineering team. With 20 years of engineering experience, we ensure long-term, guaranteed savings for your home or business.",
        
        sol_mq: "Why choose us for your solar system?",
        sol_ma: "We directly import, deliver, and install <strong>high-quality solar panels and inverters</strong> that meet global standards. From design to state (AYNA) documentation and remote 24/7 SCADA monitoring, we provide turnkey legal and technical support.",
        sol_brands_title: "Our Global Partners",
        sol_brands_desc: "We use only internationally certified, top-quality panels and inverters in our projects. Click to explore our products in detail:",
        sol_s1_title: "On-Grid Systems", sol_s1_desc: "A battery-less system connected directly to the state grid. The produced energy covers your needs first, and the excess is sold back to the grid. The fastest ROI and lowest maintenance savings type.",
        sol_s2_title: "Off-Grid Systems", sol_s2_desc: "Completely independent, battery-supported systems. Energy captured during the day powers the facility and charges batteries. Full autonomy during the night or outages. Essential for remote areas.",
        sol_s3_title: "Hybrid Systems", sol_s3_desc: "Combines the features of selling to the grid (On-Grid) and storing in batteries (Off-Grid). Designed for 'smart homes' where lights never go out, even during natural disasters or power cuts.",
        btn_buy_now: "Buy Now", btn_learn_more: "Learn More",
        
        tr_h1_title: "Transformers", tr_h1_sub: "Power centers for industry and households.",
        tr_mq: "Do you have a large facility needing stable power?",
        tr_ma: "Professional installation, SCADA monitoring, and continuous maintenance of transformers of any capacity (KVA) for factories, plants, and large residential complexes.",
        tr_s1: "High Voltage Cables", tr_s1_desc: "Laying lines with high-quality aluminum and copper cables like YVV, NYY, ACSR that meet international standards.",
        tr_s2: "SCADA & Monitoring", tr_s2_desc: "Setting up SCADA systems to remotely monitor (24/7) every voltage change, current power, and frequency at transformer centers.",
        tr_s3: "Switchgears", tr_s3_desc: "Completely safe installation of compensation cabinets, SF6 circuit breakers, UPS, and lightning protection (grounding) systems.",

        li_h1_title: "Road Lighting", li_h1_sub: "Illuminating dark roads with innovation.",
        li_mq: "Looking for smart solutions for your city or highways?",
        li_ma: "We don't just install light poles. We build smart systems with day/night sensors, centralized control, and up to 70% energy savings. Both On-Grid and fully autonomous Off-Grid solutions are available.",
        li_s1: "On-Grid LED Systems", li_s1_desc: "High-power LED poles connected directly to the electrical grid. Ideal for city roads with centralized control and automatic sensors.",
        li_s2: "Off-Grid Solar Poles", li_s2_desc: "A fully autonomous solution for off-grid areas, rural roads, and bridges. Uninterrupted light all night with panel, inverter, and battery.",
        li_kb_title: "Karabakh Polad Road Project", li_kb_desc: "We proudly announce that our company's proposal for the fully autonomous solar lighting of 16 bridges for the Polad Road in Karabakh is valid and under review.",

        pj_h1_title: "Successful Projects", pj_h1_sub: "Over 200 completed projects across Azerbaijan.",
        pj_ongoing_title: "Ongoing Projects", pj_ongoing_list: "<li><strong>Khankendi State Drama Theater:</strong> High Voltage Line installation.</li><li><strong>Tartar-1 ASC:</strong> High Voltage Line installation and transformer setup.</li><li><strong>Agali Hotel:</strong> SCADA system implementation.</li><li><strong>Zeytun Pharmaceuticals & Balli Markets:</strong> Electrical supply setup and maintenance in warehouses.</li><li><strong>Jabrayil, Soltanli village:</strong> Solar panel supply for 424 homes (Mega project).</li>",
        pj_h2_title: "Jabrayil Project", pj_h2_desc: "Solar panel supply for 424 homes in Soltanli village (Ongoing).",
        pj_h3_title: "Ganja & Gadabay", pj_h3_desc: "Full commissioning of 25 kW On-Grid in Ganja and 40 kW Off-Grid solar systems in Gadabay.",
        pj_h4_title: "Shuvalan Projects", pj_h4_desc: "Successful installation of 17 kW and 10 kW On-Grid, as well as 22 kW Hybrid systems in Shuvalan settlement, Khazar district.",
        pj_h5_title: "Other Significant Projects", pj_h5_desc: "Power supply for the administrative building of the Executive Power of Kangarli village, Aghdam.<br><br>Complete renewal of electrical lines of a burnt building in Nasimi district.",

        ab_h1_title: "Eco Az Energy", ab_h1_sub: "Professional service in the energy sector since 2004.",
        ab_p1: "Eco Az Energy is a broad-profile engineering and technical service company operating in the energy sector since 2004. We provide professional services in transformer installation, high voltage overhead lines, power supply, and lighting system design. We are also the importer of world-renowned solar panel and inverter brands to Azerbaijan.",
        ab_t1: "20 Years", ab_t1_desc: "Experience in Energy Sector", ab_t2: "200+", ab_t2_desc: "Successfully Completed Projects", ab_t3: "60%", ab_t3_desc: "Customer Energy Savings",
        ab_soc_title: "Social Projects", ab_soc_desc: "Eco AzEnergy is not only a commercial but also a socially oriented company. We specially rewarded the 1st place winners in the 'GREEN TECH III' Startup and Green Technologies Competition and supported innovative youth.",
        ab_team_title: "Our Team",
        ab_tm1_n: "Hamza Valiyev", ab_tm1_r: "Founder & Director", ab_tm1_d: "20 years of experience in the energy sector. Manager of 200+ projects and expert in international partnerships.",
        ab_tm2_n: "Rovshan Namazov", ab_tm2_r: "Chief Engineer", ab_tm2_d: "Specialized in electrical engineering, technical supervision, and management of On-Grid/Off-Grid projects.",
        ab_tm3_n: "Ravan Mammadli", ab_tm3_r: "Design Engineer", ab_tm3_d: "The most precise technical design of solar systems using AutoCAD / CAD.",
        btn_contact: "Contact", btn_submit: "Submit", ab_c_info: "Contact us: ecoazenergy@gmail.com | +994 50 250 19 53",

        pan_h1_title: "Solar Panels", pan_h1_sub: "Global standards, direct import, and professional installation.",
        pan_ae_title: "AE Solar", pan_ae_desc: "German technology and international quality. TIER-1 panels offering high efficiency, shade resistance, and maximum durability to harsh climates.",
        pan_longi_title: "LonGi Solar", pan_longi_desc: "The world's largest monocrystalline panel manufacturer. Maximum energy output (High Efficiency), Half-Cell technology for less energy loss, and high performance in limited areas.",
        pan_faers_title: "FAERS", pan_faers_desc: "Reliability and optimal budget solution. Durable panels used confidently in both residential and commercial projects with an excellent price/performance ratio.",

        inv_h1_title: "Inverters", inv_h1_sub: "The brain of solar energy. Smart control and SCADA monitoring.",
        inv_goodwe_title: "GoodWe", inv_goodwe_desc: "One of the world's leading inverter manufacturers. Smart inverters designed for On-Grid, Off-Grid, and Hybrid systems, highly stable, featuring remote control and monitoring.",
        inv_growatt_title: "Growatt", inv_growatt_desc: "One of the best-selling inverter brands globally. Simple installation, user-friendly interface, and high energy efficiency. Flawless operation for residential and commercial projects.",

        og_h1_title: "On-Grid Systems", og_h1_sub: "Battery-less, direct integration to the state grid.", og_h2: "Income generating investment", og_p1: "With On-Grid systems, you not only reduce your energy costs to zero but also generate passive income by selling excess energy back to the state. Since it does not require a battery, it has the most suitable budget and fastest ROI.",
        offg_h1_title: "Off-Grid Systems", offg_h1_sub: "Completely independent from the grid, free energy life.", offg_h2: "Light everywhere, uninterrupted life", offg_p1: "Off-Grid systems are designed for remote areas without power lines, farms, or summer houses wanting full independence. Energy collected during the day is stored in special lithium or gel batteries, providing full light throughout the night.",
        hyb_h1_title: "Hybrid Systems", hyb_h1_sub: "The power of Solar and Wind. Total safety and efficiency.", hyb_h2: "Flawless energy supply", hyb_p1: "Hybrid systems combine the functions of selling to the grid (On-Grid) and storing energy in batteries (Off-Grid) in a single platform. When necessary, wind turbines are integrated into the system alongside solar panels, ensuring lights never go out in 'smart homes' even during natural disasters.",

        mdl_title: "Order Form", mdl_sub: "Enter your details, and our specialists will contact you.", mdl_btn_send: "Order Now",
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Privacy Policy", footer_contact: "+994 50 250 19 53"
    },
    ru: {
        logo: "ECO AZ ENERGY",
        nav_solar: "Солнечная Энергия", nav_transformer: "Трансформаторы", nav_lighting: "Освещение", nav_projects: "Проекты", nav_about: "О Нас",
        idx_h1_title: "Заряжаем Завтрашний День.",
        idx_h1_sub: "Для более чистого, независимого и мощного будущего.",
        btn_explore: "Изучить Решения",
        idx_mq: "Почему стоит выбрать нас для вашей солнечной системы?",
        idx_ma: "Мы не просто посредники. Eco Az Energy напрямую импортирует <strong>высококачественные солнечные панели и инверторы</strong>, доставляет их до вашей двери и обеспечивает установку под ключ нашей профессиональной инженерной командой. Имея 20-летний опыт, мы гарантируем долгосрочную экономию для вашего дома или бизнеса.",
        
        sol_mq: "Почему стоит выбрать нас для вашей солнечной системы?",
        sol_ma: "Мы напрямую импортируем, доставляем и устанавливаем <strong>высококачественные солнечные панели и инверторы</strong> мировых стандартов. От проектирования до документации (AYNA) и удаленного 24/7 SCADA мониторинга, мы предоставляем полную юридическую и техническую поддержку.",
        sol_brands_title: "Наши Глобальные Партнеры",
        sol_brands_desc: "В наших проектах мы используем только сертифицированные на международном уровне панели и инверторы. Нажмите, чтобы изучить подробнее:",
        sol_s1_title: "Сетевые Системы (On-Grid)", sol_s1_desc: "Система без аккумуляторов, подключенная напрямую к государственной сети. Произведенная энергия сначала покрывает ваши потребности, а излишки продаются в сеть. Самый быстрый возврат инвестиций.",
        sol_s2_title: "Автономные Системы (Off-Grid)", sol_s2_desc: "Полностью независимые системы с аккумуляторной поддержкой. Энергия питает объект и заряжает батареи днем. Полная автономия ночью или при отключениях.",
        sol_s3_title: "Гибридные Системы", sol_s3_desc: "Объединяет функции продажи в сеть и хранения в батареях. Предназначена для 'умных домов', где свет не гаснет даже во время стихийных бедствий.",
        btn_buy_now: "Купить Сейчас", btn_learn_more: "Узнать Больше",
        
        tr_h1_title: "Трансформаторы", tr_h1_sub: "Энергетические центры для промышленности и быта.",
        tr_mq: "У вас крупный объект и вам нужна стабильная мощность?",
        tr_ma: "Профессиональная установка, SCADA мониторинг и обслуживание трансформаторов любой мощности для заводов и жилых комплексов.",
        tr_s1: "Высоковольтные Кабели", tr_s1_desc: "Прокладка линий качественными кабелями (YVV, NYY, ACSR), отвечающими международным стандартам.",
        tr_s2: "SCADA и Мониторинг", tr_s2_desc: "Настройка систем SCADA для удаленного контроля (24/7) изменений напряжения, мощности тока и частоты на подстанциях.",
        tr_s3: "Распределительные Шкафы", tr_s3_desc: "Безопасная установка компенсационных шкафов, элегазовых выключателей, ИБП и систем молниезащиты.",

        li_h1_title: "Дорожное Освещение", li_h1_sub: "Освещаем темные дороги инновациями.",
        li_mq: "Ищете умные решения для вашего города или магистралей?",
        li_ma: "Мы строим умные системы с датчиками день/ночь и централизованным управлением. Доступны сетевые и автономные решения.",
        li_s1: "Сетевые LED Системы", li_s1_desc: "Светодиодные столбы высокой мощности, подключенные к электросети. Идеально для городских дорог.",
        li_s2: "Автономные Солнечные Столбы", li_s2_desc: "Автономное решение для отдаленных районов и мостов. Бесперебойный свет всю ночь.",
        li_kb_title: "Проект Дороги Полад в Карабахе", li_kb_desc: "Предложение нашей компании по автономному солнечному освещению 16 мостов находится на рассмотрении.",

        pj_h1_title: "Успешные Проекты", pj_h1_sub: "Более 200 реализованных проектов по всему Азербайджану.",
        pj_ongoing_title: "Текущие Проекты", pj_ongoing_list: "<li><strong>Драматический Театр Ханкенди:</strong> Прокладка высоковольтных линий.</li><li><strong>Tartar-1 ASC:</strong> Линия высокого напряжения и трансформатор.</li><li><strong>Agali Hotel:</strong> Внедрение системы SCADA.</li><li><strong>Zeytun Pharmaceuticals и Balli Markets:</strong> Электроснабжение складов.</li><li><strong>Джебраил, с. Солтанлы:</strong> Поставка панелей для 424 домов (Мега проект).</li>",
        pj_h2_title: "Проект Джебраил", pj_h2_desc: "Поставка солнечных панелей для 424 домов (В процессе).",
        pj_h3_title: "Гянджа и Гедабек", pj_h3_desc: "Запуск 25 кВт On-Grid в Гяндже и 40 кВт Off-Grid систем в Гедабеке.",
        pj_h4_title: "Проекты Шувалан", pj_h4_desc: "Установка On-Grid систем на 17 и 10 кВт, а также Гибридной системы на 22 кВт.",
        pj_h5_title: "Другие Значимые Проекты", pj_h5_desc: "Электроснабжение администрации села Кенгерли (Агдам).<br><br>Обновление линий сгоревшего здания в Насиминском районе.",

        ab_h1_title: "Eco Az Energy", ab_h1_sub: "Профессиональное обслуживание в энергетическом секторе с 2004 года.",
        ab_p1: "Инжиниринговая компания широкого профиля. Предоставляем услуги по установке трансформаторов, прокладке линий и проектированию освещения. Также импортер известных брендов.",
        ab_t1: "20 Лет", ab_t1_desc: "Опыта в Энергетике", ab_t2: "200+", ab_t2_desc: "Реализованных Проектов", ab_t3: "60%", ab_t3_desc: "Экономия Энергии Клиентов",
        ab_soc_title: "Социальные Проекты", ab_soc_desc: "Мы наградили победителей конкурса стартапов 'GREEN TECH III' и поддержали инновационную молодежь.",
        ab_team_title: "Наша Команда",
        ab_tm1_n: "Хамза Велиев", ab_tm1_r: "Основатель и Директор", ab_tm1_d: "20 лет опыта. Менеджер 200+ проектов и эксперт по международному партнерству.",
        ab_tm2_n: "Ровшан Намазов", ab_tm2_r: "Главный Инженер", ab_tm2_d: "Специалист по электротехнике, надзору и управлению проектами.",
        ab_tm3_n: "Раван Маммадли", ab_tm3_r: "Инженер-Проектировщик", ab_tm3_d: "Самое точное техническое проектирование солнечных систем с использованием AutoCAD.",
        btn_contact: "Контакты", btn_submit: "Отправить", ab_c_info: "Свяжитесь с нами: ecoazenergy@gmail.com | +994 50 250 19 53",

        pan_h1_title: "Солнечные Панели", pan_h1_sub: "Мировые стандарты, прямой импорт и профессиональная установка.",
        pan_ae_title: "AE Solar", pan_ae_desc: "Немецкие технологии и качество. Панели TIER-1 с высокой эффективностью, устойчивостью к затенению и суровым климатическим условиям.",
        pan_longi_title: "LonGi Solar", pan_longi_desc: "Крупнейший в мире производитель монокристаллических панелей. Максимальная выработка энергии (High Efficiency), технология Half-Cell.",
        pan_faers_title: "FAERS", pan_faers_desc: "Надежность и оптимальный бюджет. Долговечные панели для жилых и коммерческих проектов с отличным соотношением цена/качество.",

        inv_h1_title: "Инверторы", inv_h1_sub: "Мозг солнечной энергии. Умное управление и мониторинг.",
        inv_goodwe_title: "GoodWe", inv_goodwe_desc: "Умные инверторы для On-Grid, Off-Grid и Гибридных систем с высокой стабильностью и удаленным управлением.",
        inv_growatt_title: "Growatt", inv_growatt_desc: "Один из самых продаваемых брендов инверторов в мире. Простая установка, удобный интерфейс и высокая энергоэффективность.",

        og_h1_title: "Сетевые Системы", og_h1_sub: "Без аккумуляторов, прямая интеграция в сеть.", og_h2: "Инвестиция, приносящая доход", og_p1: "Вы не только снижаете расходы до нуля, но и получаете пассивный доход, продавая излишки государству. Самый быстрый ROI.",
        offg_h1_title: "Автономные Системы", offg_h1_sub: "Полностью независимая от сети, свободная энергия.", offg_h2: "Свет везде, жизнь без перебоев", offg_p1: "Энергия, собранная днем, сохраняется в литиевых или гелевых батареях, обеспечивая свет всю ночь. Идеально для отдаленных районов.",
        hyb_h1_title: "Гибридные Системы", hyb_h1_sub: "Сила Солнца и Ветра. Полная безопасность и эффективность.", hyb_h2: "Безупречное энергоснабжение", hyb_p1: "Объединяет функции продажи в сеть и хранения в батареях. В 'умных домах' свет не гаснет даже при стихийных бедствиях благодаря интеграции солнечных панелей и ветряных турбин.",

        mdl_title: "Форма Заказа", mdl_sub: "Введите свои данные, и наши специалисты свяжутся с вами.", mdl_btn_send: "Заказать",
        footer_copyright: "Eco AzEnergy © 2026", footer_privacy: "Политика Конфиденциальности", footer_contact: "+994 50 250 19 53"
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    document.querySelectorAll('input[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    langBtn.innerText = lang.toUpperCase();
}

// Ensure proper initial language loading
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('lang') || 'az';
    applyTranslations(currentLang);
    
    // Bind placeholders manually for dynamically injected modal
    const nameInput = document.querySelector('input[name="Ad_Soyad"]');
    const phoneInput = document.querySelector('input[name="Telefon"]');
    const addrInput = document.querySelector('input[name="Unvan"]');
    if(nameInput) nameInput.placeholder = translations[currentLang].mdl_name;
    if(phoneInput) phoneInput.placeholder = translations[currentLang].mdl_phone;
    if(addrInput) addrInput.placeholder = translations[currentLang].mdl_addr;
});

langSelectors.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
        langDropdown.classList.remove('show');
    });
});
