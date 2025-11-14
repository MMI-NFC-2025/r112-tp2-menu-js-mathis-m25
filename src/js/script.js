// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const body = document.body; // <-- On cible l'élément <body>

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {

  // 1. Lire l'état du bouton 
  const isOpen = toggle.ariaExpanded === "true"; 
  // const isClosed = !isOpen; // Ligne optionnelle de console.log

  // 2. Basculer les attributs ARIA 
  toggle.setAttribute('aria-expanded', !isOpen);
  nav.setAttribute('aria-hidden', isOpen);

  // 3. Basculer la classe 'noscroll' sur le <body>
  body.classList.toggle('noscroll');
});