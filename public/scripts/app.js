"use strict";

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
var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : Anonymous), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
