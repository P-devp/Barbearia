// ========== DADOS GERAIS ==========/
const slidesData = [
    { titulo: "Navalha Clássica", descricao: "Precisão e tradição", src: "slide-corte.jpg" },
    { titulo: "Degradê Perfeito", descricao: "Transição milimétrica", src: "slide-degrade.jpg" },
    { titulo: "Barba Impecável", descricao: "Modelagem premium", src: "slide-barba.jpg" },
    { titulo: "Combo Premium", descricao: "Corte + Barba com estilo", src: "slide-combo.jpg" }
];

const fotosPortfolio = [
    { titulo: "Degradê Navalhado", descricao: "Textura e precisão", categoria: "cortes", src: "galeria-corte-1.jpg" },
    { titulo: "Corte Social Italiano", descricao: "Volume & acabamento", categoria: "cortes", src: "galeria-corte-2.jpg" },
    { titulo: "Pompadour Moderno", descricao: "Estilo vintage atualizado", categoria: "cortes", src: "galeria-corte-3.jpg" },
    { titulo: "Barba Perfeita", descricao: "Desenho com navalha", categoria: "barbas", src: "galeria-barba-1.jpg" },
    { titulo: "UnderCut Texturizado", descricao: "Contraste moderno", categoria: "cortes", src: "galeria-corte-4.jpg" },
    { titulo: "Moicano Estruturado", descricao: "Atitude refinada", categoria: "barbas", src: "galeria-barba-2.jpg" }
];

const testimonialData = [
    { nome: "Carlos Silva", role: "Cliente Premium", texto: "Experiência incrível! O atendimento é impecável e a qualidade do corte é de primeira. Com certeza voltarei!", stars: "★★★★★" },
    { nome: "João Pedro", role: "Cliente Regular", texto: "Melhor barbearia da região. Os profissionais realmente entendem de estilo. Recomendo muito!", stars: "★★★★★" },
    { nome: "Lucas Santos", role: "Novo Cliente", texto: "Adorei a atmosfera e o cuidado dos barbeiros com cada detalhe. Ficou perfeito!", stars: "★★★★★" }
];

const placeholderSVG = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <rect width="400" height="300" fill="#3D2817"/>
  <circle cx="200" cy="80" r="40" fill="#6BA84D" opacity="0.8"/>
  <path d="M 200 120 Q 220 140 200 160 Q 180 140 200 120" fill="#5C4033" opacity="0.8"/>
  <text x="50%" y="240" dominant-baseline="middle" text-anchor="middle" 
        font-family="'Playfair Display', serif" font-size="16" fill="#5DB85D" font-weight="bold">
    Imagem indisponível
  </text>
</svg>`);

// ========== VARIÁVEIS GLOBAIS ==========/
let swiperInstance = null;
let swiperTestimonials = null;
let currentIndex = 0;
let galleryItems = [];
let isMusicPlaying = false;
let currentFilter = 'todos';

// ========== DOM ELEMENTS ==========/
const swiperWrapper = document.getElementById('swiperWrapper');
const testimonialSwiper = document.getElementById('testimonialSwiper');
const galleryContainer = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.querySelector('.lightbox-close');
const prevLightBtn = document.querySelector('.lightbox-prev');
const nextLightBtn = document.querySelector('.lightbox-next');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const toast = document.getElementById('toast');
const backToTopBtn = document.getElementById('backToTop');
const audio = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicPlayer = document.querySelector('.music-player');
const themeToggle = document.getElementById('theme-toggle');
const comparisonRange = document.getElementById('comparison-range');
const afterImage = document.querySelector('.comparison-slider .after-image');

// ========== SWIPER SLIDER (DESTAQUES) ==========/
function inicializarSwiper() {
    if (!swiperWrapper) return;
    
    swiperWrapper.innerHTML = slidesData.map((slide, index) => `
        <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="Slide ${index+1} de ${slidesData.length}">
            <div class="swiper-slide-image">
                <img src="${slide.src}" alt="${slide.titulo}" loading="lazy">
            </div>
            <div class="swiper-slide-content">
                <h3>${slide.titulo}</h3>
                <p>${slide.descricao}</p>
            </div>
        </div>
    `).join('');

    swiperInstance = new Swiper('.swiper-destaques', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '#swiperPagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        accessibility: {
            enabled: true,
            announceSlideNumber: true
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarSwiper);
} else {
    try { inicializarSwiper(); } catch(e) { console.warn('Erro Swiper:', e); }
}

// ========== SWIPER TESTIMONIALS ==========/
function inicializarTestimonials() {
    if (!testimonialSwiper) return;

    testimonialSwiper.innerHTML = testimonialData.map((test, index) => `
        <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="Depoimento ${index+1}">
            <div class="testimonial-card">
                <div class="testimonial-stars">${test.stars}</div>
                <p class="testimonial-text">"${test.texto}"</p>
                <div class="testimonial-author">${test.nome}</div>
                <div class="testimonial-role">${test.role}</div>
            </div>
        </div>
    `).join('');

    swiperTestimonials = new Swiper('.swiper-testimonials', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '#testimonialPagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-testimonials .swiper-button-next',
            prevEl: '.swiper-testimonials .swiper-button-prev'
        },
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarTestimonials);
} else {
    try { inicializarTestimonials(); } catch(e) { console.warn('Erro Testimonials:', e); }
}

// ========== GALERIA & FILTROS ==========/
function carregarGaleria() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    fotosPortfolio.forEach((foto, index) => {
        const article = document.createElement('article');
        article.className = 'gallery-item';
        article.setAttribute('tabindex', '0');
        article.setAttribute('role', 'button');
        article.setAttribute('aria-label', `Abrir imagem: ${foto.titulo}`);
        article.dataset.index = index;
        article.dataset.categoria = foto.categoria;

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        const img = document.createElement('img');
        img.src = foto.src;
        img.alt = foto.titulo;
        img.loading = 'lazy';
        img.className = 'gallery-img';
        img.onerror = function () {
            this.src = placeholderSVG;
            this.alt = 'Imagem não encontrada';
            this.style.objectFit = 'contain';
            this.style.padding = '10px';
        };
        imageWrapper.appendChild(img);

        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.innerHTML = `<span>${foto.titulo.toUpperCase()}</span><span class="caption-small">${foto.descricao}</span>`;
        
        article.appendChild(imageWrapper);
        article.appendChild(caption);
        article.addEventListener('click', () => abrirLightbox(index));
        article.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirLightbox(index); }
        });

        galleryContainer.appendChild(article);
    });

    galleryItems = document.querySelectorAll('.gallery-item');
}

// Filtros de Galeria
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            
            currentFilter = this.dataset.filter;
            filtrarGaleria(currentFilter);
        });
    });
}

function filtrarGaleria(categoria) {
    galleryItems.forEach(item => {
        if (categoria === 'todos' || item.dataset.categoria === categoria) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// ========== LIGHTBOX ==========/
function abrirLightbox(index) {
    currentIndex = index;
    atualizarConteudoLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
}

function fecharLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (galleryItems[currentIndex]) galleryItems[currentIndex].focus();
}

function atualizarConteudoLightbox() {
    const item = fotosPortfolio[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.titulo;
    lightboxCaption.textContent = `${item.titulo} — ${item.descricao}`;
    lightboxImg.onerror = () => { lightboxImg.src = placeholderSVG; };
}

function imagemAnterior() { 
    currentIndex = (currentIndex - 1 + fotosPortfolio.length) % fotosPortfolio.length; 
    atualizarConteudoLightbox(); 
}

function proximaImagem() { 
    currentIndex = (currentIndex + 1) % fotosPortfolio.length; 
    atualizarConteudoLightbox(); 
}

closeBtn?.addEventListener('click', fecharLightbox);
prevLightBtn?.addEventListener('click', imagemAnterior);
nextLightBtn?.addEventListener('click', proximaImagem);
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowLeft') imagemAnterior();
    if (e.key === 'ArrowRight') proximaImagem();
});

// ========== COMPARISON SLIDER (ANTES/DEPOIS) ==========/
function setupComparisonSlider() {
    if (!comparisonRange || !afterImage) return;

    const slider = document.querySelector('.comparison-slider');
    const afterImg = afterImage.querySelector('img');

    function syncDimensions() {
        if (!slider || !afterImg) return;
        const w = slider.offsetWidth;
        afterImg.style.width = w + 'px';
        afterImg.style.maxWidth = w + 'px';
    }

    function updateComparison() {
        afterImage.style.width = comparisonRange.value + '%';
    }

    syncDimensions();
    updateComparison();

    comparisonRange.addEventListener('input', updateComparison);
    window.addEventListener('resize', syncDimensions);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupComparisonSlider);
} else {
    try { setupComparisonSlider(); } catch(e) { console.warn('Erro Comparison:', e); }
}

// ========== THEME TOGGLE (DARK/LIGHT MODE) ==========/
function setupThemeToggle() {
    if (!themeToggle) return;

    // Restaurar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isDark = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
} else {
    setupThemeToggle();
}

// ========== NAVEGAÇÃO SUAVE ==========/
function configurarNavegacao() {
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        atualizarLinkAtivo();
        handleBackToTop();
    }, { passive: true });
}

function atualizarLinkAtivo() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id'); });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}

function configurarHeaderScroll() {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

function configurarRedesSociais() {
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarToast('Em breve nas redes sociais. Fique ligado!');
        });
    });
}

// ========== TOAST NOTIFICATIONS ==========/
function mostrarToast(mensagem) {
    if (!toast) return;
    toast.textContent = mensagem;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');
    clearTimeout(toast.timeout);
    toast.timeout = setTimeout(() => {
        toast.classList.remove('show');
        toast.setAttribute('aria-hidden', 'true');
    }, 3000);
}

// ========== BACK TO TOP ==========/
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== FORMULÁRIO DE CONTATO ==========/
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        // FormSubmit.co vai processar automaticamente
        mostrarToast('Mensagem enviada com sucesso! Obrigado!');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupContactForm);
} else {
    try { setupContactForm(); } catch(e) { console.warn('Erro Contact:', e); }
}

// ========== PLAYER DE MÚSICA ==========/
function initMusicPlayer() {
    if (!audio || !musicToggle) {
        console.warn('Elementos de áudio não encontrados');
        return;
    }

    audio.load();

    audio.addEventListener('play', () => {
        isMusicPlaying = true;
        atualizarUIMusica();
    });

    audio.addEventListener('pause', () => {
        isMusicPlaying = false;
        atualizarUIMusica();
    });

    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    });

    audio.addEventListener('error', () => {
        console.error('Erro ao carregar áudio');
        mostrarToast('Erro ao carregar música.');
        isMusicPlaying = false;
        atualizarUIMusica();
    });

    musicToggle.addEventListener('click', toggleMusica);
}

function toggleMusica() {
    if (!audio) return;

    if (audio.paused) {
        audio.play().catch(() => {
            mostrarToast('Clique novamente para iniciar a música');
        });
    } else {
        audio.pause();
    }
}

function atualizarUIMusica() {
    if (isMusicPlaying) {
        musicToggle.classList.add('playing');
        musicToggle.setAttribute('aria-label', 'Pausar música ambiente');
        musicToggle.title = 'Pausar música';
    } else {
        musicToggle.classList.remove('playing');
        musicToggle.setAttribute('aria-label', 'Tocar música ambiente');
        musicToggle.title = 'Tocar música';
    }
}

// ========== INICIALIZAÇÃO ==========/
function iniciarSite() {
    try { carregarGaleria(); } catch(e) { console.warn('Erro galeria:', e); }
    try { setupGalleryFilters(); } catch(e) { console.warn('Erro filtros:', e); }
    try { configurarNavegacao(); } catch(e) { console.warn('Erro navegação:', e); }
    try { configurarHeaderScroll(); } catch(e) { console.warn('Erro header:', e); }
    try { configurarRedesSociais(); } catch(e) { console.warn('Erro redes:', e); }
    try { atualizarLinkAtivo(); } catch(e) { console.warn('Erro link:', e); }
    try { handleBackToTop(); } catch(e) { console.warn('Erro backtop:', e); }
    try { initMusicPlayer(); } catch(e) { console.warn('Erro música:', e); }
}

document.addEventListener('DOMContentLoaded', iniciarSite);

if (document.readyState !== 'loading') {
    iniciarSite();
}
