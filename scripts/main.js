"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', options);
  var arrTimer = document.querySelectorAll('.timer');

  for (var i = 0; i < arrTimer.length; i++) {
    timer(arrTimer[i]);
  }
});

function timer(timer) {
  // конечная дата
  var deadline = new Date(2022, 9, 5, 19, 0, 0, 0);
  var arrMount = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']; // сегодняшняя дата

  var date = new Date(); // id таймера

  var timerId = null; // добавление ведущего нуля

  function leadingZero(number) {
    return number = number < 10 ? '0' + number : number;
  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов


  function countdownTimer() {
    var diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;

    if (deadline.getDate() - date.getDate() >= 1) {
      hours += (deadline.getDate() - date.getDate()) * 24;
    }

    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $hours.textContent = leadingZero(hours);
    $minutes.textContent = leadingZero(minutes);
    $seconds.textContent = leadingZero(seconds); // добавить условия для вывода

    if (date.getDate() == deadline.getDate()) {
      $timerEndDate.textContent = 'сегодня в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes());
    } else if (deadline.getDate() - date.getDate() == 1) {
      $timerEndDate.textContent = 'завтра в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes());
    } else {
      $timerEndDate.textContent = deadline.getDate() + ' ' + arrMount[deadline.getMonth()] + ' в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes());
    }
  } // получаем элементы, содержащие компоненты даты


  var $hours = timer.querySelector('.timer__hours');
  var $minutes = timer.querySelector('.timer__minutes');
  var $seconds = timer.querySelector('.timer__seconds');
  var $timerEndDate = timer.querySelector('.timer__end-date'); // вызываем функцию countdownTimer

  countdownTimer(); // вызываем функцию countdownTimer каждую секунду

  timerId = setInterval(countdownTimer, 1000); // $timerEndDate.textContent = deadline
}

var options = {
  speed: 400,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: true
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false
    }
  }
};