document.documentElement.classList.add('js');
if (!('IntersectionObserver' in window)) {
  window.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; }
    observe(target) { this.callback([{ isIntersecting: true, target }]); }
    unobserve() {}
  };
}

// ---------- mobile menu ----------
const menuBtn = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// ---------- scroll progress bar ----------
const progressEl = document.getElementById('scrollProgress');
function updateScrollProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressEl.style.width = scrolled + '%';
}
document.addEventListener('scroll', updateScrollProgress, { passive: true });

// ---------- reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ---------- animated stat counters ----------
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
statNums.forEach(el => statObserver.observe(el));

// ---------- devops progress bar fill ----------
const devopsPanel = document.querySelector('.devops-panel');
if (devopsPanel) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('progressFill').style.width = '18%';
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  progressObserver.observe(devopsPanel);
}

// ---------- rotating role text ----------
const roles = [
  'QA Engineer',
  'Software Tester',
  'DevOps Engineer (Learning)'
];
const roleEl = document.getElementById('roleRotator');
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function typeRole(){
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      charIndex = current.length;
      deleting = true;
      setTimeout(typeRole, 1600);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  roleEl.textContent = current.slice(0, charIndex);
  setTimeout(typeRole, deleting ? 35 : 65);
}
setTimeout(typeRole, 1400);


// ---------- resume download ----------
document.querySelectorAll('.resume-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.setAttribute('aria-label', 'Download Muhammad Ahmer Roshan Mirza resume');
  });
});
