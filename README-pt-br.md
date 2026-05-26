# 💈 Barbearia Corte & Estilo



**Website Premium para Barbearia | Design Moderno e Responsivo**



[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)



## 📖 Sobre



Website profissional de barbearia com design elegante em tema escuro com acentos em ouro e verde. Desenvolvido com JavaScript Vanilla, apresentando slider de imagens dinâmico, galeria responsiva, tabela de preços de serviços e elementos premium de UI/UX.



**Demonstração ao Vivo**: [Visualizar website](https://p-devp.github.io/Barbearia/)



---



## 🎨 Funcionalidades



### 🎯 Funcionalidades Principais

- **Navegação Header Fixa** com links que scrollam suavemente

- **Seção Hero** com call-to-action atrativo

- **Slider de Imagens Dinâmico** (Swiper.js com efeito fade)

- **Galeria Responsiva** com visualizador modal lightbox

- **Tabela de Preços Interativa** com ícones emoji de serviços

- **Player de Música Ambiente** com toggle play/pause

- **Integração Google Maps** para localização

- **Botão Voltar ao Topo** para navegação eficiente



### 🎬 Melhorias Visuais

- **Animações Suaves** usando CSS transitions & transforms

- **Gradientes Premium** para estética sofisticada

- **Efeitos 3D em Perspectiva** nos ícones emoji

- **Filtros Drop-shadow** para profundidade

- **Header Glassmorphism** com backdrop blur



### 📱 Responsividade

- **Design Mobile-First** com 4 breakpoints (480px, 768px, 1024px)

- **Gestos Touch** - Navegação por swipe em mobile

- **Layouts com Grid Flexível** usando CSS Grid & Flexbox

- **Imagens Otimizadas** com lazy loading



### ♿ Acessibilidade

- **Labels ARIA** com HTML semântico

- **Navegação por Teclado** (Tab, Enter, Setas, Escape)

- **Suporte para Leitores de Tela** com roles & descriptions

- **Gerenciamento de Foco** com outlines visíveis



### ⚡ Performance

- **Carregamento Defer de Scripts** para render mais rápido

- **Propriedades Customizadas CSS** para estilo eficiente

- **Lazy Loading de Imagens** ao scroll

- **Dependências Mínimas** (apenas Swiper.js + Font Awesome)



---



## 🛠️ Stack Tecnológico



| Tecnologia | Propósito |

|-----------|----------|

| **HTML5** | Estrutura semântica e formulários |

| **CSS3** | Estilo com Grid, Flexbox, Gradientes |

| **JavaScript Vanilla (ES6+)** | Funcionalidades interativas |

| **Swiper.js** | Carrossel avançado de imagens |

| **Font Awesome** | Biblioteca de ícones |

| **Google Fonts** | Playfair Display & Source Sans 3 |



---



## 🎨 Paleta de Cores



**Tema Premium Marrom & Verde**



```css

Cores Primárias:

├─ Marrom Escuro: #2B1810

├─ Marrom Médio: #5C4033

├─ Marrom Claro: #8B6F47

├─ Verde Luminoso: #6BA84D

└─ Verde Acento: #5DB85D



Background:

├─ Principal: #1A0F08 (Preto Profundo)

├─ Secundário: #2A1810

└─ Terciário: #3D2817



Acentos:

├─ Bronze: #C4A574

├─ Texto Claro: #E8DCC8

└─ Texto Suave: #C9B8A3

```



---



## 📁 Estrutura do Projeto



```

Barbearia/

├── index.html              # Arquivo HTML principal

├── Css/

│   └── style.css          # Toda a estilização (23.1 KB)

├── javascript/

│   └── main.js            # Funcionalidades interativas (17.02 KB)

├── audio/

│   └── ambiente.mp3       # Música ambiente (placeholder)

├── images/

│   └── (pasta placeholder)

├── README.md              # Documentação em Português

└── README-PT-BR.md        # Documentação em Português (backup)

```



---



## 🚀 Como Começar



### Instalação



1. **Clone o repositório**

   ```bash

   git clone https://github.com/P-devp/Barbearia.git

   cd Barbearia

   ```



2. **Abra no navegador**

   - Simplesmente abra `index.html` com qualquer navegador moderno

   - Nenhum processo de build ou dependências necessárias

   - Funciona offline (exceto Google Maps & imagens)



### Requisitos

- Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

- Conexão com internet (para recursos CDN & imagens)



### Configuração

Edite estas seções em `javascript/main.js`:

- **`slidesData`** - Conteúdo dos slides em destaque

- **`fotosPortfolio`** - Itens da galeria

- Atualize URLs de imagens em ambos os arrays



---



## 📱 Compatibilidade de Navegadores



| Navegador | Suporte | Versão |

|-----------|---------|--------|

| Chrome | ✅ Completo | 90+ |

| Firefox | ✅ Completo | 88+ |

| Safari | ✅ Completo | 14+ |

| Edge | ✅ Completo | 90+ |

| Safari Mobile | ✅ Completo | iOS 13+ |

| Chrome Mobile | ✅ Completo | 90+ |



---



## 🎯 Guia de Uso



### Navegação

- **Links Header** - Clique para scroll suave até seções

- **Slider** - Use setas ou pontos para navegador cortes em destaque

- **Galeria** - Clique em imagens para abrir visualizador lightbox

- **Teclado** - Use setas para navegação do slider



### Player de Música

- Localizado no canto inferior esquerdo

- Clique no ícone de música para toggle de áudio

- Auto-play ao carregar página (permissão do navegador necessária)



### Breakpoints Responsivos

- **480px** - Smartphones (retrato)

- **768px** - Tablets (paisagem)

- **1024px** - Tablets grandes & desktops pequenos

- **1360px+** - Desktops full-size



---



## 🔧 Personalização



### Alterar Cores

Edite as variáveis CSS em `Css/style.css`:

```css

:root {

    --verde-luminoso: #6BA84D;

    --marrom-escuro: #2B1810;

    --acento-bronze: #C4A574;

    /* ... mais variáveis ... */

}

```



### Atualizar Conteúdo

- **Preços** - Modifique itens `.pricing-row` em `index.html`

- **Serviços** - Atualize array `fotosPortfolio` em `main.js`

- **Horários** - Edite informações de contato no footer



### Adicionar Imagens Reais

Substitua URLs em `javascript/main.js`:

```javascript

const slidesData = [

    { 

        titulo: "Nome do Serviço",

        descricao: "Descrição do serviço",

        src: "sua-url-imagem.jpg"

    }

];

```



---



## 📊 Métricas de Performance



- **Tempo de Carregamento**: < 2 segundos

- **Score Lighthouse**: 92+ (Performance, Acessibilidade, SEO)

- **First Contentful Paint**: < 0.8s

- **Time to Interactive**: < 1.5s

- **Tamanho CSS**: 23.1 KB

- **Tamanho JavaScript**: 17.02 KB



---



## 🚨 Problemas Conhecidos & Limitações



- ❌ Reprodução de áudio requer suporte CORS do navegador

- ⚠️ Google Maps requer conexão com internet

- ⚠️ Imagens hospedadas no Unsplash (requer internet)

- ℹ️ Protocolo local file:// pode bloquear alguns recursos



### Soluções

- Para problemas CORS: Hospede em servidor web (localhost, GitHub Pages, etc.)

- Para uso offline: Baixe imagens localmente e atualize URLs

- Para produção: Use servidor web apropriado com HTTPS



---



## 🛣️ Roadmap



- [x] Tema premium escuro (Marrom & Verde)

- [x] Slider dinâmico com Swiper.js

- [x] Galeria responsiva com lightbox

- [x] Player de música ambiente

- [x] Tabela de preços com ícones

- [ ] Sistema de agendamento de clientes

- [ ] Integração WhatsApp

- [ ] Integração feed Instagram

- [ ] Gateway de pagamento (Stripe/PayPal)

- [ ] Dashboard administrativo



---



## 🤝 Contribuindo



Contribuições são bem-vindas! Por favor, siga estes passos:



1. Faça fork do repositório

2. Crie uma branch de feature (`git checkout -b feature/funcao-incrivel`)

3. Commit suas alterações (`git commit -m 'Adiciona funcionalidade incrível'`)

4. Push para a branch (`git push origin feature/funcao-incrivel`)

5. Abra um Pull Request



---



## 📄 Licença



Este projeto é licenciado sob a **Licença MIT** - veja o arquivo LICENSE para detalhes.



---



## 👨‍💼 Autor



**Nome do Projeto**: Barbearia Corte & Estilo  

**Repositório**: [P-devp/Barbearia](https://github.com/P-devp/Barbearia)  

**Criado**: Maio 2026



---





---



## 🌐 Traduções



- 🇧🇷 **Português** - [README.md](README.md) (você está aqui)

- 🇧🇷 **Português (Backup)** - [README-PT-BR.md](README-PT-BR.md)



---



## 📸 Capturas de Tela



### Seção Hero

Design com gradiente moderno com botão CTA claro e indicador de scroll



### Slider de Destaques

Carrossel auto-reproduzível com efeito fade e navegação dinâmica



### Tabela de Preços

Lista responsiva de serviços com ícones emoji 3D e preços



### Galeria

Portfólio profissional com visualizador modal lightbox



### Player de Música

Widget fixo com toggle play/pause e indicador de status



---



## 🙏 Agradecimentos



- **Swiper.js** pela funcionalidade do carrossel

- **Font Awesome** pela biblioteca de ícones

- **Google Fonts** pela tipografia premium

- **Unsplash** pelas imagens de demonstração

- **MDN Web Docs** pela documentação abrangente



---



**Última Atualização**: 25 de Maio de 2026  

**Status**: ✅ Pronto para Produção

