const formBooking = document.querySelector('[data-form]'); // Форма
const formNameInput = formBooking.querySelector('[data-form-name'); // Инпут имени
const formTelInput = formBooking.querySelector('[data-form-tel]'); // Инпут телефона
const formEmailInput = formBooking.querySelector('[data-form-email]'); // Инпут почты

const namePattern = /^([A-Za-zА-Яа-яЁё\s]+)$/; // Паттерн имени пользователя
const telPattern = /^([-+()0-9\s]+)$/; // Паттерн телефона
// Паттерн почты
const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Валидация формы
const initFormValidate = () => {
  // Тестим ввод имени
  formNameInput.addEventListener('input', () => {
    const nameValue = formNameInput.value; // Значение поля имени

    // Проверяем длину имени и паттерн
    if (nameValue.length < 1) {
      formNameInput.setCustomValidity('Имя должно состоять минимум из 1 символа');
      formNameInput.style.outline = '2px solid #CC0000';
    } else if (!namePattern.test(nameValue)) {
      formNameInput.setCustomValidity('Введите имя без цифр, знаков и спецсимволов');
      formNameInput.style.outline = '2px solid #CC0000';
    } else {
      formNameInput.setCustomValidity('');
      formNameInput.style.outline = '';
    }
  });

  // Тестим ввод телефона
  formTelInput.addEventListener('input', () => {
    const telValue = formTelInput.value; // Значение поля телефона

    // Проверяем паттерн
    if (!telPattern.test(telValue)) {
      formTelInput.setCustomValidity('Номер телефона может содержать только числа');
      formTelInput.style.outline = '2px solid #CC0000';
    } else {
      formTelInput.setCustomValidity('');
      formTelInput.style.outline = '';
    }
  });

  // Тестим почту
  formEmailInput.addEventListener('focusout', () => {
    const emailValue = formEmailInput.value; // Значение поля почты

    // Проверяем валидность
    if (!emailPattern.test(emailValue)) {
      formEmailInput.setCustomValidity('Введите почту в формате user@domain');
      formEmailInput.style.outline = '2px solid #CC0000';
    } else {
      formEmailInput.setCustomValidity('');
      formEmailInput.style.outline = '';
    }
  });
};

export {initFormValidate, formBooking, formNameInput, formTelInput, formEmailInput};
