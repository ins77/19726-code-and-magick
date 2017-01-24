'use strict';

var COLOR_BLACK_SHADOW = 'rgba(0, 0, 0, 0.7)';
var COLOR_WHITE = 'rgba(255, 255, 255, 1)';
var COLOR_BLACK = 'rgba(0, 0, 0, 1)';
var COLOR_RED = 'rgba(255, 0, 0, 1)';

var FONT_MONO = '16px PT Mono';

var OFFSET = 10;

var HIST_WIDTH = 40;
var HIST_HEIGHT_MAX = 150;
var HIST_X = 155;
var HIST_COLUMN_INDENT = 90;

var NAME_YOU = 'Вы';

var getRandomRange = function (min, max, precision) {
  var randNum = Math.random() * (max - min) + min;
  if (typeof precision === 'undefined') {
    return randNum;
  }
  return +randNum.toFixed(precision);
};

var drawCloud = function (ctx, x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + OFFSET, y + height / 2);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width / 2, y + height - OFFSET);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width - OFFSET, y + height / 2);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width / 2, y + OFFSET);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fill();
};

var renderHistInfo = function (ctx, names, times, max) {
  for (var i = 0; i < times.length; i++) {
    if (times[i] === max) {
      ctx.fillText('Ура, ' + names[i] + ' победитель!', 120, 40);
      ctx.fillText('Список результатов:', 120, 60);
      break;
    }
  }
};

var renderHist = function (ctx, names, times, max) {
  var histStep = HIST_HEIGHT_MAX / max;

  times.forEach(function (time, i) {
    var name = names[i];
    var histRealHeight = histStep * time;

    // вывод времени
    ctx.fillText(time.toFixed(0), HIST_X + HIST_COLUMN_INDENT * i, 90 + HIST_HEIGHT_MAX - histRealHeight);

    if (name === NAME_YOU) {
      ctx.fillStyle = COLOR_RED;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomRange(0.1, 1, 1) + ')';
    }

    // отрисовка гистограммы. (Начало координат канваса в верхней левой точке).
    // По оси X - расстояние от левого края канваса до левого края столбца гистограммы.
    // По оси Y - перемещаем гистограмму вниз на 100px + максимальная высота столбца - фактическая высота столбца.
    ctx.fillRect(HIST_X + HIST_COLUMN_INDENT * i, 100 + HIST_HEIGHT_MAX - histRealHeight, HIST_WIDTH, histRealHeight);

    // вывод имени участника
    // По оси X - двигаем имя вправо под соответствующий столбец гистограммы
    // По оси Y - ставим имя на 25px ниже столбца гистограммы
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(name, HIST_X + HIST_COLUMN_INDENT * i, 115 + HIST_HEIGHT_MAX);
  });
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = COLOR_BLACK_SHADOW;
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = COLOR_WHITE;
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = COLOR_BLACK;
  ctx.font = FONT_MONO;

  var max = Math.max.apply(null, times);

  renderHistInfo(ctx, names, times, max);

  renderHist(ctx, names, times, max);
};
