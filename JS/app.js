/* ============================================
   AWA FAYE — PORTFOLIO GÉOMATIQUE
   app.js — Version Finale Complète
   ============================================ */

// ===== DONNÉES PROJETS =====
const PROJETS = {
    fr: [
        {
            id: 1,
            titre: "Cartographie urbaine de Thiès",
            description: "Enquête terrain sur le trafic routier à Thiès. Collecte et analyse de données d'infrastructures routières.",
            tags: ["QGIS", "KoboToolBox", "Multi Counter"],
            categorie: "sig",
            lien: "pdf/trafic.pdf",
            image: "image/trc.jpg"
        },
        {
            id: 2,
            titre: "Qualité de l'air à Thiès",
            description: "Analyse des niveaux de pollution à partir de capteurs répartis en zones.",
            tags: ["RStudio"],
            categorie: "data",
            lien: "pdf/analyse.pdf",
            image: "image/qualite.png"
        },
        {
            id: 3,
            titre: "Portfolio Personnel",
            description: "Vitrine en ligne pour présenter compétences, projets et formulaire de contact avec HTML5, CSS3, JavaScript.",
            tags: ["VScode"],
            categorie: "web",
            lien: "https://fawa12748.github.io/awa-faye-portfolio/",
            image: "image/portf.png"
        },
        {
            id: 4,
            titre: "CV Responsive",
            description: "Réalisation d'un CV responsive avec HTML et CSS.",
            categorie: "web",
            tags: ["VSCode"],
            lien: "pdf/cv.pdf",
            image: "image/cv.png"
        },
             {
            id: 5,
            titre: "Application de Gestion de Matériel",
            description: "Application web développée avec HTML, CSS et JavaScript pour gérer le matériel topographique et géodésique à l'UFR SI. Permet d'ajouter, modifier, supprimer et rechercher du matériel.",
            tags: ["pyton","Pycharm"],
            categorie: "web",
            lien: "#",
            image: "image/Fond.png"
        }
    ],
    en: [
        {
            id: 1,
            titre: "Urban Mapping of Thiès",
            description: "Field survey on road traffic in Thiès. Collection and analysis of road infrastructure data.",
            tags: ["QGIS", "KoboToolBox", "Multi Counter"],
            categorie: "sig",
            lien: "pdf/trafic.pdf",
            image: "image/trc.jpg"
        },
        {
            id: 2,
            titre: "Air Quality in Thiès",
            description: "Analysis of pollution levels from sensors distributed across zones.",
            tags: ["RStudio"],
            categorie: "data",
            lien: "pdf/analyse.pdf",
            image: "image/qualite.png"
        },
        {
            id: 3,
            titre: "Personal Portfolio",
            description: "Online showcase to present skills, projects and a contact form.",
            tags: ["VScode", "HTML5", "CSS3", "JavaScript"],
            categorie: "web",
            lien: "https://fawa12748.github.io/awa-faye-portfolio/",
            image: "image/portf.png"
        },
        {
            id: 4,
            titre: "Responsive CV",
            description: "Creation of a responsive CV using HTML and CSS.",
            categorie: "web",
            tags: ["VSCode", "CSS", "HTML"],
            lien: "pdf/cv.pdf",
            image: "image/cv.png"
        }
    ]
};

// ===== DONNÉES COMPÉTENCES =====
const competences = [
    {
        categorie: "🗺️ SIG & Cartographie",
        description: "Maîtrise des outils de Systèmes d'Information Géographique pour la création de cartes thématiques et l'analyse spatiale.",
        skills: [
            { nom: "QGIS", icone: "fas fa-map", pct: 95, niveau: "Avancé", desc: "Cartographie thématique avancée, géoréférencement, numérisation de données vectorielles, analyses spatiales, création de mise en page " },
            { nom: "ArcGIS", icone: "fas fa-globe", pct: 85, niveau: "Avancé", desc: "numérisation, analyses spatiales, création de cartes et utilisation de ArcCatalog pour la gestion des données" },
            { nom: "Télédétection", icone: "fas fa-satellite", pct: 65, niveau: "Intermédiaire", desc: "Analyse d'images satellitaires (Landsat, Sentinel), calcul d'indices spectraux (NDVI, NDWI), classification non supervisée " }
        ]
    },
    {
        categorie: "💻 Développement Web",
        description: "Création d'interfaces web modernes et d'applications cartographiques interactives accessibles à tous.",
        skills: [
            { nom: "HTML & CSS", icone: "fab fa-html5", pct: 80, niveau: "Avancé", desc: "Intégration, responsive design (mobile-first), animations CSS, variables CSS pour les animations" },
            { nom: "JavaScript", icone: "fab fa-js", pct: 70, niveau: "Intermédiaire", desc: "Manipulation du DOM, événements, création de modales, animations et interactions utilisateur" },
            { nom: "Git & GitHub", icone: "fab fa-github", pct: 45, niveau: "Débutant", desc: "Versionnage de code avec Git, création de dépôts sur GitHub et déploiement de sites sur GitHub Pages." }
        ]
    },
    {
        categorie: "📊 Analyse de données",
        description: "Traitement statistique et analyse de données géographiques pour en extraire des informations pertinentes.",
        skills: [
            { nom: "RStudio", icone: "fab fa-r-project", pct: 95, niveau: "Avancé", desc: "Statistiques spatiales, visualisation de données, analyses multivariées, régressions spatiales et R Markdown" },
            { nom: "Python", icone: "fab fa-python", pct: 80, niveau: "Avancé", desc: "Découverte de Python pour l'analyse de données. Apprentissage des bases : variables, boucles, fonctions" },
            { nom: "Excel", icone: "fas fa-file-excel", pct: 80, niveau: "Avancé", desc: "Analyse statistique descriptive, tableaux croisés dynamiques, création de graphiques cartographiques, traitement et nettoyage de données " },
            { nom: "MySQL", icone: "fas fa-database", pct: 65, niveau: "Intermédiaire", desc: "Requêtes SQL, gestion de bases de données , création et manipulation de tables et jointures" }
        ]
    },
    {
        categorie: "🎨 Outils & Méthodes",
        description: "Utilisation d'outils complémentaires pour la production de documents professionnels et la gestion de projets.",
        skills: [
            { nom: "Design cartographique", icone: "fas fa-palette", pct: 60, niveau: "Intermédiaire", desc: "Conception de cartes esthétiques et fonctionnelles, choix des couleurs et symboles, création de légendes" },
            { nom: "Méthodologie projet", icone: "fas fa-tasks", pct: 75, niveau: "Avancé", desc: "Planification de projet, gestion des tâches, respect des délais, travail en équipe, rédaction de rapports ,méthodologies utilisées" },
            { nom: "KoboToolBox", icone: "fas fa-mobile-alt", pct: 65, niveau: "Intermédiaire", desc: "Création de formulaires d'enquête, analyse des résultats, export vers Excel et gestion des données collectées" },
            { nom: "PowerPoint", icone: "fas fa-chalkboard", pct: 95, niveau: "Avancé", desc: "Création de présentations professionnelles, insertion de cartes et graphiques, animations maîtrisées" }
        ]
    }
];

// ===== DONNÉES GALERIE =====
const galeriePhotos = [
    { src: "image/galerie/trf1.png", alt: "Projets trafic", caption: "Carte de chaleur du trafic total" },
    { src: "image/galerie/trf2.png", alt: "Projets trafic", caption: "Carte du trafic par période" },
    { src: "image/galerie/trf3.png", alt: "Projets trafic", caption: "Carte du trafic par type de véhicule" },
    { src: "image/galerie/trf4.png", alt: "Projets trafic", caption: "Carte du trafic total par carrefour" },
    { src: "image/galerie/CARTO.jpg", alt: "Analyse spatiale", caption: "Numérisation" },
    { src: "image/galerie/cartesen.png", alt: "carte", caption: "Carte du Sénégal" },
    { src: "image/galerie/grp1.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/grp2.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/grp3.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/grp4.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/grp5.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/grp6.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "image/galerie/carte.png", alt: "Graphique", caption: "Région de Tamba" }
];

// ===== DÉTECTION MOBILE =====
const isMobile = () => window.innerWidth <= 768;
const isTablet = () => window.innerWidth > 768 && window.innerWidth <= 1024;

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Démarrage du portfolio...");

    initTheme();
    initHamburger();
    initScrollSpy();
    renderProjets();
    renderCompetences();
    initFiltres();
    initReveal();
    initContact();
    initBlog()
    initBackToTop();
    initAnimations();
    initLang();
    initDownloadCV();
    initQRCode();
    initShareButton();
    initViewToggle();
    initTypingAnimation();
    initStatsCounter();
    initSmoothScroll();
    initCustomCursor();
    initSocialLinks();
    initHeroButtons();
    initGalerieTrigger();
    initParticleBackground();
    initMouseParallax();
    initGlowEffect();
    initFloatingElements();

    console.log("🎉 Portfolio Awa Faye — initialisé avec succès !");
});

// ===== INITIALISATION DES BOUTONS HERO =====
function initHeroButtons() {
    const aboutBtn = document.getElementById('open-about-hero');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#a-propos');
            if (target) {
                const navH = document.querySelector('.navbar')?.offsetHeight || 80;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - navH,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ===== BOUTON GALERIE =====
function initGalerieTrigger() {
    const galerieBtn = document.getElementById('galerie-trigger-btn');
    if (galerieBtn) {
        galerieBtn.addEventListener('click', () => {
            initGalerieModal();
            const modal = document.getElementById('galerie-modal');
            if (modal) modal.classList.add('show');
        });
    }
}

// ===== MODAL GALERIE =====
function initGalerieModal() {
    if (document.getElementById('galerie-modal')) return;

    const style = document.createElement('style');
    style.textContent = `
        #galerie-modal { display:none;position:fixed;inset:0;background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);z-index:3000;align-items:center;justify-content:center; }
        #galerie-modal.show { display:flex;animation:fadeIn 0.3s ease; }
        .galerie-modal-content { background:var(--clr-surface);border-radius:24px;max-width:850px;width:92%;max-height:85vh;overflow:hidden;display:flex;flex-direction:column;border:1px solid var(--clr-border); }
        .galerie-modal-header { padding:1rem 1.2rem;border-bottom:1px solid var(--clr-border);display:flex;justify-content:space-between;align-items:center;background:var(--clr-bg-alt); }
        .galerie-modal-header h3 { font-family:var(--font-display);font-size:1.2rem;margin:0;display:flex;align-items:center;gap:0.5rem; }
        .galerie-modal-close { background:none;border:none;font-size:1.8rem;cursor:pointer;color:var(--clr-text-muted);padding:0 0.5rem; }
        .galerie-modal-body { padding:1rem;overflow-y:auto; }
        .galerie-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem; }
        .galerie-item { position:relative;border-radius:12px;overflow:hidden;aspect-ratio:1;border:2px solid transparent;transition:all 0.3s ease;background:var(--clr-bg-alt); }
        .galerie-item:hover { border-color:var(--clr-accent);transform:scale(1.02); }
        .galerie-item img { width:100%;height:100%;object-fit:cover;display:block; }
        .galerie-download-btn { position:absolute; bottom:10px; right:10px; background:#27ae60; color:white; border:none; border-radius:30px; padding:0.3rem 0.8rem; font-size:0.7rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:0.3rem; opacity:0; transition:opacity 0.3s ease; z-index:10; }
        .galerie-item:hover .galerie-download-btn { opacity:1; }
        .galerie-download-btn:hover { background:#2ecc71; transform:scale(1.05); }
        .galerie-caption { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent,rgba(0,0,0,0.7)); color:white; padding:0.8rem 0.5rem 0.4rem; font-size:0.7rem; font-weight:500; text-align:center; opacity:0; transition:opacity 0.3s ease; }
        .galerie-item:hover .galerie-caption { opacity:1; }
        @media(max-width:480px){ .galerie-grid{grid-template-columns:repeat(2,1fr);gap:0.7rem;} .galerie-download-btn { opacity:1; bottom:5px; right:5px; padding:0.2rem 0.5rem; font-size:0.6rem; } .galerie-caption { opacity:1; font-size:0.6rem; padding:0.4rem 0.3rem 0.2rem; } }
    `;
    document.head.appendChild(style);

    const modal = document.createElement('div');
    modal.id = 'galerie-modal';
    modal.innerHTML = `
        <div class="galerie-modal-content">
            <div class="galerie-modal-header">
                <h3><i class="fas fa-images"></i> Galerie photos</h3>
                <button class="galerie-modal-close">&times;</button>
            </div>
            <div class="galerie-modal-body">
                <div class="galerie-grid" id="galerie-grid-container">
                    ${galeriePhotos.map((p, i) => `
                        <div class="galerie-item" data-index="${i}">
                            <img src="${p.src}" alt="${p.alt}" loading="lazy" onerror="this.src='https://via.placeholder.com/200/2c3e50/ffffff?text=Image'">
                            <button class="galerie-download-btn" data-src="${p.src}" data-title="${p.caption}">
                                <i class="fas fa-download"></i> Télécharger
                            </button>
                            <div class="galerie-caption">${p.caption}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const telechargerImage = (src, titre) => {
        fetch(src)
            .then(response => {
                if (!response.ok) throw new Error('Image non trouvée');
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `awa-faye-${titre.replace(/\s+/g, '-').toLowerCase()}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                showToast(`📸 "${titre}" téléchargé !`, '#27ae60');
            })
            .catch(() => {
                window.open(src, '_blank');
                showToast(`📸 Image ouverte dans un nouvel onglet`, '#e67e22');
            });
    };

    modal.querySelectorAll('.galerie-download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const src = btn.getAttribute('data-src');
            const title = btn.getAttribute('data-title');
            telechargerImage(src, title);
        });
    });

    modal.querySelector('.galerie-modal-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('show'); });
}

// ===== THÈME CLAIR / SOMBRE =====
function initTheme() {
    const btn   = document.getElementById('themeBtn');
    const icon  = document.getElementById('tIcon');
    const label = document.getElementById('tLabel');
    const body  = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme, icon, label);

    if (!btn) return;

    btn.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeUI(next, icon, label);
    });
}

function updateThemeUI(theme, icon, label) {
    if (!icon) return;
    if (theme === 'dark') {
        icon.textContent = '🌙';
        if (label) label.textContent = '';
    } else {
        icon.textContent = '☀️';
        if (label) label.textContent = '';
    }
}

// ===== MENU HAMBURGER =====
function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
    };

    const openMenu = () => {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ===== SCROLL SPY =====
function initScrollSpy() {
    const navbar   = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => obs.observe(s));

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
}

// ===== RENDU PROJETS =====
function renderProjets(filtre = 'tous') {
    const container = document.getElementById('projets-container');
    if (!container) {
        console.error('❌ Élément #projets-container introuvable dans le HTML !');
        return;
    }

    const lang = localStorage.getItem('lang') || 'fr';
    const source = PROJETS[lang];
    const liste = filtre === 'tous' ? source : source.filter(p => p.categorie === filtre);

    container.innerHTML = '';

    if (liste.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:var(--clr-text-muted);grid-column:1/-1;">
            ${lang === 'en' ? 'No projects in this category.' : 'Aucun projet dans cette catégorie.'}
        </p>`;
        return;
    }

    const outilsLabel = lang === 'en' ? 'Tools used' : 'Outils utilisés';
    const voirLabel   = lang === 'en' ? 'View project' : 'Voir le projet';

    liste.forEach((projet, i) => {
        const carte = document.createElement('div');
        carte.className = 'projet-carte reveal';
        carte.style.animationDelay = `${i * 0.1}s`;

        let imageHtml = '';
        if (projet.image && projet.image !== '#') {
            imageHtml = `<img src="${projet.image}" alt="${projet.titre}" class="carte-img-real" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\"carte-img-fallback\\"><i class=\\"fas fa-image\\"></i><span>Image non disponible</span></div>'">`;
        } else {
            imageHtml = `<div class="carte-img-fallback"><i class="fas fa-map"></i><span>${projet.titre}</span></div>`;
        }

        carte.innerHTML = `
            <div class="carte-img">${imageHtml}</div>
            <div class="carte-body">
                <h3 class="carte-titre">${projet.titre}</h3>
                <p class="carte-desc">${projet.description}</p>
                <div class="carte-tags-wrapper">
                    <div class="carte-tags-title" style="font-size:0.85rem;color:var(--clr-text-muted);margin-bottom:0.5rem;">
                        <i class="fas fa-tools"></i> ${outilsLabel}
                    </div>
                    <div class="carte-tags">
                        ${projet.tags.map(t => `<span class="carte-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <button class="carte-lien btn-voir-projet" data-id="${projet.id}">
                    ${voirLabel} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        container.appendChild(carte);
    });

    requestAnimationFrame(() => {
        container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    });

    container.querySelectorAll('.btn-voir-projet').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(btn.dataset.id);
            const lang = localStorage.getItem('lang') || 'fr';
            const projet = PROJETS[lang].find(p => p.id === id);
            if (projet) ouvrirProjetModal(projet);
        });
    });
}

// ===== MODAL DÉTAIL PROJET =====
function ouvrirProjetModal(projet) {
    if (!document.getElementById('style-projet-modal')) {
        const style = document.createElement('style');
        style.id = 'style-projet-modal';
        style.textContent = `
            #projet-modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.88); backdrop-filter:blur(8px); z-index:4000; align-items:center; justify-content:center; }
            #projet-modal.show { display:flex; animation:fadeIn 0.3s ease; }
            .projet-modal-box { background:var(--clr-surface); border-radius:24px; max-width:620px; width:92%; max-height:90vh; overflow-y:auto; border:1px solid var(--clr-border); animation:scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1); box-shadow:0 32px 80px rgba(0,0,0,0.3); }
            .projet-modal-header { display:flex; justify-content:space-between; align-items:center; padding:1.5rem 1.8rem; background:var(--clr-bg-alt); border-bottom:1px solid var(--clr-border); }
            .projet-modal-header h3 { font-family:var(--font-display); font-size:1.4rem; margin:0; color:var(--clr-text); display:flex; align-items:center; gap:0.7rem; }
            .projet-modal-close { background:none; border:none; font-size:2rem; cursor:pointer; color:var(--clr-text-muted); transition:all 0.3s ease; }
            .projet-modal-close:hover { transform:rotate(90deg); color:var(--clr-accent); }
            .projet-modal-body { padding:2rem 1.8rem; }
            .projet-modal-desc { color:var(--clr-text-muted); font-size:1.1rem; line-height:1.8; margin-bottom:1.5rem; }
            .projet-modal-tags-titre { font-size:1rem; font-weight:700; color:var(--clr-text); margin-bottom:0.8rem; display:flex; align-items:center; gap:0.5rem; }
            .projet-modal-tags { display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1.8rem; }
            .projet-modal-tag { padding:0.5rem 1.2rem; background:rgba(44,62,80,0.1); border-radius:25px; font-size:0.9rem; font-weight:600; color:var(--clr-accent); }
            .projet-modal-statut { display:flex; align-items:center; gap:0.8rem; padding:1rem 1.2rem; background:rgba(39,174,96,0.08); border-radius:12px; border:1px solid rgba(39,174,96,0.25); margin-bottom:1.5rem; font-size:1rem; color:var(--clr-success); font-weight:600; }
            .btn-projet-modal-lien { display:inline-flex; align-items:center; gap:0.8rem; padding:1rem 2rem; background:var(--clr-accent); color:white; border:none; border-radius:40px; cursor:pointer; font-size:1rem; font-weight:600; transition:all 0.3s ease; text-decoration:none; width:100%; justify-content:center; }
            .btn-projet-modal-lien:hover { transform:translateY(-3px); filter:brightness(1.1); }
            .btn-projet-modal-lien.disabled { opacity:0.6; cursor:not-allowed; background:var(--clr-text-muted); }
        `;
        document.head.appendChild(style);
    }

    let modal = document.getElementById('projet-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projet-modal';
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('show'); });
    }

    const lang = localStorage.getItem('lang') || 'fr';
    const outilsLabel  = lang === 'en' ? 'Tools used' : 'Outils utilisés';
    const statutLabel  = lang === 'en' ? 'Project completed — Category:' : 'Projet réalisé — Catégorie :';
    const voirLabel    = lang === 'en' ? 'View project online' : 'Voir le projet en ligne';
    const enCoursLabel = lang === 'en' ? 'Project coming soon' : 'Projet en cours de mise en ligne';

    const aLien    = projet.lien && projet.lien !== '#';
    const btnClass = aLien ? 'btn-projet-modal-lien' : 'btn-projet-modal-lien disabled';
    const btnAttr  = aLien ? `href="${projet.lien}" target="_blank" rel="noopener noreferrer"` : '';
    const btnTag   = aLien ? 'a' : 'button';

    modal.innerHTML = `
        <div class="projet-modal-box">
            <div class="projet-modal-header">
                <h3><i class="fas fa-project-diagram"></i> ${projet.titre}</h3>
                <button class="projet-modal-close">&times;</button>
            </div>
            <div class="projet-modal-body">
                <p class="projet-modal-desc">${projet.description}</p>
                <p class="projet-modal-tags-titre"><i class="fas fa-tools"></i> ${outilsLabel}</p>
                <div class="projet-modal-tags">
                    ${projet.tags.map(t => `<span class="projet-modal-tag">${t}</span>`).join('')}
                </div>
                <div class="projet-modal-statut">
                    <i class="fas fa-check-circle"></i> ${statutLabel} ${projet.categorie.toUpperCase()}
                </div>
                <${btnTag} ${btnAttr} class="${btnClass}">
                    <i class="fas fa-external-link-alt"></i>
                    ${aLien ? voirLabel : enCoursLabel}
                </${btnTag}>
            </div>
        </div>
    `;

    modal.querySelector('.projet-modal-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.classList.add('show');
}

// ===== FILTRES PROJETS =====
function initFiltres() {
    const btns = document.querySelectorAll('.filtre-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjets(btn.dataset.filtre);
        });
    });
}

// ===== RENDU COMPÉTENCES =====
function renderCompetences() {
    const wrapper = document.getElementById('skills-wrapper');

    if (!wrapper) {
        console.error('❌ Élément #skills-wrapper introuvable !');
        return;
    }

    wrapper.innerHTML = '';

    competences.forEach((cat, ci) => {
        const block = document.createElement('div');
        block.className = 'skill-category reveal';
        block.style.animationDelay = `${ci * 0.15}s`;

        const skillsHTML = cat.skills.map((s, si) => {
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (s.pct / 100) * circumference;

            return `
                <div class="skill-circle-item" style="animation-delay:${si * 0.1}s" data-skill="${s.nom}">
                    <div class="skill-circle-container">
                        <svg class="skill-circle-svg" viewBox="0 0 100 100">
                            <circle class="skill-circle-bg" cx="50" cy="50" r="40"></circle>
                            <circle class="skill-circle-fill" cx="50" cy="50" r="40"
                                style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};">
                            </circle>
                            <text class="skill-circle-percent" x="50" y="55" text-anchor="middle">${s.pct}%</text>
                        </svg>
                        <div class="skill-circle-info">
                            <div class="skill-circle-header">
                                <h4 class="skill-circle-name">
                                    <i class="${s.icone}"></i> ${s.nom}
                                </h4>
                                <span class="skill-level-badge ${s.niveau === 'Avancé' ? 'level-advanced' : (s.niveau === 'Intermédiaire' ? 'level-intermediate' : 'level-beginner')}">${s.niveau}</span>
                                <span class="skill-click-icon"><i class="fas fa-chevron-down"></i></span>
                            </div>
                            <div class="skill-circle-desc-container">
                                <p class="skill-circle-desc">${s.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        block.innerHTML = `
            <div class="category-header">
                <span class="category-icon">${cat.categorie.split(' ')[0]}</span>
                <h3 class="skill-cat-title">${cat.categorie.substring(2)}</h3>
            </div>
            <p class="category-description">${cat.description}</p>
            <div class="skill-circles-list">${skillsHTML}</div>
        `;
        wrapper.appendChild(block);
    });

    document.querySelectorAll('.skill-circle-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const descContainer = this.querySelector('.skill-circle-desc-container');
            const icon = this.querySelector('.skill-click-icon i');

            if (descContainer) {
                const isVisible = descContainer.classList.contains('show');

                document.querySelectorAll('.skill-circle-desc-container').forEach(container => {
                    if (container !== descContainer && container.classList.contains('show')) {
                        container.classList.remove('show');
                        const otherIcon = container.closest('.skill-circle-item')?.querySelector('.skill-click-icon i');
                        if (otherIcon) otherIcon.className = 'fas fa-chevron-down';
                    }
                });

                if (isVisible) {
                    descContainer.classList.remove('show');
                    if (icon) icon.className = 'fas fa-chevron-down';
                } else {
                    descContainer.classList.add('show');
                    if (icon) icon.className = 'fas fa-chevron-up';
                }
            }
        });
    });
}

// ===== REVEAL AU SCROLL =====
function initReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .colonne, .projet-carte, .skill-category, .contact-card, .contact-form')
        .forEach(el => obs.observe(el));
}

// ===== FORMULAIRE CONTACT =====
let isResetting = false;

function initContact() {
    const form     = document.getElementById('contact-form');
    const resetBtn = document.getElementById('reset-btn');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            isResetting = true;
            form.reset();
            clearErrors();
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = '<i class="fas fa-undo-alt"></i> Formulaire réinitialisé !';
                setTimeout(() => {
                    feedback.className   = 'form-feedback';
                    feedback.textContent = '';
                }, 3000);
            }
            setTimeout(() => { isResetting = false; }, 100);
        });
    }

    ['nom','email','message'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => { if (!isResetting) validateField(id); });
            input.addEventListener('blur',  () => { if (!isResetting) validateField(id); });
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.disabled  = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        }
        setTimeout(() => {
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = '✅ 💖 Message envoyé avec succès 💖 ! Merci !';
            }
            isResetting = true;
            form.reset();
            clearErrors();
            isResetting = false;
            if (submitBtn) {
                submitBtn.disabled  = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
            }
            setTimeout(() => {
                if (feedback) { feedback.className = 'form-feedback'; feedback.textContent = ''; }
            }, 5000);
        }, 1500);
    });
}

function validateField(id) {
    if (isResetting) return true;
    const input   = document.getElementById(id);
    const errorEl = document.getElementById(`error-${id}`);
    if (!input || !errorEl) return true;
    const value = input.value.trim();
    let error = '';
    if (id === 'nom') {
        if (!value) error = 'Le nom est requis.';
        else if (value.length < 2) error = 'Le nom doit contenir au moins 2 caractères.';
    } else if (id === 'email') {
        if (!value) error = "L'email est requis.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Format d'email invalide.";
    } else if (id === 'message') {
        if (!value) error = 'Le message est requis.';
        else if (value.length < 10) error = 'Le message doit contenir au moins 10 caractères.';
    }
    errorEl.textContent = error;
    input.style.borderColor = error ? 'var(--clr-error)' : '';
    return !error;
}

function validateForm() {
    return ['nom','email','message'].map(id => validateField(id)).every(v => v);
}

function clearErrors() {
    ['nom','email','message'].forEach(id => {
        const err = document.getElementById(`error-${id}`);
        const inp = document.getElementById(id);
        if (err) err.textContent = '';
        if (inp) inp.style.borderColor = '';
    });
}

// ===== RETOUR EN HAUT =====
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== ANIMATIONS HERO =====
function initAnimations() {
    const selectors = [
        '.hero-greeting', '.hero-name-wrapper', '.hero-title-wrapper',
        '.hero-description', '.hero-buttons', '.hero-image', '.hero-social'
    ];

    selectors.forEach((sel, i) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    });
}

// ===== TÉLÉCHARGEMENT CV =====
function initDownloadCV() {
    const btn = document.getElementById('download-cv-hero');
    if (!btn) return;
    btn.addEventListener('click', () => {
        showToast('📄 Téléchargement du CV...', '#2c3e50');
    });
}

// ===== QR CODE =====
function initQRCode() {
    const qrBtn = document.getElementById('qrBtn');
    if (!qrBtn) {
        console.error("❌ Bouton QR Code non trouvé");
        return;
    }

    const portfolioUrl = 'https://fawa12748.github.io/awa-faye-portfolio/';

    const existingModal = document.getElementById('qr-modal-full');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'qr-modal-full';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 100000;
        justify-content: center;
        align-items: center;
    `;

    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; text-align: center; max-width: 350px; width: 90%;">
            <h3 style="color:#333; margin-bottom:15px;">📱 Scanner mon portfolio</h3>
            <div id="qrcode-container" style="display:flex; justify-content:center; margin-bottom:15px;"></div>
            <p style="color:#666; font-size:12px; word-break:break-all;">${portfolioUrl}</p>
            <p style="color:#e74c3c; font-size:11px; margin-top:10px;" id="qr-debug"></p>
            <button id="closeQrModalBtn" style="margin-top:20px; padding:10px 30px; background:#27ae60; color:white; border:none; border-radius:25px; cursor:pointer;">✕ Fermer</button>
        </div>
    `;

    document.body.appendChild(modal);

    const debugEl = document.getElementById('qr-debug');

    document.getElementById('closeQrModalBtn').onclick = () => modal.style.display = 'none';
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    qrBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        modal.style.display = 'flex';

        const container = document.getElementById('qrcode-container');
        if (!container) {
            if (debugEl) debugEl.textContent = '❌ Erreur: conteneur introuvable';
            return;
        }

        container.innerHTML = '';

        if (typeof QRCode === 'undefined') {
            console.warn("⚠️ QRCode lib manquante, utilisation API de secours");
            if (debugEl) debugEl.textContent = '📱 Utilisation générateur de secours';
            const img = document.createElement('img');
            img.src = `https://quickchart.io/qr?text=${encodeURIComponent(portfolioUrl)}&size=250`;
            img.style.width = '250px';
            img.style.height = '250px';
            container.appendChild(img);
        } else {
            try {
                new QRCode(container, {
                    text: portfolioUrl,
                    width: 250,
                    height: 250,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
                if (debugEl) debugEl.textContent = '✅ QR code généré avec succès';
            } catch(err) {
                console.error("Erreur QRCode:", err);
                if (debugEl) debugEl.textContent = '❌ Erreur: ' + err.message;
            }
        }
    };
}

// ===== BOUTON PARTAGE =====
function initShareButton() {
    const shareBtn = document.getElementById('share-btn');
    const modal = document.getElementById('share-modal');
    if (!shareBtn || !modal) return;

    shareBtn.addEventListener('click', () => modal.classList.add('show'));
    modal.querySelector('.share-modal-close')?.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

    modal.querySelectorAll('.share-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            let shareUrl = '';
            switch (btn.dataset.platform) {
                case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`; break;
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href)
                        .then(() => showShareFeedback('✅ Lien copié !', 'success'))
                        .catch(() => showShareFeedback('❌ Erreur', 'error'));
                    return;
            }
            if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });

    function showShareFeedback(msg, type) {
        const fb = document.getElementById('share-feedback');
        if (!fb) return;
        fb.textContent = msg;
        fb.className = `share-feedback show ${type}`;
        setTimeout(() => fb.className = 'share-feedback', 3000);
    }
}

// ===== VUE RESPONSIVE =====
function initViewToggle() {
    const btns = document.querySelectorAll('.view-toggle-btn');
    const container = document.querySelector('.view-toggle-container');

    if (!btns.length) return;

    if (container && !isMobile()) {
        container.style.display = 'flex';
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const view = btn.getAttribute('data-view');

            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.body.style.maxWidth = '';
            document.body.style.margin = '';
            document.body.style.backgroundColor = '';

            if (view === 'desktop') {
                document.body.classList.add('view-desktop');
                showToast('🖥️ Vue Desktop activée', '#2c3e50');
            } else if (view === 'tablet') {
                document.body.classList.add('view-tablet');
                document.body.style.maxWidth = '1024px';
                document.body.style.margin = '0 auto';
                showToast('📱 Vue Tablette activée (1024px)', '#2c3e50');
            } else if (view === 'mobile') {
                document.body.classList.add('view-mobile');
                document.body.style.maxWidth = '480px';
                document.body.style.margin = '0 auto';
                showToast('📱 Vue Mobile activée (480px)', '#2c3e50');
            }
        });
    });

    const defaultBtn = document.querySelector('.view-toggle-btn[data-view="desktop"]');
    if (defaultBtn) defaultBtn.classList.add('active');
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const el = document.getElementById('typing-title');
    if (!el) return;
    const phrases = [
        "Étudiante en Géomatique",
        "Développeuse web SIG",
        "Cartographe passionnée",
        "Analyste de données spatiales",
    ];
    let pi = 0, ci = 0, deleting = false;
    function type() {
        const cur = phrases[pi];
        if (!deleting) {
            el.textContent = cur.slice(0, ci + 1);
            ci++;
            if (ci === cur.length) { deleting = true; setTimeout(type, 1800); return; }
        } else {
            el.textContent = cur.slice(0, ci - 1);
            ci--;
            if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
        }
        setTimeout(type, deleting ? 60 : 90);
    }
    setTimeout(type, 800);
}

// ===== COMPTEUR STATS =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const match = el.textContent.match(/\d+/);
            if (!match) return;
            const target = parseInt(match[0]);
            const hasPlus = el.textContent.includes('+');
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = (hasPlus ? '+' : '') + current;
                if (current >= target) clearInterval(timer);
            }, 35);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

// ===== SCROLL FLUIDE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const navH = document.querySelector('.navbar')?.offsetHeight || 80;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        });
    });
}

// ===== CURSEUR PERSONNALISÉ =====
function initCustomCursor() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice || window.innerWidth <= 768) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) cursor.remove();
        return;
    }

    let cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
    }

    if (!document.getElementById('cursor-style')) {
        const style = document.createElement('style');
        style.id = 'cursor-style';
        style.textContent = `
            .custom-cursor { position: fixed; width: 24px; height: 24px; border-radius: 50%; background: rgba(46, 204, 113, 0.4); border: 2px solid var(--clr-accent, #27ae60); pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, background 0.2s; }
            .custom-cursor.hover { width: 40px; height: 40px; background: rgba(46, 204, 113, 0.2); border-width: 2px; }
            body { cursor: default; }
            a, button, .filtre-btn, .social-icon, .projet-carte, .skill-item, .carte-lien, .view-toggle-btn { cursor: pointer; }
        `;
        document.head.appendChild(style);
    }

    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    const interactiveElements = 'a, button, .filtre-btn, .social-icon, .projet-carte, .skill-item, .carte-lien, .view-toggle-btn';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveElements) && cursor) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveElements) && cursor) {
            cursor.classList.remove('hover');
        }
    });
}

// ===== RÉSEAUX SOCIAUX =====
function initSocialLinks() {
    const map = {
        github: 'https://github.com/fawa12748',
        linkedin: 'https://www.linkedin.com/in/awa-faye-2a0b123b6/',
        instagram: 'https://www.instagram.com/awafaye2776/',
        email: 'mailto:fawa12748@gmail.com'
    };
    const keys = Object.keys(map);
    document.querySelectorAll('.social-icon, .footer-social-link').forEach((el, i) => {
        const key = keys[i % keys.length];
        if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
            el.href = map[key];
            if (key !== 'email') {
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            }
        }
    });
}

// ===== PARTICULES =====
function initParticleBackground() {
    const hero = document.querySelector('.hero-section');
    if (!hero || isMobile()) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    hero.style.position = 'relative';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H, particles, animId;
    const COUNT = 50;

    function resize() { W = canvas.width = hero.offsetWidth; H = canvas.height = hero.offsetHeight; }

    function newParticle(fromTop) {
        return {
            x: Math.random() * (W || 800),
            y: fromTop ? -10 : Math.random() * (H || 600),
            size: Math.random() * 2 + 1,
            speedY: Math.random() * 0.5 + 0.2,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.1,
        };
    }

    function getColor(op) {
        const dark = document.body.getAttribute('data-theme') === 'dark';
        const pool = dark
            ? [`rgba(168,199,250,${op})`, `rgba(255,255,255,${op})`]
            : [`rgba(44,62,80,${op})`, `rgba(90,110,130,${op})`];
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function init() { particles = Array.from({ length: COUNT }, () => newParticle(false)); }

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = getColor(p.opacity);
            ctx.fill();
            if (p.y > H + 10 || p.x < -10 || p.x > W + 10) particles[i] = newParticle(true);
        });
        animId = requestAnimationFrame(animate);
    }

    new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { if (!animId) animate(); }
            else { cancelAnimationFrame(animId); animId = null; }
        });
    }, { threshold: 0.05 }).observe(hero);

    window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
    resize(); init(); animate();
}

// ===== PARALLAXE SOURIS =====
function initMouseParallax() {
    if (isMobile()) return;

    const hero = document.querySelector('.hero-section');
    const avatar = document.querySelector('.hero-avatar');
    if (!hero || !avatar) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        avatar.style.transform = `translateY(-30px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
        avatar.style.transition = 'transform 0.6s ease';
        avatar.style.transform = 'translateY(-30px)';
    });
}

// ===== GLOW SUR LES CARTES =====
function initGlowEffect() {
    if (isMobile()) return;
    document.querySelectorAll('.projet-carte,.skill-category,.colonne').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
        });
    });
}

// ===== ÉLÉMENTS FLOTTANTS =====
function initFloatingElements() {
    document.querySelectorAll('.langue').forEach((el, i) => {
        el.style.animation = `float ${3 + i * 0.5}s ease-in-out infinite`;
    });

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
        obs.observe(item);
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, color = '#2c3e50') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
        background:${color}; color:white; padding:10px 20px;
        border-radius:40px; z-index:10002; font-size:14px;
        font-weight:600; box-shadow:0 4px 12px rgba(0,0,0,0.2);
        white-space:nowrap; max-width:90%; white-space:normal;
        text-align:center; font-family:var(--font-body);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===== TRADUCTION FR / EN =====
const TRANSLATIONS = {
    fr: {
        nav_accueil: "Accueil",
        nav_apropos: "À propos",
        nav_projets: "Projets",
        nav_competences: "Compétences",
        nav_contact: "Contact",
        hero_greeting: "Je suis",
        hero_desc: "Étudiante en Géomatique, cartographie passionnée, l'analyse spatiale et les systèmes d'information géographique. Je conçois des applications cartographiques interactives et des visualisations de données. L'innovation technologique au service de la géomatique.",
        btn_cv: "Télécharger CV",
        btn_projets: "Voir mes projets",
        btn_about: "En savoir plus",
        stat_projets: "PROJETS RÉALISÉS",
        stat_cartes: "CARTES CRÉÉES",
        stat_passion: "PASSION",
        section_apropos: "À propos de moi",
        apropos_titre: "Étudiante en Licence 2 Géomatique",
        apropos_bio1: "Passionnée par l'analyse des données spatiales et la cartographie, je me forme actuellement à l'UFR Science de l'Ingénieur de l'Université Iba Der Thiam de Thiès. Ma formation m'a permis d'acquérir une solide expertise dans l'utilisation d'outils spécialisés comme <strong>QGIS</strong> pour la cartographie et <strong>RStudio</strong> pour l'analyse statistique des données géographiques.",
        apropos_bio2: "Je développe également des compétences en <strong>développement web</strong> (HTML, CSS, JavaScript) pour créer des applications cartographiques interactives tout en rendant la Géomatique accessible à tous.",
        parcours_titre: "Parcours",
        objectifs_titre: "Objectifs",
        experience_titre: "Expérience",
        langues_titre: "Langues",
        section_projets: "Mes Projets",
        filtre_tous: "Tous",
        filtre_sig: "SIG",
        filtre_web: "Web",
        filtre_data: "Data",
        galerie_btn: "Explorer la galerie",
        galerie_desc: "Découvrez mes réalisations en images",
        section_competences: "Mes Compétences",
        section_contact: "Me contacter",
        contact_email_label: "Email",
        contact_tel_label: "Téléphone",
        contact_loc_label: "Localisation",
        form_nom: "Nom complet",
        form_email: "Adresse email",
        form_message: "Message",
        form_placeholder_nom: "Votre nom",
        form_placeholder_email: "votre@email.com",
        form_placeholder_msg: "Votre message...",
        btn_envoyer: "Envoyer",
        btn_reset: "Réinitialiser",
        footer_copy: "© 2026 Awa Faye | Tous droits réservés",
        footer_sub: "Licence 2 Géomatique - Université Iba Der Thiam de Thiès",
    },
    en: {
        nav_accueil: "Home",
        nav_apropos: "About",
        nav_projets: "Projects",
        nav_competences: "Skills",
        nav_contact: "Contact",
        hero_greeting: "I am",
        hero_desc: "Geomatics student, passionate about cartography, spatial analysis and geographic information systems. I design interactive mapping applications and data visualizations. Technological innovation at the service of geomatics.",
        btn_cv: "Download CV",
        btn_projets: "View my projects",
        btn_about: "Learn more",
        stat_projets: "PROJECTS DONE",
        stat_cartes: "MAPS CREATED",
        stat_passion: "PASSION",
        section_apropos: "About me",
        apropos_titre: "Bachelor's Degree in Geomatics (Year 2)",
        apropos_bio1: "Passionate about spatial data analysis and cartography, I am currently studying at the Faculty of Engineering Science at Iba Der Thiam University of Thiès. My training has given me solid expertise in specialized tools such as <strong>QGIS</strong> for mapping and <strong>RStudio</strong> for statistical analysis of geographic data.",
        apropos_bio2: "I am also developing skills in <strong>web development</strong> (HTML, CSS, JavaScript) to create interactive mapping applications while making Geomatics accessible to everyone.",
        parcours_titre: "Education",
        objectifs_titre: "Goals",
        experience_titre: "Experience",
        langues_titre: "Languages",
        section_projets: "My Projects",
        filtre_tous: "All",
        filtre_sig: "GIS",
        filtre_web: "Web",
        filtre_data: "Data",
        galerie_btn: "Explore the gallery",
        galerie_desc: "Discover my work in pictures",
        section_competences: "My Skills",
        section_contact: "Contact me",
        contact_email_label: "Email",
        contact_tel_label: "Phone",
        contact_loc_label: "Location",
        form_nom: "Full name",
        form_email: "Email address",
        form_message: "Message",
        form_placeholder_nom: "Your name",
        form_placeholder_email: "your@email.com",
        form_placeholder_msg: "Your message...",
        btn_envoyer: "Send",
        btn_reset: "Reset",
        footer_copy: "© 2026 Awa Faye | All rights reserved",
        footer_sub: "BSc Geomatics - Iba Der Thiam University of Thiès",
    }
};

function applyTranslations(lang) {
    const t = TRANSLATIONS[lang];
    const setText = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    };
    const setPlaceholder = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.placeholder = t[key];
    };

    // Navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['nav_accueil', 'nav_apropos', 'nav_projets', 'nav_competences', 'nav_contact'];
    navLinks.forEach((link, i) => { if (t[navKeys[i]]) link.textContent = t[navKeys[i]]; });

    // Hero
    setText('.greeting-text', 'hero_greeting');
    setText('.hero-description', 'hero_desc');
    const btnCv = document.getElementById('download-cv-hero');
    if (btnCv) btnCv.innerHTML = `<i class="fas fa-download"></i> ${t.btn_cv} <span class="btn-arrow">→</span>`;
    const btnProj = document.querySelector('.btn-projects-hero');
    if (btnProj) btnProj.innerHTML = `<i class="fas fa-code-branch"></i> ${t.btn_projets} <i class="fas fa-arrow-right"></i>`;
    const btnAbout = document.getElementById('open-about-hero');
    if (btnAbout) btnAbout.innerHTML = `<i class="fas fa-user-circle"></i> ${t.btn_about} <i class="fas fa-arrow-right"></i>`;

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    const statKeys = ['stat_projets', 'stat_cartes', 'stat_passion'];
    statLabels.forEach((el, i) => { if (t[statKeys[i]]) el.textContent = t[statKeys[i]]; });

    // À propos
    setText('#a-propos .section-title', 'section_apropos');
    setText('.apropos-bio h3', 'apropos_titre');
    const bioPara = document.querySelectorAll('.apropos-bio p');
    if (bioPara[0]) bioPara[0].innerHTML = t.apropos_bio1;
    if (bioPara[1]) bioPara[1].innerHTML = t.apropos_bio2;

    // Titres colonnes
    const colTitles = document.querySelectorAll('.colonne-titre');
    const colKeys = ['parcours_titre', 'objectifs_titre', 'experience_titre'];
    colTitles.forEach((el, i) => {
        const icons = ['fas fa-graduation-cap', 'fas fa-bullseye', 'fas fa-briefcase'];
        if (t[colKeys[i]]) el.innerHTML = `<i class="${icons[i]}"></i> ${t[colKeys[i]]}`;
    });
    setText('.langues-titre', 'langues_titre');

    // Sections
    setText('#projets .section-title', 'section_projets');
    setText('#competences .section-title', 'section_competences');

    // Filtres
    const filtres = document.querySelectorAll('.filtre-btn');
    const filtreKeys = ['filtre_tous', 'filtre_sig', 'filtre_web', 'filtre_data'];
    filtres.forEach((btn, i) => { if (t[filtreKeys[i]]) btn.textContent = t[filtreKeys[i]]; });

    // Galerie
    const galerieSpan = document.querySelector('#galerie-trigger-btn span');
    if (galerieSpan) galerieSpan.textContent = t.galerie_btn;
    setText('.galerie-trigger-desc', 'galerie_desc');

    // Contact
    setText('#contact .section-title', 'section_contact');
    const contactCards = document.querySelectorAll('.contact-card strong');
    const contactKeys = ['contact_email_label', 'contact_tel_label', 'contact_loc_label'];
    contactCards.forEach((el, i) => { if (t[contactKeys[i]]) el.textContent = t[contactKeys[i]]; });

    // Formulaire
    const labels = document.querySelectorAll('.form-group label');
    if (labels[0]) labels[0].innerHTML = `${t.form_nom} <span class="required">*</span>`;
    if (labels[1]) labels[1].innerHTML = `${t.form_email} <span class="required">*</span>`;
    if (labels[2]) labels[2].innerHTML = `${t.form_message} <span class="required">*</span>`;
    setPlaceholder('#nom', 'form_placeholder_nom');
    setPlaceholder('#email', 'form_placeholder_email');
    setPlaceholder('#message', 'form_placeholder_msg');

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${t.btn_envoyer}`;
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.innerHTML = `<i class="fas fa-undo-alt"></i> ${t.btn_reset}`;

    // Footer
    const footerPara = document.querySelectorAll('.footer-content p');
    if (footerPara[0]) footerPara[0].textContent = t.footer_copy;
    if (footerPara[1]) footerPara[1].textContent = t.footer_sub;

    // Re-rendre les projets dans la bonne langue
    const activeFiltre = document.querySelector('.filtre-btn.active')?.dataset?.filtre || 'tous';
    renderProjets(activeFiltre);
}

function initLang() {
    const btn = document.getElementById('langBtn');
    const label = document.getElementById('langLabel');
    if (!btn) return;

    let currentLang = localStorage.getItem('lang') || 'fr';
    label.textContent = currentLang.toUpperCase();
    applyTranslations(currentLang);

    btn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', currentLang);
        label.textContent = currentLang.toUpperCase();
        applyTranslations(currentLang);
        showToast(currentLang === 'en' ? '🇬🇧 English activated' : '🇫🇷 Français activé', '#2c3e50');
    });
}
// ============================================
// BLOG INTÉGRÉ — VERSION CORRIGÉE
// ============================================

   // ===== DONNÉES DES ARTICLES =====
// ===== DONNÉES DES ARTICLES =====
const BLOG_ARTICLES = [
    // ============================================
    // 4 ARTICLES TECHNIQUES (gardés)
    // ============================================
    {
        id: 1,
        cat: "qgis",
        titre: "Géoréférencer une image satellite dans QGIS",
        resume: "Apprendre à géoréférencer une image raster en utilisant des points de contrôle dans QGIS.",
        date: "10 juin 2026",
        duree: "8 min",
        niveau: "Débutant",
        contenu: `
            <h3>🗺️ Qu'est-ce que le géoréférencement ?</h3>
            <p>Le géoréférencement consiste à attribuer des coordonnées géographiques à une image raster (plan, photo satellite, carte scannée). C'est une étape fondamentale en géomatique.</p>

            <!-- ===== VIDEO ===== -->
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin:1.5rem 0; background:#000;">
                <video 
                    style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                    controls 
                    preload="metadata"
                    playsinline>
                    <source src="video/video.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture vidéo.
                </video>
            </div>

            <h3>📌 Étape 1 — Ouvrir l'image dans QGIS</h3>
            <p>Dans QGIS, allez dans <strong>Raster → Géoréférenceur → Ouvrir l'image</strong>. Sélectionnez votre image satellite.</p>
            
            <h3>🎯 Étape 2 — Placer des points de contrôle</h3>
            <p>Identifiez des points connus sur l'image (carrefours, bâtiments remarquables) et associez-les à leurs coordonnées réelles. Plus vous placez de points, plus le géoréférencement sera précis.</p>
            
            <h3>⚙️ Étape 3 — Choisir la transformation</h3>
            <p>Pour une image satellite, utilisez <strong>Polynomial 1</strong> ou <strong>Polynomial 2</strong> selon la déformation de l'image.</p>
            
            <h3>📤 Étape 4 — Exporter l'image géoréférencée</h3>
            <p>Une fois les points placés, cliquez sur <strong>Démarrer le géoréférencement</strong>. L'image sera exportée avec un fichier <code>.world</code> contenant ses coordonnées.</p>
            
            <h3>🎓 Ce que j'ai appris</h3>
            <ul>
                <li>Le principe du géoréférencement</li>
                <li>Placer des points de contrôle sur une image</li>
                <li>Exporter une image avec ses coordonnées géographiques</li>
            </ul>
        `
    },
    {
        id: 2,
        cat: "rstudio",
        titre: "Analyser des données avec RStudio",
        resume: "Importer des données, les nettoyer et les visualiser avec RStudio.",
        date: "2 juin 2026",
        duree: "6 min",
        niveau: "Débutant",
        contenu: `
            <h3>📊 Pourquoi utiliser RStudio ?</h3>
            <p>RStudio est un environnement de développement intégré (IDE) pour R, le langage de programmation dédié à la statistique et à l'analyse de données.</p>

            <!-- ===== VIDEO YOUTUBE ===== -->
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin:1.5rem 0; background:#000;">
                <iframe 
                    style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                    src="https://www.youtube.com/embed/83iaUmHTYjo" 
                    title="Formation R Cours 13 : Accéder aux variables d'un tableau"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <h3>📥 Importer les données</h3>
            <code>data <- read.csv("mes_donnees.csv", sep=";", header=TRUE)</code>
            
            <h3>🧹 Nettoyer les données</h3>
            <p>Supprimons les valeurs manquantes pour éviter des biais dans l'analyse.</p>
            <code>data <- na.omit(data)</code>
            
            <h3>📈 Visualiser avec ggplot2</h3>
            <code>library(ggplot2)
ggplot(data, aes(x=variable1, y=variable2, color=categorie)) +
  geom_point() +
  labs(title="Mon graphique")</code>
            
            <h3>🎓 Ce que j'ai appris</h3>
            <ul>
                <li>Importer des données dans RStudio</li>
                <li>Nettoyer et préparer les données</li>
                <li>Visualiser des données avec ggplot2</li>
            </ul>
        `
    },
    {
        id: 3,
        cat: "websig",
        titre: "Ma première carte interactive avec Leaflet.js",
        resume: "Créer une carte interactive avec Leaflet.js en utilisant HTML, CSS et JavaScript.",
        date: "25 mai 2026",
        duree: "10 min",
        niveau: "Débutant",
        contenu: `
            <h3>🌐 Pourquoi Leaflet ?</h3>
            <p>Leaflet est une bibliothèque JavaScript légère (42 ko) pour créer des cartes interactives. C'est l'outil idéal pour débuter en Web SIG.</p>
            
            <h3>📄 Structure HTML de base</h3>
            <code>&lt;div id="map" style="height:500px"&gt;&lt;/div&gt;
&lt;link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/&gt;
&lt;script src="https://unpkg.com/leaflet/dist/leaflet.js"&gt;&lt;/script&gt;</code>
            
            <h3>🚀 Initialiser la carte</h3>
            <code>var map = L.map('map').setView([14.79, -16.93], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);</code>
            
            <h3>📍 Ajouter un marqueur</h3>
            <code>L.marker([14.79, -16.93])
  .addTo(map)
  .bindPopup("&lt;b&gt;Université Iba Der Thiam&lt;/b&gt;")
  .openPopup();</code>
            
            <h3>🎓 Ce que j'ai appris</h3>
            <ul>
                <li>Utiliser HTML, CSS et JavaScript</li>
                <li>Créer des cartes interactives avec Leaflet</li>
                <li>Développer avec VSCode</li>
            </ul>
        `
    },
    {
        id: 4,
        cat: "qgis",
        titre: "Numériser des entités dans QGIS",
        resume: "Créer une couche vecteur et numériser des bâtiments sur une image géoréférencée.",
        date: "15 mai 2026",
        duree: "7 min",
        niveau: "Débutant",
        contenu: `
            <h3>📍 La numérisation en SIG</h3>
            <p>La numérisation consiste à tracer manuellement des entités géographiques (bâtiments, routes, parcelles) sur une image géoréférencée.</p>
            
            <h3>🗺️ Créer une couche vecteur</h3>
            <code>Couche → Créer une couche → Nouvelle couche GeoPackage
Type de géométrie : Polygone
SCR : EPSG:4326</code>
            
            <h3>✏️ Activer l'édition et tracer</h3>
            <p>Cliquez sur le crayon <strong>✏️</strong> pour activer l'édition, puis utilisez <em>Ajouter une entité polygone</em>. Cliquez sommet par sommet autour du bâtiment, puis clic droit pour terminer.</p>
            
            <h3>📝 Renseigner les attributs</h3>
            <p>Une fenêtre s'ouvre pour saisir les informations du bâtiment : type, usage, étage, etc.</p>
            
            <h3>🎓 Ce que j'ai appris</h3>
            <ul>
                <li>Créer des couches vectorielles dans QGIS</li>
                <li>Numériser des entités manuellement</li>
                <li>Renseigner des attributs</li>
            </ul>
        `
    },

    // ============================================
    // 4 NOUVEAUX ARTICLES PERSONNALISÉS
    // ============================================

    // ===== ARTICLE 1 : Mon parcours vers la Géomatique =====
    {
        id: 5,
        cat: "portfolio",
        titre: "Mon parcours vers la Géomatique",
        resume: "Du Bac S2 à la Licence 2, découvrez mon cheminement vers la géomatique et mes objectifs professionnels.",
        date: "20 juin 2026",
        duree: "5 min",
        niveau: "Débutant",
        contenu: `
            <div style="background:var(--clr-bg-alt); border-radius:16px; padding:1.5rem; margin:1rem 0; text-align:center;">
                <span style="font-size:3rem;">👩‍🎓</span>
            </div>

            <h3>Qui suis-je ?</h3>
            <p>Je m'appelle <strong>Awa Faye</strong>, j'ai 20 ans et je suis originaire de Diourbel, au Sénégal. Passionnée par les sciences et la technologie, j'ai décidé de me lancer dans une carrière qui allie mon amour pour les données, la cartographie et l'innovation.</p>

            <h3>🎓 Mon parcours scolaire</h3>
            <ul>
                <li><strong>2023 :</strong> Baccalauréat S2 au Lycée de Thiès</li>
                <li><strong>2024-2025 :</strong> Licence 1 Géomatique — UFR Sciences de l'Ingénieur, Université Iba Der Thiam de Thiès</li>
                <li><strong>2025-2026 :</strong> Licence 2 Géomatique — actuellement en cours</li>
            </ul>
            <p>Dès la première année, j'ai été séduite par la géomatique qui combine des disciplines variées : cartographie, télédétection, analyse de données et développement web.</p>

            <h3>💡 Pourquoi la géomatique ?</h3>
            <p>La géomatique me passionne parce qu'elle permet de <strong>comprendre le monde qui nous entoure</strong> à travers les données spatiales. C'est une discipline en pleine expansion qui répond à des enjeux majeurs :</p>
            <ul>
                <li>La gestion des territoires</li>
                <li>L'aménagement urbain</li>
                <li>La protection de l'environnement</li>
                <li>Les infrastructures et réseaux</li>
            </ul>

            <h3>🎯 Mes objectifs professionnels</h3>
            <ul>
                <li><strong>À court terme :</strong> Valider ma Licence 2 en Géomatique et effectuer un stage en cabinet de géomatique</li>
                <li><strong>À moyen terme :</strong> Poursuivre en Master Géomatique et me spécialiser en Web SIG</li>
                <li><strong>À long terme :</strong> Devenir ingénieure géomaticienne et contribuer aux projets d'aménagement du territoire au Sénégal</li>
            </ul>

            <h3>📚 Ce que j'aime le plus</h3>
            <ul>
                <li>Créer des cartes thématiques sous QGIS</li>
                <li>Analyser des données spatiales avec RStudio</li>
                <li>Développer des applications cartographiques interactives</li>
                <li>Partager mes connaissances à travers ce blog</li>
            </ul>
        `
    },

    // ===== ARTICLE 2 : Réalisation d'une carte thématique sous QGIS =====
    {
        id: 6,
        cat: "qgis",
        titre: "Réalisation d'une carte thématique — Densité de population au Sénégal",
        resume: "Je vous montre comment j'ai réalisé ma première carte thématique sous QGIS : objectif, données, méthode et résultat.",
        date: "15 juin 2026",
        duree: "12 min",
        niveau: "Débutant",
        contenu: `
            <div style="background:var(--clr-bg-alt); border-radius:16px; padding:1.5rem; margin:1rem 0; text-align:center;">
                <span style="font-size:3rem;">🗺️</span>
                <p style="margin-top:0.5rem; font-style:italic; color:var(--clr-text-muted);">Carte de densité de population — Sénégal</p>
            </div>

            <h3>🎯 Objectif du projet</h3>
            <p>Créer une carte thématique visualisant la <strong>densité de population par région</strong> au Sénégal pour mieux comprendre la répartition des populations sur le territoire.</p>

            <h3>📊 Données utilisées</h3>
            <ul>
                <li><strong>Shapefile :</strong> Régions du Sénégal (source : data.humdata.org)</li>
                <li><strong>Données attributaires :</strong> Population par région (source : ANSD)</li>
                <li><strong>Projection :</strong> WGS 84 / UTM zone 28N (EPSG:32628)</li>
            </ul>

            <h3>🔧 Méthode de réalisation</h3>
            <p><strong>Étape 1 :</strong> Import du shapefile dans QGIS</p>
            <p><strong>Étape 2 :</strong> Jointure entre le shapefile et les données de population</p>
            <p><strong>Étape 3 :</strong> Application d'une symbologie graduée (palette YlOrRd)</p>
            <p><strong>Étape 4 :</strong> Mise en page : titre, légende, échelle et flèche nord</p>
            <p><strong>Étape 5 :</strong> Export en haute résolution (300 dpi)</p>

            <h3>📸 Résultat final</h3>
            <div style="background:var(--clr-surface); border:1px solid var(--clr-border); border-radius:12px; padding:1rem; margin:1rem 0; text-align:center;">
                <p style="color:var(--clr-text-muted); font-size:0.9rem;">
                <i class="fas fa-image"></i> Carte de densité de population du Sénégal
                </p>
                <!-- ===== REMPLACE CE BLOC ===== -->
                <div style="border-radius:8px; overflow:hidden; margin:0.5rem 0;">
                    <img src="image/cartesen.png" 
                     alt="Carte de densité de population du Sénégal" 
                     style="width:100%; height:auto; display:block;">
                </div>
                <!-- ===== FIN REMPLACEMENT ===== -->
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Densité : faible (jaune) → élevée (rouge)</p>
            </div>

            <h3>🎓 Ce que j'ai appris</h3>
            <ul>
                <li>Importer et joindre des données dans QGIS</li>
                <li>Choisir une symbologie adaptée</li>
                <li>Créer une mise en page professionnelle</li>
                <li>Exporter une carte de qualité</li>
            </ul>
        `
    },

    // ===== ARTICLE 3 : Mon premier site Web SIG =====
    {
        id: 7,
        cat: "websig",
        titre: "Mon premier site Web SIG — Ce portfolio",
        resume: "Découvrez comment j'ai créé ce portfolio en HTML, CSS et JavaScript, les difficultés rencontrées et ce que j'ai appris.",
        date: "10 juin 2026",
        duree: "8 min",
        niveau: "Débutant",
        contenu: `
            <div style="background:var(--clr-bg-alt); border-radius:16px; padding:1.5rem; margin:1rem 0; text-align:center;">
                <span style="font-size:3rem;">💻</span>
                <p style="margin-top:0.5rem; font-style:italic; color:var(--clr-text-muted);">"Le code est le langage du futur"</p>
            </div>

            <h3>🌐 Le projet : mon portfolio en ligne</h3>
            <p>L'objectif était de créer un site web pour présenter mes compétences, mes projets et mon blog. C'était mon premier projet Web SIG.</p>

            <h3>🔧 Technologies utilisées</h3>
            <ul>
                <li><strong>HTML5 :</strong> Structure de la page</li>
                <li><strong>CSS3 :</strong> Mise en forme et animations</li>
                <li><strong>JavaScript :</strong> Interactivité (filtres, modales, animations)</li>
                <li><strong>VSCode :</strong> Éditeur de code</li>
                <li><strong>GitHub Pages :</strong> Hébergement gratuit</li>
            </ul>

            <h3>💪 Ce que j'ai appris</h3>
            <ul>
                <li>Structurer une page web en HTML</li>
                <li>Styliser avec CSS (Flexbox, Grid, animations)</li>
                <li>Ajouter de l'interactivité avec JavaScript</li>
                <li>Utiliser Git et GitHub</li>
                <li>Héberger un site avec GitHub Pages</li>
            </ul>

            <h3>🤔 Difficultés rencontrées</h3>
            <ul>
                <li><strong>Le responsive :</strong> Adapter le site à tous les écrans (mobile, tablette, desktop)</li>
                <li><strong>Les animations :</strong> Créer des animations fluides sans surcharger la page</li>
                <li><strong>Le curseur personnalisé :</strong> Gérer le curseur sur les éléments interactifs</li>
                <li><strong>La galerie :</strong> Gérer le téléchargement des images</li>
            </ul>

            <h3>🚀 Résultat final</h3>
            <p>Mon portfolio est maintenant en ligne et accessible à tous. Il me permet de :</p>
            <ul>
                <li>Présenter mes compétences et réalisations</li>
                <li>Partager mes connaissances via le blog</li>
                <li>Être visible sur les réseaux professionnels</li>
            </ul>
        `
    },

    // ===== ARTICLE 4 : La géomatique au Sénégal =====
    {
        id: 8,
        cat: "portfolio",
        titre: "La géomatique au Sénégal — Enjeux et perspectives",
        resume: "Urbanisation, infrastructures, gestion du territoire : pourquoi les SIG sont indispensables au Sénégal.",
        date: "1er juin 2026",
        duree: "6 min",
        niveau: "Débutant",
        contenu: `
            <div style="background:var(--clr-bg-alt); border-radius:16px; padding:1.5rem; margin:1rem 0; text-align:center;">
                <span style="font-size:3rem;">🇸🇳</span>
                <p style="margin-top:0.5rem; font-style:italic; color:var(--clr-text-muted);">"Le Sénégal se transforme, la géomatique l'accompagne"</p>
            </div>

            <h3>🏙️ Urbanisation rapide</h3>
            <p>Le Sénégal connaît une urbanisation accélérée, notamment dans la région de Dakar et Thiès. Cette croissance pose des défis majeurs :</p>
            <ul>
                <li>Étalement urbain incontrôlé</li>
                <li>Pression sur les infrastructures</li>
                <li>Gestion des risques naturels</li>
                <li>Planification territoriale</li>
            </ul>

            <h3>🛣️ Infrastructures et aménagement</h3>
            <p>La géomatique est essentielle pour :</p>
            <ul>
                <li>Planifier les réseaux de transport</li>
                <li>Gérer les ressources en eau</li>
                <li>Développer les énergies renouvelables</li>
                <li>Aménager les zones agricoles</li>
            </ul>

            <h3>🛰️ Utilité des SIG au Sénégal</h3>
            <ul>
                <li><strong>Gestion des territoires :</strong> Cartographier les zones à risque, planifier l'urbanisation</li>
                <li><strong>Environnement :</strong> Suivre la déforestation, surveiller les ressources en eau</li>
                <li><strong>Agriculture :</strong> Cartographier les zones agricoles, suivre les rendements</li>
                <li><strong>Santé publique :</strong> Cartographier les épidémies, optimiser l'accès aux soins</li>
            </ul>

            <h3>🌱 Perspectives d'avenir</h3>
            <p>La géomatique est un secteur en pleine expansion au Sénégal. Les besoins sont énormes :</p>
            <ul>
                <li>Formation de nouveaux géomaticiens</li>
                <li>Développement d'outils adaptés au contexte sénégalais</li>
                <li>Collaboration entre les universités et les institutions</li>
                <li>Valorisation des données spatiales</li>
            </ul>

            <h3>💡 Mon engagement</h3>
            <p>En tant qu'étudiante en géomatique, je souhaite contribuer au développement du Sénégal à travers mes compétences. Mon objectif est de :</p>
            <ul>
                <li>Participer à des projets d'aménagement du territoire</li>
                <li>Former la prochaine génération de géomaticiens</li>
                <li>Valoriser les données spatiales pour le développement durable</li>
            </ul>
        `
    }
];
// ===== ÉTATS =====
let blogCatActive = 'tous';
let blogSearchQuery = '';

// ===== FILTRAGE =====
function getBlogFiltered() {
    return BLOG_ARTICLES.filter(a => {
        const matchCat = blogCatActive === 'tous' || a.cat === blogCatActive;
        const matchSearch = blogSearchQuery === '' ||
            a.titre.toLowerCase().includes(blogSearchQuery) ||
            a.resume.toLowerCase().includes(blogSearchQuery);
        return matchCat && matchSearch;
    });
}

// ===== RENDU BLOG =====
function renderBlog() {
    const filtered = getBlogFiltered();
    renderBlogHero(filtered);
    renderBlogGrid(filtered);
}

function renderBlogHero(articles) {
    const layout = document.getElementById('blogMainLayout');
    if (!layout) return;

    if (articles.length === 0) {
        layout.innerHTML = `<div class="b-empty"><i class="fas fa-search"></i><p>Aucun article trouvé.</p></div>`;
        return;
    }

    const featured  = articles[0];
    const sidebar   = articles.slice(1, 4);
    const icon      = featured.cat === 'qgis' ? 'map' : featured.cat === 'rstudio' ? 'chart-bar' : 'globe';
    const tagLabel  = featured.cat === 'qgis' ? 'QGIS' : featured.cat === 'rstudio' ? 'RStudio' : 'Web SIG';

    layout.innerHTML = `
        <article class="b-featured" onclick="openBlogModal(${featured.id})">
            <div class="b-featured-thumb">
                <i class="fas fa-${icon}"></i>
                <span>${featured.cat.toUpperCase()} · ${featured.niveau}</span>
            </div>
            <div class="b-featured-body">
                <span class="b-tag b-tag-${featured.cat === 'websig' ? 'websig' : featured.cat}">
                    <i class="fas fa-${icon}"></i> ${tagLabel}
                </span>
                <h2>${featured.titre}</h2>
                <p>${featured.resume}</p>
                <div class="b-meta">
                    <span><i class="far fa-calendar"></i> ${featured.date}</span>
                    <span><i class="far fa-clock"></i> ${featured.duree}</span>
                    <span><i class="fas fa-tag"></i> ${featured.niveau}</span>
                    <span class="b-read-more">Lire <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </article>

        <aside class="b-sidebar">
            <div class="b-sidebar-label">Articles récents</div>
            ${sidebar.map(a => {
                const ic = a.cat === 'qgis' ? 'map' : a.cat === 'rstudio' ? 'chart-bar' : 'globe';
                const lb = a.cat === 'qgis' ? 'QGIS' : a.cat === 'rstudio' ? 'RStudio' : 'Web SIG';
                return `
                <article class="b-mini" onclick="openBlogModal(${a.id})">
                    <span class="b-tag b-tag-${a.cat === 'websig' ? 'websig' : a.cat}">
                        <i class="fas fa-${ic}"></i> ${lb}
                    </span>
                    <h3>${a.titre}</h3>
                    <p>${a.resume}</p>
                    <div class="b-mini-meta">
                        <span><i class="far fa-calendar"></i> ${a.date}</span>
                        <span><i class="far fa-clock"></i> ${a.duree}</span>
                    </div>
                </article>`;
            }).join('')}
        </aside>
    `;
}

function renderBlogGrid(articles) {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    const rest = articles.slice(4);
    if (rest.length === 0) { grid.innerHTML = ''; return; }

    grid.innerHTML = rest.map(a => {
        const ic = a.cat === 'qgis' ? 'map' : a.cat === 'rstudio' ? 'chart-line' : 'code';
        const lb = a.cat === 'qgis' ? 'QGIS' : a.cat === 'rstudio' ? 'RStudio' : 'Web SIG';
        const tagCat = a.cat === 'websig' ? 'websig' : a.cat;
        return `
        <article class="b-article-card" onclick="openBlogModal(${a.id})">
            <div class="b-card-icon bicon-${tagCat}">
                <i class="fas fa-${ic}"></i>
            </div>
            <span class="b-tag b-tag-${tagCat}"><i class="fas fa-${ic}"></i> ${lb}</span>
            <h3>${a.titre}</h3>
            <p>${a.resume}</p>
            <div class="b-card-footer">
                <span class="b-tag b-tag-${tagCat}" style="margin-bottom:0">${a.niveau}</span>
                <span><i class="far fa-clock"></i> ${a.duree}</span>
            </div>
        </article>`;
    }).join('');
}

// ===== MODAL BLOG (version simple et robuste) =====
function openBlogModal(id) {
    console.log('🔍 openBlogModal appelé pour l\'article ID:', id);
    
    const article = BLOG_ARTICLES.find(a => a.id === id);
    if (!article) {
        console.error('❌ Article non trouvé');
        return;
    }
    
    console.log('✅ Article trouvé:',  article.titre);

    const tagLabel = article.cat === 'qgis' ? 'QGIS' : article.cat === 'rstudio' ? 'RStudio' : 'Web SIG';

    // Supprimer l'ancienne modal si elle existe
    const oldModal = document.getElementById('blogModal');
    if (oldModal) oldModal.remove();

    // Créer la modal
    const modal = document.createElement('div');
    modal.id = 'blogModal';
    modal.className = 'blog-modal-bg';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.background = 'rgba(0,0,0,0.85)';
    modal.style.backdropFilter = 'blur(6px)';
    modal.style.zIndex = '5000';
    modal.style.padding = '2rem 1rem';
    modal.style.overflowY = 'auto';

    modal.innerHTML = `
        <div class="blog-modal" style="
            background: var(--clr-surface, #ffffff);
            border-radius: 24px;
            max-width: 720px;
            width: 100%;
            max-height: 85vh;
            overflow-y: auto;
            padding: 2.5rem;
            position: relative;
            box-shadow: 0 24px 60px rgba(0,0,0,0.3);
            animation: slideUp 0.3s ease;
        ">
            <button id="blogModalCloseBtn" style="
                position: absolute;
                top: 1.2rem;
                right: 1.2rem;
                background: var(--clr-bg, #f0f0f0);
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 1.4rem;
                color: var(--clr-text-muted, #666);
                transition: all 0.2s;
                font-family: var(--font-body, sans-serif);
            ">&times;</button>
            
            <span class="blog-article-tag blog-tag-${article.cat}" style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 0.3rem 1rem;
                border-radius: 100px;
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                background: ${article.cat === 'qgis' ? '#e9f5ee' : article.cat === 'rstudio' ? '#fff0eb' : '#f0ebff'};
                color: ${article.cat === 'qgis' ? '#1a6633' : article.cat === 'rstudio' ? '#b5381a' : '#4b2ea0'};
                margin-bottom: 0.8rem;
            ">
                <i class="fas fa-${article.cat === 'qgis' ? 'map' : article.cat === 'rstudio' ? 'chart-bar' : 'globe'}"></i>
                ${tagLabel}
            </span>
            
            <h2 style="
                font-family: var(--font-display, serif);
                font-size: 1.6rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                color: var(--clr-text, #222);
                line-height: 1.2;
            ">${article.titre}</h2>
            
            <div style="
                display: flex;
                gap: 1rem;
                font-size: 0.85rem;
                color: var(--clr-text-muted, #666);
                margin-bottom: 1.5rem;
                flex-wrap: wrap;
            ">
                <span><i class="far fa-calendar"></i> ${article.date}</span>
                <span><i class="far fa-clock"></i> ${article.duree}</span>
                <span><i class="fas fa-signal"></i> ${article.niveau}</span>
            </div>
            
            <div style="
                line-height: 1.8;
                color: var(--clr-text-muted, #555);
            ">
                ${article.contenu}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Gestion de la fermeture
    const closeBtn = document.getElementById('blogModalCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBlogModal);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === this) closeBlogModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeBlogModal();
    });

    document.body.style.overflow = 'hidden';
    console.log('✅ Modal ouverte avec succès');
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
        console.log('✅ Modal fermée');
    }
}

// ===== EXPOSER GLOBALEMENT =====
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal;

// ===== FILTRES =====
function initBlogFiltersAndSearch() {
    // Filtres
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            blogCatActive = this.dataset.bcat;
            renderBlog();
        });
    });

    // Recherche
    const searchInput = document.getElementById('blogSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            blogSearchQuery = this.value.toLowerCase().trim();
            renderBlog();
        });
    }

    // ===== NEWSLETTER — Version corrigée et testée =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogNlForm');
    if (!form) {
        console.warn('Formulaire newsletter non trouvé');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupérer l'email (par le nom ou par le type)
        const input = this.querySelector('input[type="email"]');
        if (!input) {
            alert('Erreur : champ email manquant dans le formulaire.');
            return;
        }

        // Nettoyer la valeur
        const email = input.value.trim();

        // Validation simple mais efficace
        const isValid = email.length > 0 && email.includes('@') && email.includes('.');

        // Debug : afficher dans la console
        console.log('Email saisi :', email);
        console.log('Valide ?', isValid);

        if (isValid) {
            // Succès
            if (typeof showToast === 'function') {
                showToast('✅ Abonnement confirmé ! Merci 🌍', '#27ae60');
            } else {
                alert('✅ Abonnement confirmé ! Merci 🌍');
            }
            // Réinitialiser le champ
            form.reset();
        } else {
            // Erreur
            const msg = '✗ Veuillez saisir un email valide (ex: nom@domaine.com).';
            if (typeof showToast === 'function') {
                showToast(msg, '#e74c3c');
            } else {
                alert(msg);
            }
        }
    });
});

// Si la fonction showToast n'existe pas, on la crée
if (typeof showToast !== 'function') {
    window.showToast = function(message, color = '#2c3e50') {
        // Supprimer un éventuel toast existant
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: ${color};
            color: white;
            padding: 12px 24px;
            border-radius: 40px;
            z-index: 10002;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            text-align: center;
            font-family: var(--font-body, sans-serif);
            max-width: 90%;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };
}
// Optionnel : voir les emails dans la console
console.log('Emails abonnés :', JSON.parse(localStorage.getItem('newsletter_emails') || '[]'));
}

// ===== INITIALISATION =====
function initBlog() {
    if (!document.getElementById('blog')) {
        console.log('ℹ️ Section blog non trouvée');
        return;
    }
    console.log('📝 Initialisation du blog...');
    initBlogFiltersAndSearch();
    renderBlog();
    console.log('✅ Blog initialisé avec', BLOG_ARTICLES.length, 'articles');
}

// ===== LANCER =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlog);
} else {
    initBlog();
}