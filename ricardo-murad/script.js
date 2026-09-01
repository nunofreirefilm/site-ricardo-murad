document.addEventListener('DOMContentLoaded', function () {
  // 1. Inicialização do AOS sem mutation observer para evitar CLS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      disableMutationObserver: true,
      offset: 100
    });
  }

  // 2. Funcionalidade dos Acordeões do FAQ (Sanfona)
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  // Inicializa a altura dos itens que já iniciam ativos
  document.querySelectorAll('.faq-item.active').forEach(function (activeItem) {
    const content = activeItem.querySelector('.faq-content');
    if (content) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  faqTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = this.parentElement;
      const content = item.querySelector('.faq-content');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Fechar outros itens (comportamento exclusivo de sanfona)
      document.querySelectorAll('.faq-item').forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = '0px';
        }
      });

      // Alternar o item clicado
      if (isExpanded) {
        item.classList.remove('active');
        this.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // 3. Smooth Scroll para links de ancoragem com offset do header
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Atualização dinâmica do ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
