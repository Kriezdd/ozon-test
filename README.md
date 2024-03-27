## Ozon-test (Прототип блока Progress)

#### gh-pages: https://kriezdd.github.io/ozon-test/

### Технологии:
<p>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="js-logo" width="30"/>
   <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="html-logo" width="30"/>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css-logo" width="30"/>
</p>

### Задача
Разработать прототип блока Progress для использования в мобильных web-приложениях.Основное предназначение блока отображать процесс выполнения процессов и их прогресс выполнения.

### Реализация:
Класс ProgressCircle для создания и управления прогресс-блоком в виде круга.
 * ProgressCircle() constructor - возвращает новый экземпляр ProgressCircle.
 * @class ProgressCircle
 * @param {string} parentElementId - ID родительского элемента, к которому будет прикреплен прогресс-блок. (обязательный параметр)
 * @param {number} [value=0] - Начальное значение прогресса (от 1 до 100). (необязательный параметр)
 * @param {boolean} [isAnimated=false] - Флаг, указывающий, должен ли прогресс-бар анимироваться. (необязательный параметр)
 * @param {boolean} [isHidden=false] - Флаг, указывающий, должен ли прогресс-бар быть скрыт. (необязательный параметр)

### Макеты:
<img src="https://i.ibb.co/9bLzD3s/2024-03-27-123756.png" alt="maket" width="600"/>
