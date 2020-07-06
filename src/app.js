console.log('app.js is running')

var template = (
    <div>
        <h1>Hello I am CJ</h1>
        <p>This is a blank statement to fill up some space!!!</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)