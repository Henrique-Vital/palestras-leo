// Animations.js - Gerencia as animações de scroll

// Função para observar elementos e adicionar animações ao entrar no viewport
document.addEventListener('DOMContentLoaded', function() {
  // Configuração do Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  // Criar o observer para animações de scroll
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observar todas as seções com a classe scroll-animate
  const sections = document.querySelectorAll(".scroll-animate");
  sections.forEach(function(section) {
    observer.observe(section);
  });
});