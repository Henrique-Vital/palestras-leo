// Main.js - Script principal

// Função para executar quando o DOM for carregado
document.addEventListener('DOMContentLoaded', function() {
  // Mostrar elementos iniciais com animação
  setTimeout(function() {
    const heroSections = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right');
    heroSections.forEach(function(section) {
      section.style.opacity = '1';
      section.style.transform = 'translateX(0)';
    });
  }, 100);

  // Adicionar comportamento ao botão CTA
  const ctaButton = document.getElementById('ctaButton');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      alert('Obrigado pelo seu interesse! Em breve entraremos em contato.');
    });
  }

  // Inicializar qualquer tooltip ou popover Bootstrap se necessário
  try {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  } catch(e) {
    console.log('Tooltips não inicializados');
  }
});