'use strict';

var classes = {
  INVISIBLE: 'invisible'
};

var colors = {
  WIZARD_COAT: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  WIZARD_EYES: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  WIZARD_FIREBALL: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupUserNameElement = setupElement.querySelector('.setup-user-name');
var setupFireballElement = setupElement.querySelector('.setup-fireball-wrap');

var wizardElement = document.querySelector('#wizard');
var wizardCoatElement = wizardElement.querySelector('#wizard-coat');
var wizardEyesElement = wizardElement.querySelector('#wizard-eyes');

// создаем отдельные счетчики для разных массивов
var colorsFireballIndex = getColorIndex(colors.WIZARD_FIREBALL);
var colorsCoatIndex = getColorIndex(colors.WIZARD_COAT);
var colorsEyesIndex = getColorIndex(colors.WIZARD_EYES);

function setInputsAttributes() {
  setupUserNameElement.required = true;
  setupUserNameElement.maxLength = 50;
}

// создаем счетчик от 0 до длины массива, начальный индекс будет - 1, т.к. цвет с индексом 0 задан по умолчанию. При каждом вызове счетчика, index увеличивается на 1, либо устанавливается в 0.
function getColorIndex(colorsArray) {
  var index = 0;
  return function () {
    index = ++index % colorsArray.length;
    return index;
  };
}

function handlerSetupFireball() {
  setupFireballElement.style.background = colors.WIZARD_FIREBALL[colorsFireballIndex()];
}

function handlerWizardCoat() {
  wizardCoatElement.style.fill = colors.WIZARD_COAT[colorsCoatIndex()];
}

function handlerWizardEyes() {
  wizardEyesElement.style.fill = colors.WIZARD_EYES[colorsEyesIndex()];
}

function handlerSetupOpen() {
  setupFireballElement.addEventListener('click', handlerSetupFireball);
  wizardCoatElement.addEventListener('click', handlerWizardCoat);
  wizardEyesElement.addEventListener('click', handlerWizardEyes);
  setupElement.classList.remove(classes.INVISIBLE);
}

function handlerSetupClose() {
  setupFireballElement.removeEventListener('click', handlerSetupFireball);
  wizardCoatElement.removeEventListener('click', handlerWizardCoat);
  wizardEyesElement.removeEventListener('click', handlerWizardEyes);
  setupElement.classList.add(classes.INVISIBLE);
}

setInputsAttributes();

setupOpenElement.addEventListener('click', handlerSetupOpen);
setupCloseElement.addEventListener('click', handlerSetupClose);
