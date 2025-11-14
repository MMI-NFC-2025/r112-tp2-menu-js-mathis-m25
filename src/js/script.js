// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {

  // Agir suivant l'état (actuel) : Lit l'état du bouton AVANT le clic
  const isOpen = toggle.ariaExpanded === "true"; 
  const isClosed = !isOpen; // Cette ligne est pour le débug, mais est incluse dans l'énoncé

  // Testez et regardez ce qui s'affiche dans la console
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

  // En déduire les modifications : On met à jour les attributs en inversant l'état
  // Le nouvel état 'expanded' est l'inverse de l'ancien 'isOpen'.
  toggle.setAttribute('aria-expanded', !isOpen);
  
  // Le nouvel état 'hidden' est l'inverse de 'expanded', donc égal à l'ancien 'isOpen'.
  nav.setAttribute('aria-hidden', isOpen); 

});