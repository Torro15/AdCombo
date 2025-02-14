import './styles/main.scss';


// Функция для обновления таймера
function updateTimer() {
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
  
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
  
    // Уменьшаем секунды
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59; // Сброс секунд
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59; // Сброс минут
        if (hours > 0) {
          hours--;
        } else {
          // Таймер достиг 00:00:00, перезапускаем
          hours = 0;
          minutes = 10;
          seconds = 0;
        }
      }
    }
  
    // Обновляем значения на странице
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }
  
  // Запуск таймера каждую секунду
  setInterval(updateTimer, 1000);

  document.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    parallaxElements.forEach((element) => {
        // Параллакс-эффект
        const speed = parseFloat(element.getAttribute("data-speed")) || 0.5;
        const offsetY = window.scrollY * speed;

        // Вращение
        const rotationSpeed = parseFloat(element.getAttribute("data-rotation-speed")) || 0.1;
        const rotation = window.scrollY * rotationSpeed;

        // Применяем трансформации
        element.style.transform = `translateY(${offsetY}px) rotate(${rotation}deg)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burgerMenu');
  const sideMenu = document.getElementById('sideMenu');

  burger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    burger.classList.toggle('active');
  });
});

// Импорт Swiper и его стилей
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Инициализация Swiper
const swiper = new Swiper('.offer__slider', {
  loop: true, // Бесконечный слайдер
  slidesPerView: 1, // Количество видимых слайдов
  spaceBetween: 20, // Расстояние между слайдами
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Вперед"
    prevEl: '.swiper-button-prev', // Кнопка "Назад"
  },
  pagination: {
    el: '.swiper-pagination', // Указываем контейнер для пагинации
    clickable: true, // Делаем точки кликабельными
    type: 'bullets', // Тип пагинации
    bulletClass: 'swiper-pagination-bullet', // Класс для точек
    bulletActiveClass: 'swiper-pagination-bullet-active', // Класс для активной точки
  },
});


initSwiper();

// Инициализация Swiper при изменении размера окна
window.addEventListener('resize', initSwiper);


