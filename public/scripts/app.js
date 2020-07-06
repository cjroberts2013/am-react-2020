"use strict";

// console.log('app.js is running')
// const title = 'Welcome to Texas!'
// const subtitle = 'We are happy to have you.'
// const template = (
//     <div>
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//     </div>
// );
// const user = {
//     name: 'Christina',
//     age: 25,
//     location: 'Novi'
// }
// const userName = 'Cole';
// const userAge = 25;
// const userLocation = 'Austin'
// ARROW FUNCTION PRACTICE //
// const multiplier = {
//     numbers: [1, 2, 3, 4, 5],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((num) => num * this.multiplyBy)
//     }
// }
// console.log(multiplier.multiply())
// PRACTICE DATA BINDINGING //
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const subOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }
// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     console.log(count);
//     ReactDOM.render(template2, appRoot)
// };
// renderCounterApp();
var app = {
  title: 'This is my App',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderForm();
  }
};

var empty = function empty() {
  app.options = [];
  renderForm();
};

var user = {
  name: 'Christina',
  age: 25,
  location: 'Novi'
};
var userName = 'Cole';
var userAge = 25;
var userLocation = 'Austin';
var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Form"), /*#__PURE__*/React.createElement("p", null, "Fill in data below"), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")), /*#__PURE__*/React.createElement("button", {
    onClick: empty
  }, "Empty options"));
  ReactDOM.render(template, appRoot);
};

renderForm();
