const Refs = {
  openNavButton: document.querySelector('.open-nav-button'),
  nav: document.querySelector('.nav'),
  page: document.querySelector('title'),
  navItems: document.querySelectorAll('.nav-list-item'),
};

toggleNavigationModal();
setActivePage();

function toggleNavigationModal() {
  Refs.openNavButton.addEventListener('click', evt => {
    console.log(evt.currentTarget);
    Refs.nav.classList.toggle('hide');
  });
}

function setActivePage() {
  switch (Refs.page.text) {
    case 'Резюме':
      Refs.navItems[0].classList.add('active');
      break;

    case 'Автобиография':
      console.log('Автобиография');
      Refs.navItems[1].classList.add('active');
      break;

    case 'Мои работы':
      console.log('работы');
      Refs.navItems[2].classList.add('active');
      break;

    default:
      alert('Если бы мы знали что это такое, но мы не знаем что это такое 🤣');
      break;
  }
}
