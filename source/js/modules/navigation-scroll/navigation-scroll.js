import {navList} from '../mobile-menu/mobile-menu';

const anchorLinks = navList.querySelectorAll('a[href^="#"]'); // Все ссылки из списка в навигации шапки

// Плавный скролл
const onClickScroll = () => {
  anchorLinks.forEach((anchor) => {
    // Проверяем, что после хештега есть ссылка (чтобы не плодить ошибки в консоли)
    if (anchor.getAttribute('href').substring(1) !== '') {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault();

        // Делаем плавный скролл до кликнутого блока
        document.querySelector(evt.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  });
};

export {onClickScroll};
