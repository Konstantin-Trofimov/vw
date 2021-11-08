//=================== служебные функции =====================

export async function getData (url) {
  const data = await fetch(url)
  const json = await data.json()
  return json
}

export function setProgressBar(bar, active, fill) {
  for (let i = 0; i < active; i++) {
    bar[i].style.fill = fill;
  }
}

export function progressLength(progressBar, data) {
  let currentValue;

  if (data > 100) {
      currentValue = progressBar.length;
  } else {
      currentValue = Math.round((progressBar.length / 100) * data);
  }

  return currentValue; 
} 

export const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;

export function numDataOutput(num) {
  let str = num.toString();
  let out;

  if (str.indexOf('.') !== -1) {
      str = num.toString().split('.');

      const intPart = str[0];
      const decimalPart = str[1];

      if (intPart.length <= 3) {
          out = intPart
      }
      else {
          out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
      }

      out += '.' + decimalPart;
  }
  else {
      if (str.length <= 3) {
          out = str;
      }
      else {
          out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
      }
  }    

  return out;
} 

export function setMonth(date, selector) {
    const array = date.split('.');
    const month = array[1]
    let str = ''

    switch (month) {
        case '01':
          str = 'январь'
          break;
        case '02':
          str = 'февраль'
          break;
        case '03':
          str = 'март'
          break;
        case '04':
          str = 'апрель'
          break;
        case '05':
          str = 'май'
          break;
        case '06':
          str = 'июнь'
          break;
        case '07':
          str = 'июль'
          break;
        case '08':
          str = 'август'
          break;
        case '09':
          str = 'сентябрь'
          break;
        case '10':
          str = 'октябрь'
          break;
        case '11':
          str = 'ноябрь'
          break;
        case '12':
          str = 'декабрь'
          break;
        default :   
          str = '';
          break;
    }

    insertToPage(selector, str)
}
