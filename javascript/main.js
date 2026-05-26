// ========== DADOS ==========/
const slidesData = [
    { titulo: "Navalha Clássica", descricao: "Precisão e tradição", src: "https://images.unsplash.com/photo-1599912027606-d0b92d3ee439?w=1200&h=675&fit=crop" },
    { titulo: "Degradê Perfeito", descricao: "Transição milimétrica", src: "https://images.unsplash.com/photo-1605296867424-35a763b75fca?w=1200&h=675&fit=crop" },
    { titulo: "Barba Impecável", descricao: "Modelagem premium", src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=675&fit=crop" },
    { titulo: "Combo Premium", descricao: "Corte + Barba com estilo", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=675&fit=crop" }
];

const fotosPortfolio = [
    { titulo: "Degradê Navalhado", descricao: "Textura e precisão", src: "https://images.unsplash.com/photo-1599912027606-d0b92d3ee439?w=400&h=400&fit=crop" },
    { titulo: "Corte Social Italiano", descricao: "Volume & acabamento", src: "https://images.unsplash.com/photo-1605296867424-35a763b75fca?w=400&h=400&fit=crop" },
    { titulo: "Pompadour Moderno", descricao: "Estilo vintage atualizado", src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop" },
    { titulo: "Barba Perfeita", descricao: "Desenho com navalha", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop" },
    { titulo: "UnderCut Texturizado", descricao: "Contraste moderno", src: "https://images.unsplash.com/photo-1599912027606-d0b92d3ee439?w=400&h=400&fit=crop" },
    { titulo: "Moicano Estruturado", descricao: "Atitude refinada", src: "https://images.unsplash.com/photo-1605296867424-35a763b75fca?w=400&h=400&fit=crop" }
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

let currentIndex = 0;
let galleryItems = [];

let isMusicPlaying = false;
let isMusicSupported = false;

// ========== DOM ELEMENTS ==========/
const swiperWrapper = document.getElementById('swiperWrapper');

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

// ========== SWIPER SLIDER ==========/
function inicializarSwiper() {
    if (!swiperWrapper) return;
    
    // Preencher slides
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

    // Inicializar Swiper
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
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            }
        }
    });
}

// Inicializar Swiper quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarSwiper);
} else {
    inicializarSwiper();
}

// ========== GALERIA & LIGHTBOX ==========/
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

// ========== NAVEGAÇÃO ==========/
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

// ========== PLAYER DE MÚSICA ROBUSTO ==========/
function initMusicPlayer() {
    if (!audio || !musicToggle) {
        console.warn('Elementos de áudio não encontrados');
        return;
    }

    // Verificar suporte
    const canPlayMp3 = audio.canPlayType && audio.canPlayType('audio/mpeg') !== '';
    const canPlayAudio = audio.canPlayType && audio.canPlayType('audio/mpeg') !== '' || audio.canPlayType('audio/wav') !== '';
    
    if (!canPlayAudio) {
        console.warn('Navegador não suporta áudio');
        if (musicPlayer) musicPlayer.style.display = 'none';
        return;
    }

    isMusicSupported = true;

    // Restaurar estado salvo
    const savedState = localStorage.getItem('musicPlaying');
    
    // Event listeners do áudio
    audio.addEventListener('loadstart', () => console.log('Carregando áudio...'));
    audio.addEventListener('canplay', () => console.log('Áudio pronto para tocar'));
    audio.addEventListener('play', () => {
        isMusicPlaying = true;
        localStorage.setItem('musicPlaying', 'true');
        atualizarUIMusica();
    });
    audio.addEventListener('pause', () => {
        isMusicPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
        atualizarUIMusica();
    });
    audio.addEventListener('ended', () => {
        // Loop contínuo
        audio.currentTime = 0;
        audio.play().catch(err => console.warn('Erro ao reiniciar áudio:', err));
    });
    audio.addEventListener('error', (e) => {
        console.error('Erro de áudio:', e);
        mostrarToast('Erro ao carregar música. Verifique a conexão.');
        isMusicPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
        atualizarUIMusica();
    });

    // Visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isMusicPlaying) {
            audio.pause();
        } else if (!document.hidden && savedState === 'true' && !isMusicPlaying) {
            audio.play().catch(err => console.warn('Erro ao retomar:', err));
        }
    });

    // Toggle button
    musicToggle.addEventListener('click', () => toggleMusica(), false);

    // Restaurar estado anterior se foi salvo
    if (savedState === 'true') {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => {
                console.warn('Autoplay bloqueado:', err);
                localStorage.setItem('musicPlaying', 'false');
                atualizarUIMusica();
            });
        }
    }
}

function toggleMusica() {
    if (!audio) return;

    if (isMusicPlaying) {
        audio.pause();
        mostrarToast('Música pausada');
    } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isMusicPlaying = true;
                    localStorage.setItem('musicPlaying', 'true');
                    mostrarToast('Música ambiente ativada');
                    atualizarUIMusica();
                })
                .catch(err => {
                    console.error('Erro ao reproduzir:', err);
                    mostrarToast('Clique para iniciar a música');
                });
        }
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
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎵 Iniciando site...');
    
    // Slider - Swiper inicializado automaticamente
    // criarSlides(); // Removido - usando Swiper agora
    
    // Galeria
    carregarGaleria();
    
    // Navegação
    configurarNavegacao();
    configurarHeaderScroll();
    configurarRedesSociais();
    atualizarLinkAtivo();
    handleBackToTop();
    
    // Música (crítico)
    initMusicPlayer();
    
    console.log('✅ Site carregado com sucesso!');
});

// Fallback para se o DOMContentLoaded não disparar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Fallback DOMContentLoaded');
    });
} else {
    console.log('Documento já carregado');
}
