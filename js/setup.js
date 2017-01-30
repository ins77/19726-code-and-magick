'use strict';

var ElementSetup = document.querySelector('.setup');
var ElementSetupOpen = document.querySelector('.setup-open');
var ElementSetupClose = ElementSetup.querySelector('.setup-close');
var ElementSetupUserName = ElementSetup.querySelector('.setup-user-name');
var ElementSetupFireball = ElementSetup.querySelector('.setup-fireball-wrap');

var ElementWizard = document.querySelector('#wizard');
var ElementWizardCoat = ElementWizard.querySelector('#wizard-coat');
var ElementWizardEyes = ElementWizard.querySelector('#wizard-eyes');

var INVISIBLE = 'invisible';

var COLORS_COAT = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var COLORS_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var COLORS_FIREBALL = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

function setInputsAttributes() {
  ElementSetupUserName.required = true;
  ElementSetupUserName.maxLength = 50;
}

// создаем счетчик от 0 до длины массива, начальный индекс будет - 1. При каждом вызове счетчика, index увеличивается на 1, либо устанавливается в 0.
function getColorIndex(colorsArray) {
  var index = 0;
  return function () {
    index = ++index % colorsArray.length;
    return index;
  };
}

// создаем отдельные счетчики для разных массивов
var colorsFireballIndex = getColorIndex(COLORS_FIREBALL);
var colorsCoatIndex = getColorIndex(COLORS_COAT);
var colorsEyesIndex = getColorIndex(COLORS_EYES);

function handlerSetupFireball() {
  ElementSetupFireball.style.background = COLORS_FIREBALL[colorsFireballIndex()];
}

function handlerWizardCoat() {
  ElementWizardCoat.style.fill = COLORS_COAT[colorsCoatIndex()];
}

function handlerWizardEyes() {
  ElementWizardEyes.style.fill = COLORS_EYES[colorsEyesIndex()];
}

function handlerSetupOpen() {
  ElementSetup.classList.remove(INVISIBLE);
}

function handlerSetupClose() {
  ElementSetup.classList.add(INVISIBLE);
}

setInputsAttributes();

ElementSetupOpen.addEventListener('click', handlerSetupOpen);
ElementSetupClose.addEventListener('click', handlerSetupClose);
ElementSetupFireball.addEventListener('click', handlerSetupFireball);
ElementWizardCoat.addEventListener('click', handlerWizardCoat);
ElementWizardEyes.addEventListener('click', handlerWizardEyes);
