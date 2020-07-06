"use strict";

var _this = void 0;

console.log('app.js is running');
var title = 'Welcome to Texas!';
var subtitle = 'We are happy to have you.';
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, subtitle));
var user = {
  name: 'Christina',
  age: 25,
  location: 'Novi'
};
var userName = 'Cole';
var userAge = 25;
var userLocation = 'Austin';
var count = 0;

var addOne = function addOne() {
  _this.count++;
};

var subOne = function subOne() {
  _this.count--;
};

var reset = function reset() {
  count = 0;
};

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: subOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "-1"));
console.log(count); //ARROW FUNCTION PRACTICE
// const multiplier = {
//     numbers: [1, 2, 3, 4, 5],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((num) => num * this.multiplyBy)
//     }
// }
// console.log(multiplier.multiply())

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
