'use strict';

window.getRandomRange = function(min, max) {
  return (Math.random() * (max - min) + min);
};

window.drawCloud = function(ctx, x, y, width, height) {
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

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var max = 0;

  times.forEach(function(time) {
    if (time > max) {
      max = time;
    }
  });

  var histHeight = 150;
  var histLeft = 155;
  var step = histHeight / max;
  var indent = 90;

  times.forEach(function(time, i) {
    var name = names[i];
    var height = step * time;

    ctx.fillText(time.toFixed(0), histLeft + indent * i, 90 + histHeight - height);

    if (time === max) {
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText('Ура, ' + name + ' победитель!', 120, 40);
      ctx.fillText('Список результатов:', 120, 60);
    }

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomRange(0.1, 1.1).toFixed(1) + ')';
    }

    ctx.fillRect(histLeft + indent * i, 100 + histHeight - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histLeft + indent * i, 95 + histHeight + 20);
  });
};
