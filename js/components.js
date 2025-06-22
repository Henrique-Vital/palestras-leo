// Components.js - Comportamento dos componentes

document.addEventListener('DOMContentLoaded', function() {
  // Efeito de hover para elementos com classe hover-scale
  const hoverElements = document.querySelectorAll('.hover-scale, .hover-scale-lg');
  
  hoverElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      // O CSS já cuida da animação
    });
    
    element.addEventListener('mouseleave', function() {
      // O CSS já cuida da animação
    });
  });
  
  // Efeito de hover para elementos com classe hover-bg-gold
  const goldHoverElements = document.querySelectorAll('.hover-bg-gold');
  
  goldHoverElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      // O CSS já cuida da animação
    });
    
    element.addEventListener('mouseleave', function() {
      // O CSS já cuida da animação
    });
  });
});