'use strict';

window.getRandomRange = function (min, max, precision) {
  var randNum = Math.random() * (max - min) + min;
  if (typeof precision === 'undefined') {
    return randNum;
  }
  return +randNum.toFixed(precision);
};

window.drawCloud = function (ctx, x, y, width, height) {
  var offset = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + offset, y + height / 2);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width / 2, y + height - offset);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width - offset, y + height / 2);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width / 2, y + offset);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  window.drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  window.drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var max = Math.max.apply(null, times);

  var histOverallHeight = 150;
  var histLeft = 155;
  var histStep = histOverallHeight / max;
  var indent = 90;

  times.forEach(function (time, i) {
    var name = names[i];
    var histRealHeight = histStep * time;

    ctx.fillText(time.toFixed(0), histLeft + indent * i, 90 + histOverallHeight - histRealHeight);

    if (time === max) {
      ctx.fillText('Ура, ' + name + ' победитель!', 120, 40);
      ctx.fillText('Список результатов:', 120, 60);
    }

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + window.getRandomRange(0.1, 1, 1) + ')';
    }

    ctx.fillRect(histLeft + indent * i, 100 + histOverallHeight - histRealHeight, 40, histRealHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histLeft + indent * i, 95 + histOverallHeight + 20);
  });
};
