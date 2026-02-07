document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.ba-wrapper');
  if (!wrapper) return;

  const slider = wrapper.querySelector('.ba-slider');
  const before = wrapper.querySelector('.ba-before');
  const divider = wrapper.querySelector('.ba-divider');

const update = (value) => {
  before.style.width = `calc(${value}% + 1px)`;
  if (divider) divider.style.left = value + '%';
};


  update(slider.value);

  slider.addEventListener('input', (e) => {
    update(e.target.value);
  });
});
