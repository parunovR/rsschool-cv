const btnMenuToggle = document.querySelector('.btn-menu-toggle');
const navMain = document.querySelector('.nav-main');

function openMenu() {
  btnMenuToggle.classList.toggle('active');
  navMain.classList.toggle('show');
}

function closeMenu() {
  btnMenuToggle.classList.remove('active');
  navMain.classList.remove('show');
}

btnMenuToggle.addEventListener('click', openMenu);
navMain.addEventListener('click', closeMenu);