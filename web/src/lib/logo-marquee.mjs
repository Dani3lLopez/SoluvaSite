export function initLogoMarquees() {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-logo-marquee]').forEach((marquee) => {
    const button = marquee.querySelector('button');
    const label = marquee.querySelector('[data-logo-label]');
    if (!button || !label) return;
    const update = () => {
      marquee.dataset.ready = String(!preference.matches);
      button.hidden = preference.matches;
    };
    button.addEventListener('click', () => {
      const paused = marquee.dataset.paused !== 'true';
      marquee.dataset.paused = String(paused);
      label.textContent = paused ? 'Reanudar' : 'Pausar';
      button.setAttribute('aria-label', (paused ? 'Reanudar' : 'Pausar') + ' movimiento de las marcas');
    });
    preference.addEventListener('change', update);
    update();
  });
}
