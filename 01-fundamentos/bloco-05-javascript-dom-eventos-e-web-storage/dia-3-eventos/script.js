function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criandoDiasDezembro() {
  let decemberDays = document.querySelector('#days');
  // let tagUl = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {

    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      decemberDays.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      decemberDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      decemberDays.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      decemberDays.appendChild(dayItem);
    }

  }

}
criandoDiasDezembro();

//2
function criandoBotaoFeriados(paramButton) {

  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonId = 'btn-holiday';


  button.innerHTML = paramButton;
  button.id = buttonId;

  buttonContainer.appendChild(button);

}
criandoBotaoFeriados('Feriados');

//3
function buttonHolidayColor() {
  let getButtonHoliday = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor1 = 'rgb(238,238,238)';
  let backgroundColor2 = 'rgb(132, 169, 140)';

  getButtonHoliday.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === backgroundColor2) {
        getHolidays[index].style.backgroundColor = backgroundColor1;
      } else {
        getHolidays[index].style.backgroundColor = backgroundColor2;
      }
    }
  });
}
buttonHolidayColor();

//4
function createFridayButton (paramFridayButton) {
  let buttonContainer = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  let fridayButtonId = 'btn-friday';

  fridayButton.innerHTML = paramFridayButton;
  fridayButton.id = fridayButtonId;

  buttonContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

//5
