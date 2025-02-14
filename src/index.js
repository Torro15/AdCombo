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

import { Swiper, SwiperSlide } from 'swiper'; // Импортируем Swiper и SwiperSlide
import 'swiper/swiper-bundle.css'; // Подключаем стили Swiper
import { Pagination, Navigation } from 'swiper'; // Подключаем модули Swiper

// Инициализация Swiper с модулями

const swiper = new Swiper('.offer__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
