var FIRST = 1438787025000;
var INCREMENT = 120000;
var time = FIRST;

function timestamp() {
  var returnable = time;
  time += INCREMENT;
  return returnable;
}

timestamp.reset = function reset(first) {
  time = first || FIRST;
};

module.exports = timestamp;
