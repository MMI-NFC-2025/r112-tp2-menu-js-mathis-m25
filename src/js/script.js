// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // On vérifie d'abord si le menu est actuellement caché
  const isHidden = nav.getAttribute('aria-hidden') === 'true';  
  // Mise à jour des attributs ARIA pour accessibilité
  nav.setAttribute('aria-hidden', !isHidden);
  toggle.setAttribute('aria-expanded', !isHidden);
});