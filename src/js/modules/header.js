function languageDropdown() {
  const language = document?.querySelector('.language');
  const languageCurrent = language?.querySelector('.language__current');
  const languageDropdown = language.querySelector('.language__dropdown');
  const headerBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');

  language.addEventListener('click', toggleLanguageDropdown);
  document.addEventListener('click', closeDropdownClickOutsideBlock)

  function toggleLanguageDropdown() {
    language.classList.toggle('_is-active');
  }

  function closeDropdownClickOutsideBlock(e) {
    const current = e.target == languageCurrent || languageCurrent.contains(e.target)
    const menu = e.target == languageDropdown || languageDropdown.contains(e.target)
    if (!current && !menu) {
      language.classList.remove('_is-active');
    }
  }

  function toggleBurger() {
    const headerBurgerIcon = headerBurger.children[0];
    if(!headerNav.classList.contains('_is-active')) {
      headerNav.classList.add('_is-active');
      headerBurgerIcon.src = headerBurgerIcon.src.replace('burger', 'close');
      document.body.style.overflow = 'hidden';
    } else {
      headerNav.classList.remove('_is-active');
      headerBurgerIcon.src = headerBurgerIcon.src.replace('close', 'burger');
      document.body.style.overflow = 'auto';
    }
  }

  if(window.innerWidth < 992) {
    language.removeEventListener('click', toggleLanguageDropdown);
    document.removeEventListener('click', closeDropdownClickOutsideBlock);    

    headerBurger.addEventListener('click', toggleBurger)
  }
}

export default languageDropdown