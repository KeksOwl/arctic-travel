const bodyModal = document.querySelector('[data-modal]'); // Тело страницы

const headerWrapper = document.querySelector('[data-wrapper]'); // Враппер

const navBlock = headerWrapper.querySelector('[data-menu]'); // Навбар
const navToggler = navBlock.querySelector('[data-toggler]'); // Кнопка меню
const navList = navBlock.querySelector('[data-list]'); // Список меню

const navLogo = navBlock.querySelector('[data-nav-logo]'); // Лого в меню
const mainLogo = headerWrapper.querySelector('[data-main-logo]'); // Главное лого

// Обработчик закрытия модального окна при клике на область позади окна
const onOverlayClick = (evt) => {
  if (evt.target === document.body) {
    closeMenu();
  }
};

// Обработчик закрытия окна при клике на ссылку
const onLinkClick = (evt) => {
  if (evt.target.matches('a')) {
    closeMenu();
  }
};

// Функция раскрытия меню
const openMenu = () => {
  bodyModal.dataset.modal = 'is-open'; // Блокируем скролл и затемняем фон
  headerWrapper.dataset.wrapper = 'is-open'; // Разворачиваем враппер
  navBlock.dataset.menu = 'is-open'; // Задаём навбару «открытое» состояние
  navToggler.dataset.toggler = 'is-open'; // Меняем тогглер на открытом состоянии меню
  navList.dataset.list = 'is-open'; // Показываем список меню
  navLogo.dataset.navLogo = 'is-shown'; // Показываем тёмное лого меню
  mainLogo.dataset.mainLogo = 'is-hidden'; // Прячем основное светлое лого

  document.addEventListener('click', onOverlayClick); // Включаем обработчик клика вне окна модалки
  document.addEventListener('click', onLinkClick); // Включаем обработчик клика по ссылке
};

// Функция закрытия меню
const closeMenu = () => {
  bodyModal.dataset.modal = 'is-closed'; // Включаем скролл и фон
  headerWrapper.dataset.wrapper = 'is-closed'; // Убираем враппер
  navBlock.dataset.menu = 'is-closed'; // Задаём навбару «закрытое» состояние
  navToggler.dataset.toggler = 'is-closed'; // Активируем тогглер в закрытом состоянии меню
  navList.dataset.list = 'is-hidden'; // Прячем список меню
  navLogo.dataset.navLogo = 'is-hidden'; // Прячем тёмное лого меню
  mainLogo.dataset.mainLogo = 'is-shown'; // Показываем основное светлое лого

  document.removeEventListener('click', onOverlayClick); // Удаляем обработчик (клик вне окна)
  document.removeEventListener('click', onLinkClick); // Удаляем обработчик (клик по ссылке)
};

// Инициализация рабочего меню при загрузке js
const initMenu = () => {
  headerWrapper.dataset.wrapper = 'is-closed'; // Убираем враппер
  navBlock.dataset.menu = 'is-closed'; // Задаём навбару «закрытое» состояние для дальнейшего пользования
  navToggler.dataset.toggler = 'is-closed'; // Активируем тогглер в закрытом состоянии меню
  navList.dataset.list = 'is-hidden'; // Прячем список меню
  navLogo.dataset.navLogo = 'is-hidden'; // Прячем тёмное лого меню
  mainLogo.dataset.mainLogo = 'is-shown'; // Показываем основное светлое лого

  navToggler.addEventListener('click', function () {
    const navBlockStatus = navBlock.getAttribute('data-menu'); // Получаем текущее состояние навбара

    if (navBlockStatus === 'is-closed') {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {initMenu, navList};
