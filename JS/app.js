/* ============================================
   AWA FAYE — PORTFOLIO GÉOMATIQUE
   app.js — Version Finale Complète
   ============================================ */

// ===== DONNÉES PROJETS =====
const PROJETS = [
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
        description: "Vitrine en ligne pour présenter compétences, projets et formulaire de contact.",
        tags: ["VScode", "HTML5", "CSS3", "JavaScript"],
        categorie: "web",
        lien: "https://fawa12748.github.io/awa-faye-portfolio/",
        image: "image/portf.png"
        
    },
    {
        id: 4,
        titre: "CV Responsive",
        description: "Réalisation d'un CV responsive avec HTML et CSS.",
        categorie: "web",
        tags: ["VSCode", "CSS", "HTML"],
        lien: "pdf/cv.pdf",
        image: "image/cv.png"
    }
];

// ===== DONNÉES COMPÉTENCES =====
// Dans app.js, remplacez la constante "competences" par :

const competences = [
    {
        categorie: "🗺️ SIG & Cartographie",
        description: "Maîtrise des outils de Systèmes d'Information Géographique pour la création de cartes thématiques et l'analyse spatiale.",
        skills: [
            { nom: "QGIS", pct: 95, niveau: "Avancé", desc: "Cartographie thématique avancée, géoréférencement, numérisation de données vectorielles, analyses spatiales, création de mise en page et impression de cartes professionnelles" },
            { nom: "ArcGIS", pct: 85, niveau: "Avancé", desc: "numérisation, analyses spatiales, création de cartes et utilisation de ArcCatalog pour la gestion des données" },
            { nom: "Télédétection", pct: 65, niveau: "Intermédiaire", desc: "Analyse d'images satellitaires (Landsat, Sentinel), calcul d'indices spectraux (NDVI, NDWI), classification non supervisée et détection des changements" }
        ]
    },
    {
        categorie: "💻 Développement Web",
        description: "Création d'interfaces web modernes et d'applications cartographiques interactives accessibles à tous.",
        skills: [
            { nom: "HTML & CSS", pct: 80, niveau: "Avancé", desc: "Intégration, responsive design (mobile-first), animations CSS, variables CSS pour les animations" },
            { nom: "JavaScript", pct: 70, niveau: "Intermédiaire", desc: "Manipulation du DOM, événements, création de modales, animations et interactions utilisateur" },
            { nom: "Git & GitHub", pct: 45, niveau: "Débutant", desc: "Versionnage de code avec Git, création de dépôts sur GitHub, commits, push/pull, gestion de branches et déploiement de sites sur GitHub Pages." }
        ]
    },
    {
        categorie: "📊 Analyse de données",
        description: "Traitement statistique et analyse de données géographiques pour en extraire des informations pertinentes.",
        skills: [
            { nom: "RStudio", pct: 95, niveau: "Avancé", desc: "Statistiques spatiales, visualisation de données, analyses multivariées, régressions spatiales et création de rapports dynamiques avec R Markdown" },
            { nom: "Python", pct: 80, niveau: "Avancé", desc: "Découverte de Python pour l'analyse de données. Apprentissage des bases : variables, boucles, fonctions" },
            { nom: "Excel / Tableur", pct: 80, niveau: "Avancé", desc: "Analyse statistique descriptive, tableaux croisés dynamiques, création de graphiques cartographiques, traitement et nettoyage de données pour la géomatique" },
            { nom: "MySQL", pct: 65, niveau: "Intermédiaire", desc: "Requêtes SQL, gestion de bases de données , création et manipulation de tables et jointures" }
        ]
    },
    {
        categorie: "🎨 Outils & Méthodes",
        description: "Utilisation d'outils complémentaires pour la production de documents professionnels et la gestion de projets.",
        skills: [
            { nom: "Design cartographique", pct: 60, niveau: "Intermédiaire", desc: "Conception de cartes esthétiques et fonctionnelles, choix des couleurs et symboles, hiérarchisation de l'information, création de légendes et d'habillages cartographiques" },
            { nom: "Méthodologie projet", pct: 75, niveau: "Avancé", desc: "Planification de projet, gestion des tâches, respect des délais, travail en équipe, rédaction de rapports et documentation des méthodologies utilisées" },
            { nom: "KoboToolBox", pct: 65, niveau: "Intermédiaire", desc: "Création de formulaires d'enquête, collecte de données terrain avec/sans connexion, analyse des résultats, export vers Excel et gestion des données collectées" },
            { nom: "PowerPoint", pct: 95, niveau: "Avancé", desc: "Création de présentations professionnelles, insertion de cartes et graphiques, animations maîtrisées, mise en page soignée pour rapports et soutenances" }
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
    initBackToTop();
    initAnimations();
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
    // Bouton "En savoir plus" vers la section À propos
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

// ===== BOUTON GALERIE DÉPLACÉ =====
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
        .galerie-download-btn { 
            position:absolute; bottom:10px; right:10px; 
            background:#27ae60; color:white; border:none; 
            border-radius:30px; padding:0.3rem 0.8rem; 
            font-size:0.7rem; font-weight:600; cursor:pointer;
            display:flex; align-items:center; gap:0.3rem;
            opacity:0; transition:opacity 0.3s ease; z-index:10;
        }
        .galerie-item:hover .galerie-download-btn { opacity:1; }
        .galerie-download-btn:hover { background:#2ecc71; transform:scale(1.05); }
        .galerie-caption { 
            position:absolute; bottom:0; left:0; right:0;
            background:linear-gradient(transparent,rgba(0,0,0,0.7));
            color:white; padding:0.8rem 0.5rem 0.4rem;
            font-size:0.7rem; font-weight:500; text-align:center;
            opacity:0; transition:opacity 0.3s ease;
        }
        .galerie-item:hover .galerie-caption { opacity:1; }
        @media(max-width:480px){ 
            .galerie-grid{grid-template-columns:repeat(2,1fr);gap:0.7rem;}
            .galerie-download-btn { opacity:1; bottom:5px; right:5px; padding:0.2rem 0.5rem; font-size:0.6rem; }
            .galerie-caption { opacity:1; font-size:0.6rem; padding:0.4rem 0.3rem 0.2rem; }
        }
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
        if (label) label.textContent = 'Sombre';
    } else {
        icon.textContent = '☀️';
        if (label) label.textContent = 'Clair';
    }
}

// ===== MENU HAMBURGER =====
function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !navMenu.contains(e.target)) {
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

    const liste = filtre === 'tous' ? PROJETS : PROJETS.filter(p => p.categorie === filtre);
    container.innerHTML = '';

    if (liste.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:var(--clr-text-muted);grid-column:1/-1;">Aucun projet dans cette catégorie.</p>`;
        return;
    }

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
                        <i class="fas fa-tools"></i> Outils utilisés
                    </div>
                    <div class="carte-tags">
                        ${projet.tags.map(t => `<span class="carte-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <button class="carte-lien btn-voir-projet" data-id="${projet.id}">
                    Voir le projet <i class="fas fa-arrow-right"></i>
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
            const projet = PROJETS.find(p => p.id === id);
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
            #projet-modal {
                display:none; position:fixed; inset:0;
                background:rgba(0,0,0,0.88); backdrop-filter:blur(8px);
                z-index:4000; align-items:center; justify-content:center;
            }
            #projet-modal.show { display:flex; animation:fadeIn 0.3s ease; }
            .projet-modal-box {
                background:var(--clr-surface); border-radius:24px;
                max-width:620px; width:92%; max-height:90vh;
                overflow-y:auto; border:1px solid var(--clr-border);
                animation:scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
                box-shadow:0 32px 80px rgba(0,0,0,0.3);
            }
            .projet-modal-header {
                display:flex; justify-content:space-between; align-items:center;
                padding:1.5rem 1.8rem; background:var(--clr-bg-alt);
                border-bottom:1px solid var(--clr-border);
            }
            .projet-modal-header h3 {
                font-family:var(--font-display); font-size:1.4rem; margin:0;
                color:var(--clr-text); display:flex; align-items:center; gap:0.7rem;
            }
            .projet-modal-close {
                background:none; border:none; font-size:2rem; cursor:pointer;
                color:var(--clr-text-muted); transition:all 0.3s ease;
            }
            .projet-modal-close:hover { transform:rotate(90deg); color:var(--clr-accent); }
            .projet-modal-body { padding:2rem 1.8rem; }
            .projet-modal-desc {
                color:var(--clr-text-muted); font-size:1.1rem;
                line-height:1.8; margin-bottom:1.5rem;
            }
            .projet-modal-tags-titre {
                font-size:1rem; font-weight:700; color:var(--clr-text);
                margin-bottom:0.8rem; display:flex; align-items:center; gap:0.5rem;
            }
            .projet-modal-tags {
                display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1.8rem;
            }
            .projet-modal-tag {
                padding:0.5rem 1.2rem; background:rgba(44,62,80,0.1);
                border-radius:25px; font-size:0.9rem; font-weight:600; color:var(--clr-accent);
            }
            .projet-modal-statut {
                display:flex; align-items:center; gap:0.8rem; padding:1rem 1.2rem;
                background:rgba(39,174,96,0.08); border-radius:12px;
                border:1px solid rgba(39,174,96,0.25); margin-bottom:1.5rem;
                font-size:1rem; color:var(--clr-success); font-weight:600;
            }
            .btn-projet-modal-lien {
                display:inline-flex; align-items:center; gap:0.8rem;
                padding:1rem 2rem; background:var(--clr-accent); color:white;
                border:none; border-radius:40px; cursor:pointer;
                font-size:1rem; font-weight:600; transition:all 0.3s ease;
                text-decoration:none; width:100%; justify-content:center;
            }
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
                <p class="projet-modal-tags-titre"><i class="fas fa-tools"></i> Outils utilisés</p>
                <div class="projet-modal-tags">
                    ${projet.tags.map(t => `<span class="projet-modal-tag">${t}</span>`).join('')}
                </div>
                <div class="projet-modal-statut">
                    <i class="fas fa-check-circle"></i> Projet réalisé — Catégorie : ${projet.categorie.toUpperCase()}
                </div>
                <${btnTag} ${btnAttr} class="${btnClass}">
                    <i class="fas fa-external-link-alt"></i>
                    ${aLien ? 'Voir le projet en ligne' : 'Projet en cours de mise en ligne'}
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
                                <h4 class="skill-circle-name">${s.nom}</h4>
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

    // Gestion du clic sur toute la carte
    document.querySelectorAll('.skill-circle-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const descContainer = this.querySelector('.skill-circle-desc-container');
            const icon = this.querySelector('.skill-click-icon i');
            
            if (descContainer) {
                const isVisible = descContainer.classList.contains('show');
                
                // Fermer toutes les autres descriptions
                document.querySelectorAll('.skill-circle-desc-container').forEach(container => {
                    if (container !== descContainer && container.classList.contains('show')) {
                        container.classList.remove('show');
                        const otherIcon = container.closest('.skill-circle-item')?.querySelector('.skill-click-icon i');
                        if (otherIcon) otherIcon.className = 'fas fa-chevron-down';
                    }
                });
                
                // Basculer la description cliquée
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

    const portfolioUrl = ' https://fawa12748.github.io/awa-faye-portfolio/';
    
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
            if(debugEl) debugEl.textContent = '❌ Erreur: conteneur introuvable';
            return;
        }
        
        container.innerHTML = '';
        
        if (typeof QRCode === 'undefined') {
            console.warn("⚠️ QRCode lib manquante, utilisation API de secours");
            if(debugEl) debugEl.textContent = '📱 Utilisation générateur de secours';
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
                if(debugEl) debugEl.textContent = '✅ QR code généré avec succès';
            } catch(err) {
                console.error("Erreur QRCode:", err);
                if(debugEl) debugEl.textContent = '❌ Erreur: ' + err.message;
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
            .custom-cursor {
                position: fixed;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(46, 204, 113, 0.4);
                border: 2px solid var(--clr-accent, #27ae60);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: width 0.2s, height 0.2s, background 0.2s;
            }
            .custom-cursor.hover {
                width: 40px;
                height: 40px;
                background: rgba(46, 204, 113, 0.2);
                border-width: 2px;
            }
            body {
                cursor: default;
            }
            a, button, .filtre-btn, .social-icon, .projet-carte, .skill-item, .carte-lien, .view-toggle-btn {
                cursor: pointer;
            }
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