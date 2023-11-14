function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]')
}

refs.startButton.addEventListener('click', startColorChange)
refs.stopButton.addEventListener('click', stopColorChange)

refs.stopButton.disabled = true;
let colorChangeInterval;

function startColorChange() {
    // Роблю кнопку "Start" неактивною та запускаю змiну кольору
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
    colorChangeInterval = setInterval(changeBackgroundColor, 1000);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function stopColorChange() {
    // Зупиняю змiну кольору та роблю кнопку "Start" активною
    clearInterval(colorChangeInterval);
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
}

