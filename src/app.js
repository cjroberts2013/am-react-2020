console.log('app.js is running')

var title = 'Welcome to Texas!'
var subtitle = 'We are happy to have you.'

var template = (
    <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
);

var user = {
    name: 'Christina',
    age: 25,
    location: 'Novi'
}

var userName = 'Cole';
var userAge = 25;
var userLocation = 'Austin'

var template2 = (
    <div>
        <h1>{user.name ? user.name : Anonymous}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)