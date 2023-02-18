var arr = ["one", "two", "three", "four", "five", "six", "seven"];
var countElementsArr = arr.length;
console.log(countElementsArr);
arr.forEach(function(item, index, array) {
  console.log(item, index);
});