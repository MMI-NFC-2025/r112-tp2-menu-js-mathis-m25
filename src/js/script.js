// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn'); // Bouton qui ouvre/ferme
const nav = document.querySelector('.menu'); // Menu de navigation
const body = document.body; // L'élément <body> pour bloquer le scroll

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {

  // Tâche 1 : Agir suivant l'état actuel (lecture de l'état du bouton AVANT le clic)
  const isOpen = toggle.ariaExpanded === "true"; 
  const isClosed = !isOpen; // Définit l'état "fermé" (utile pour le console.log)
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

  // Mise à jour des attributs ARIA pour accessibilité (Inversion de l'état)
  // Le nouvel état 'expanded' est l'inverse de l'ancien 'isOpen' 
  toggle.setAttribute('aria-expanded', !isOpen);
  // Le nouvel état 'hidden' est l'ancien 'isOpen' (car ils sont inverses)
  nav.setAttribute('aria-hidden', isOpen);

  // Tâche 2 : Ajout/Retrait de la classe noscroll sur le <body>
  body.classList.toggle('noscroll');
});