"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', options);
  var arrTimer = document.querySelectorAll('.timer');

  for (var i = 0; i < arrTimer.length; i++) {
    timer(arrTimer[i]);
  }
});

function timer(timer) {
  // const str = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
  // console.log(str);
  var arrMount = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']; // сегодняшняя дата

  var date = new Date(); // конечная дата

  var deadline = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 19 - 3, 0, 0, 0));
  console.log(deadline); // id таймера

  var timerId = null; // добавление ведущего нуля

  function leadingZero(number) {
    return number = number < 10 ? '0' + number : number;
  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов


  function countdownTimer() {
    var diff = deadline.getTime() - new Date().getTime();

    if (diff <= 0) {
      clearInterval(timerId);
    } // console.log(new Date());


    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $hours.textContent = leadingZero(hours);
    $minutes.textContent = leadingZero(minutes);
    $seconds.textContent = leadingZero(seconds); // добавить условия для вывода

    if (date.getDate() == deadline.getDate() && date.getMonth() == deadline.getMonth()) {
      $timerEndDate.textContent = 'сегодня в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes()) + ' по МСК';
    } else if (deadline.getDate() - date.getDate() == 1 && date.getMonth() == deadline.getMonth()) {
      $timerEndDate.textContent = 'завтра в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes()) + ' по МСК';
    } else {
      $timerEndDate.textContent = deadline.getDate() + ' ' + arrMount[deadline.getMonth()] + ' в ' + leadingZero(deadline.getHours()) + ':' + leadingZero(deadline.getMinutes()) + ' по МСК';
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