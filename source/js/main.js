import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

import {initMenu} from './modules/mobile-menu/mobile-menu';
import {onClickScroll} from './modules/navigation-scroll/navigation-scroll';
import {initFormValidate} from './modules/form/form-validity';
import {initLocalStorage} from './modules/form/form-storage';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // Меню-бургер (мобилки)
  initMenu();
  // Плавный скролл из шапки
  onClickScroll();

  window.addEventListener('load', () => {
    initModals();

    // Валидация формы
    initFormValidate();
    // Локальное хранилище
    initLocalStorage();
  });
});
