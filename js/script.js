/*=================== Variables ===================*/
const billInput = document.querySelector('.billInput');
const peopleInput = document.querySelector('.numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');
const tips = document.querySelectorAll('.tip');
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");

/*=================== Event Listeners ===================*/

billInput.addEventListener('input', billInputFun);
peopleInput.addEventListener('input', peopleInputFun);
tips.forEach(function (val) {
  //The forEach() method calls a function for each element in an array
  // Is not executed for empty arrays
  val.addEventListener("click", handleClick);
})
tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset);

/*=================== Setting Default Values ===================*/

billInput.value = 0.0;
peopleInput.value = 1;
tipPerPerson.innerText = `$${0.0.toFixed(2)}`;
totalPerPerson.innerText = "$" + 0.0.toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipPercent = 0.15;

/*=================== Functions ===================*/

function billInputFun() {
  billValue = parseFloat(billInput.value);  //takes string argument, returns first number as floating point number
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value); //takes string argument, returns first number as floating point number
  calculateTip();
}

function tipInputFun() {
  tipPercent = parseFloat(tipCustom.value / 100);

  tips.forEach(function (val) {
    val.classList.remove("active-tip");
  });
  calculateTip();
}


function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerText == val.innerText) {
      val.classList.add("active-tip");
      tipPercent = parseFloat(val.innerText) / 100;
    }
  })
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipPercent) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerText = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerText = "$" + total.toFixed(2);
  }
}

function reset() {
  billInput.value = 0.0;
  billInputFun();
  peopleInput.value = 1;
  peopleInputFun();
  tipCustom.value = "";
}