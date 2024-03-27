// удаление ведущих нулей и ограничение от 0 до 100
export function validateInput(value) {
  value = String(value).replace(/^0+/g, '');
  if (value === '') {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  } else if (value < 0) {
    value = 0;
  }
  return value;
}
