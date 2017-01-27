'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');

var colorsCoatIndex = 1;
var colorsEyesIndex = 1;
var colorsFireballIndex = 1;

var colorsCoat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var colorsEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var colorsFireball = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupUserName.required = true;
setupUserName.maxLength = 50;

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

setupFireball.addEventListener('click', function (e) {
  e.currentTarget.style.background = colorsFireball[colorsFireballIndex++];
  colorsFireballIndex = colorsFireballIndex === colorsFireball.length ? 0 : colorsFireballIndex;
});

wizardCoat.addEventListener('click', function (e) {
  e.currentTarget.style.fill = colorsCoat[colorsCoatIndex++];
  colorsCoatIndex = colorsCoatIndex === colorsCoat.length ? 0 : colorsCoatIndex;
});

wizardEyes.addEventListener('click', function (e) {
  e.currentTarget.style.fill = colorsEyes[colorsEyesIndex++];
  colorsEyesIndex = colorsEyesIndex === colorsEyes.length ? 0 : colorsEyesIndex;
});
