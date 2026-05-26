// ========== SERVICE WORKER PWA - CACHE OFFLINE ==========/
const CACHE_NAME = 'barbearia-v2';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './bg-music.mp3',
    './slide-corte.jpg',
    './slide-degrade.jpg',
    './slide-barba.jpg',
    './slide-combo.jpg',
    './galeria-corte-1.jpg',
    './galeria-corte-2.jpg',
    './galeria-corte-3.jpg',
    './galeria-barba-1.jpg',
    './galeria-barba-2.jpg',
    './galeria-corte-4.jpg',
    './antes.jpg',
    './depois.jpg',
    './status.html',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
    console.log('[Service Worker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Cache aberto');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('[Service Worker] Erro ao cachear:', err))
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Ativando...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deletando cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - cache first, fallback to network
self.addEventListener('fetch', event => {
    // Ignorar requisições POST e de terceiros
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Se encontrou no cache, retorna
                if (response) {
                    console.log('[Service Worker] Servindo do cache:', event.request.url);
                    return response;
                }

                // Se não encontrou, tenta buscar da rede
                return fetch(event.request)
                    .then(response => {
                        // Se não é uma resposta válida, retorna
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar a resposta
                        const responseToCache = response.clone();

                        // Cachear a resposta para futuras requisições
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                        return response;
                    })
                    .catch(err => {
                        console.log('[Service Worker] Falha ao buscar:', event.request.url);
                        // Retornar página offline se necessário
                        return new Response('Offline - recurso não disponível', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});

// Mensagem de update
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('[Service Worker] Carregado com sucesso!');
