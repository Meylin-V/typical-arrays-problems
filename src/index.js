
exports.min = function min (array) {
  let mint = Infinity;
  if (typeof array === 'undefined' || array.length == 0) {return 0}
  else {
  for (let i = 0; i < array.length; i++) {
      if (array[i] < mint) {
          mint = array[i]
      }
  }
  return mint;}
}

exports.max = function max (array) {
  let maxt = -Infinity;
  if (typeof array === 'undefined' || array.length == 0) {
      return 0}
  else {
  for (let i = 0; i < array.length; i++) {
      if (array[i] > maxt) {
          maxt = array[i]
      }
  }
  return maxt;}
}

exports.avg = function avg (array) {
  let sum = 0;
  if (typeof array === 'undefined' || array.length == 0) {return 0}
  else {
  for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
      }
  let avgt = sum / array.length
  return avgt;}
}
