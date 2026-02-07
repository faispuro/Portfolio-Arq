const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
  });
});

const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

elements.forEach(el => observer.observe(el));


const images = [
  "assets/images/proyecto-1.jpg",
  "assets/images/proyecto-2.jpg",
  "assets/images/proyecto-3.jpg"
];

let current = 0;
const heroImg = document.getElementById("heroImage");

setInterval(() => {
  current = (current + 1) % images.length;
  heroImg.src = images[current];
}, 4000);


toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});
