import {validateInput} from "../helpers/validateInput.js";

/**
 * Класс для создания и управления прогресс-блоком в виде круга.
 * ProgressCircle() constructor - возвращает новый экземпляр ProgressCircle.
 * @class ProgressCircle
 * @param {string} parentElementId - ID родительского элемента, к которому будет прикреплен прогресс-блок.
 * @param {number} [value=0] - Начальное значение прогресса (от 1 до 100).
 * @param {boolean} [isAnimated=false] - Флаг, указывающий, должен ли прогресс-бар анимироваться.
 * @param {boolean} [isHidden=false] - Флаг, указывающий, должен ли прогресс-бар быть скрыт.
 */
export default class ProgressCircle {
  /**
   * Создает новый экземпляр ProgressCircle.
   */
  constructor(parentElementId, value = 0, isAnimated = false, isHidden = false) {
    this.progressElement = document.createElement('div');
    this.progressElement.classList.add('progress-circle');

    try {
      this.parentElement = document.getElementById(parentElementId);
      this.parentElement.appendChild(this.progressElement);
    } catch (error) {
      if (parentElementId === '') {
        throw new Error("Parent element's id cannot be empty");
      } else if (!this.parentElement) {
        throw new Error("Parent element doesn't exist");
      }
    }

    // Initialize values
    [this.value, this.isAnimated, this.isHidden] = [value, isAnimated, isHidden];

    this.updateValue();
    this.updateAnimation();
    this.updateVisibility();
  }
  /**
   * Устанавливает новое значение прогресса.
   * @param {number} value - Новое значение прогресса (от 1 до 100).
   */
  setValue(value) {
    this.value = validateInput(value);
    this.updateValue();
  }

  /**
   * Запускает анимацию прогресс-блока.
   */
  animate() {
    this.isAnimated = true;
    this.updateAnimation();
  }

  /**
   * Останавливает анимацию прогресс-блока.
   */
  stopAnimation() {
    this.isAnimated = false;
    this.updateAnimation();
  }

  /**
   * Скрывает прогресс-блок.
   */
  hide() {
    this.isHidden = true;
    this.updateVisibility();
  }

  /**
   * Показывает прогресс-блок.
   */
  show() {
    this.isHidden = false;
    this.updateVisibility();
  }

  /**
   * Обновляет видимость прогресс-блока.
   */
  updateVisibility() {
    if (this.isHidden) {
      this.progressElement.style.opacity = '0';
    } else {
      this.progressElement.style.opacity = '1';
    }
  }

  /**
   * Обновляет анимацию прогресс-блока.
   */
  updateAnimation() {
    if (this.isAnimated) {
      this.progressElement.style.animation = '1.5s rotate linear infinite';
    } else {
      this.progressElement.style.animation = null;
    }
  }

  /**
   * Обновляет значение прогресса.
   */
  updateValue() {
    this.progressElement.style.setProperty('--percent', `${this.value}%`);
  }
}
