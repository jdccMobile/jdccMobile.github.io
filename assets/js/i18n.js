const translations = {
  es: {
    "page_title": "JDMobile - Indie Developer",
    "subtitle": "Indie Developer",
    "apps_title": "APPS",
    "kawaii_title": "Kawaii Sushi Counter: Kawashi",
    "kawaii_desc": "El contador de sushi más kawaii: cuenta los sushis que comes y supera tu récord",
    "star_title": "Star & Hero Realms Contador",
    "star_desc": "Contador de puntos, vida y autoridad para Star Realms y Hero Realms.",
    "chinchon_title": "Chinchón contador de puntos",
    "chinchon_desc": "Anota puntos de Chinchón, Conga o Golpe sin conexión.",
    "couple_goals_title": "Couple Goals & Love Counter",
    "couple_goals_desc": "Mira cuantos días llevas juntos y logra tus metas de pareja",
    "cosmere_title": "Cosmere Companion",
    "cosmere_desc": "Tu guía para el orden de lectura y línea temporal del Cosmere.",
    "cantabria_title": "Descubre Cantabria",
    "cantabria_desc": "Descubre pueblos, monumentos y gastronomía de Cantabria.",
    "contact_title": "Contacto",
    "email_title": "Email",
    "footer_text": "&copy; 2025 JDMobile. Todos los derechos reservados."
  },
  en: {
    "page_title": "JDMobile - Indie Developer",
    "subtitle": "Indie Developer",
    "apps_title": "APPS",
    "kawaii_title": "Kawaii Sushi Counter: Kawashi",
    "kawaii_desc": "The kawaiiest sushi counter: count the sushi you eat and beat your record",
    "star_title": "Star & Hero Realms Counter",
    "star_desc": "Score, health, and authority counter for Star Realms and Hero Realms.",
    "chinchon_title": "Chinchón Score Counter",
    "chinchon_desc": "Score keeper for Chinchón, Conga, or Golpe offline.",
    "couple_goals_title": "Couple Goals & Love Counter",
    "couple_goals_desc": "See how many days you have been together and achieve your couple goals.",
    "cosmere_title": "Cosmere Companion",
    "cosmere_desc": "Your guide to the reading order and timeline of the Cosmere.",
    "cantabria_title": "Discover Cantabria",
    "cantabria_desc": "Discover villages, monuments, and gastronomy of Cantabria.",
    "contact_title": "Contact",
    "email_title": "Email",
    "footer_text": "&copy; 2025 JDMobile. All rights reserved."
  },
  fr: {
    "page_title": "JDMobile - Développeur Indépendant",
    "subtitle": "Développeur Indépendant",
    "apps_title": "APPLICATIONS",
    "kawaii_title": "Kawaii Sushi Counter: Kawashi",
    "kawaii_desc": "Le compteur de sushis le plus kawaii : comptez les sushis que vous mangez et battez votre record",
    "star_title": "Compteur Star & Hero Realms",
    "star_desc": "Compteur de points, de vie et d'autorité pour Star Realms et Hero Realms.",
    "chinchon_title": "Compteur Chinchón",
    "chinchon_desc": "Notez les points de Chinchón, Conga ou Golpe hors ligne.",
    "couple_goals_title": "Couple Goals & Love Counter",
    "couple_goals_desc": "Voyez combien de jours vous avez passé ensemble et atteignez vos objectifs de couple.",
    "cosmere_title": "Compagnon Cosmere",
    "cosmere_desc": "Votre guide pour l'ordre de lecture et la chronologie du Cosmere.",
    "cantabria_title": "Découvrez la Cantabrie",
    "cantabria_desc": "Découvrez les villages, monuments et la gastronomie de la Cantabrie.",
    "contact_title": "Contact",
    "email_title": "Email",
    "footer_text": "&copy; 2025 JDMobile. Tous droits réservés."
  },
  de: {
    "page_title": "JDMobile - Indie-Entwickler",
    "subtitle": "Indie-Entwickler",
    "apps_title": "APPS",
    "kawaii_title": "Kawaii Sushi Counter: Kawashi",
    "kawaii_desc": "Der süßeste Sushi-Zähler: Zähle deine Sushis und brich deinen Rekord",
    "star_title": "Star & Hero Realms Zähler",
    "star_desc": "Punkte-, Lebens- und Autoritätszähler für Star Realms und Hero Realms.",
    "chinchon_title": "Chinchón Punktezähler",
    "chinchon_desc": "Notiere Punkte für Chinchón, Conga oder Golpe offline.",
    "couple_goals_title": "Couple Goals & Love Counter",
    "couple_goals_desc": "Sehen Sie, wie viele Tage Sie schon zusammen sind und erreichen Sie Ihre Beziehungsziele.",
    "cosmere_title": "Cosmere Begleiter",
    "cosmere_desc": "Dein Guide für die Lesereihenfolge und Zeitlinie des Cosmere.",
    "cantabria_title": "Entdecke Kantabrien",
    "cantabria_desc": "Entdecke Dörfer, Denkmäler und Gastronomie von Kantabrien.",
    "contact_title": "Kontakt",
    "email_title": "E-Mail",
    "footer_text": "&copy; 2025 JDMobile. Alle Rechte vorbehalten."
  },
  it: {
    "page_title": "JDMobile - Sviluppatore Indie",
    "subtitle": "Sviluppatore Indie",
    "apps_title": "APP",
    "kawaii_title": "Kawaii Sushi Counter: Kawashi",
    "kawaii_desc": "Il contatore di sushi più kawaii: conta i sushi che mangi e batti il tuo record",
    "star_title": "Contatore Star & Hero Realms",
    "star_desc": "Contatore di punti, vita e autorità per Star Realms e Hero Realms.",
    "chinchon_title": "Contatore Chinchón",
    "chinchon_desc": "Segna i punti di Chinchón, Conga o Golpe offline.",
    "couple_goals_title": "Couple Goals & Love Counter",
    "couple_goals_desc": "Vedi da quanti giorni state insieme e raggiungete i vostri obiettivi di coppia.",
    "cosmere_title": "Compagno Cosmere",
    "cosmere_desc": "La tua guida all'ordine di lettura e alla cronologia del Cosmere.",
    "cantabria_title": "Scopri la Cantabria",
    "cantabria_desc": "Scopri paesi, monumenti e gastronomia della Cantabria.",
    "contact_title": "Contatto",
    "email_title": "Email",
    "footer_text": "&copy; 2025 JDMobile. Tutti i diritti riservati."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('language') || 'es';
  updateLanguage(currentLang);
  setupLanguageSelector(currentLang);
});

function setupLanguageSelector(currentLang) {
  const selector = document.getElementById('language-selector');
  if (!selector) return;

  const btn = selector.querySelector('.lang-btn');
  const dropdown = selector.querySelector('.lang-dropdown');
  const options = selector.querySelectorAll('.lang-option');

  // Set initial flag
  updateFlag(btn, currentLang);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });

  options.forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedLang = option.getAttribute('data-lang');
      localStorage.setItem('language', selectedLang);
      updateLanguage(selectedLang);
      updateFlag(btn, selectedLang);
      dropdown.classList.remove('show');
    });
  });
}

function updateFlag(element, lang) {
  const flagClass = lang === 'en' ? 'fi-gb' : `fi-${lang}`;
  // Use fis (square/shiny) or normal fi. flag-icons has fi fi-xx.
  // fis is often not included in basic build, let's stick to fi.
  element.innerHTML = `<span class="fi fi-${lang === 'en' ? 'gb' : lang}"></span>`;
}

function updateLanguage(lang) {
  document.documentElement.lang = lang;

  // Update Title
  if (translations[lang] && translations[lang]["page_title"]) {
      document.title = translations[lang]["page_title"];
  }

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Allow HTML in footer_text
      if (key === 'footer_text') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}
