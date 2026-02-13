document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.ba-wrapper').forEach(wrapper => {

    const slider = wrapper.querySelector('.ba-slider');
    const before = wrapper.querySelector('.ba-before');
    const divider = wrapper.querySelector('.ba-divider');

    const update = (value) => {
      before.style.width = `calc(${value}% + 1px)`;
      if (divider) divider.style.left = value + '%';
      slider.value = value; // sincroniza slider con arrastre
    };

    update(slider.value);

    // Slider input
    slider.addEventListener('input', (e) => {
      update(e.target.value);
    });

    // Drag con mouse
    let isDragging = false;
    divider.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const rect = wrapper.getBoundingClientRect();
      let percent = ((e.clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      update(percent);
    });

    // Drag con touch
    divider.addEventListener('touchstart', () => { isDragging = true; });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const rect = wrapper.getBoundingClientRect();
      let touchX = e.touches[0].clientX;
      let percent = ((touchX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      update(percent);
    });

    // Hover feedback para el divider
    divider.addEventListener('mouseenter', () => divider.classList.add('active'));
    divider.addEventListener('mouseleave', () => divider.classList.remove('active'));

    // Animación de entrada de wrapper
    wrapper.classList.add('fade-in-init'); // clase inicial, CSS controla animación
  });

});

// Botón Ver más / Ver menos (sin cambios)
document.querySelectorAll(".ba-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".ba-card");
    card.classList.toggle("active");

    btn.textContent = card.classList.contains("active")
      ? "Ver menos"
      : "Ver más";
  });
});

// IntersectionObserver para animaciones al entrar en pantalla
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".ba-card, .ba-header, .ba-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

});
