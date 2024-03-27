import ProgressCircle from './ProgressCircle/ProgressCircle.js';

// Инициализация прогресс-блока
const progressElement = new ProgressCircle('progress');

// Если есть входные данные, то обновим input элементы
if (progressElement.value || progressElement.isAnimated || progressElement.isHidden) {
  document.getElementById('value').value = progressElement.value;
  document.getElementById('animate').checked = progressElement.isAnimated;
  document.getElementById('hide').checked = progressElement.isHidden;
}

// Обработчики событий для элементов управления
document.getElementById('value').addEventListener('input', (event) => {
  progressElement.setValue(event.target.value);
  event.target.value = progressElement.value;
});

document.getElementById('animate').addEventListener('click', (event) => {
  if (!event.target.checked) {
    progressElement.stopAnimation();
  } else {
    progressElement.animate();
  }
});

document.getElementById('hide').addEventListener('click', (event) => {
  if (!event.target.checked) {
    progressElement.show();
  } else {
    progressElement.hide();
  }
});
