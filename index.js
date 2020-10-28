var FIRST = 1438787025000
var INCREMENT = 120000
var time = FIRST

module.exports = function timestamp() {
  var returnable = time
  time += INCREMENT
  return returnable
}
