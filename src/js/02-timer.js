import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    
    if (selectedDate > new Date()) {
      document.querySelector('button').disabled = false;
    } else {
      window.alert("Please choose a date in the future");
      document.querySelector('button').disabled = true;
    }
  },
};

const datePicker = flatpickr("#datetime-picker", options);

document.querySelector('button').addEventListener('click', startTimer);

let countdownInterval;

function startTimer() {
  const selectedDate = datePicker.selectedDates[0];
  const currentDate = new Date();
  let timeDifference = selectedDate - currentDate;

  function updateTimer() {
    const time = convertMs(timeDifference);

    document.querySelector('[data-days]').textContent = addLeadingZero(time.days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(time.hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(time.minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(time.seconds);

    timeDifference -= 1000;
      
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.querySelector('button').disabled = true;
    }
  }

  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}
