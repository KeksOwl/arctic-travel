import {formBooking, formNameInput, formTelInput, formEmailInput} from './form-validity';

const initLocalStorage = () => {
  // Переменные локальных данных
  let isStorageSupport = true;
  let storageName = '';
  let storageTel = '';
  let storageEmail = '';

  // Проверяем работоспособность локального храналища в браузере
  try {
    storageName = localStorage.getItem('name');
    storageTel = localStorage.getItem('tel');
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  // Если в локальном хранилище есть имя — автоматически вписываем его
  if (storageName) {
    formNameInput.value = storageName;
  }

  // Если в локальном хранилище есть номер телефона — автоматически вписываем его
  if (storageTel) {
    formTelInput.value = storageTel;
  }

  // Если в локальном хранилище есть почта — автоматически вписываем его
  if (storageEmail) {
    formEmailInput.value = storageEmail;
  }

  // Записываем введённые значения в локальное хранилище
  formBooking.addEventListener('submit', () => {
    if (isStorageSupport && formNameInput.value && formTelInput.value && formEmailInput.value) {
      localStorage.setItem('name', formNameInput.value);
      localStorage.setItem('tel', formTelInput.value);
      localStorage.setItem('email', formEmailInput.value);
    }
  });
};

export {initLocalStorage};
