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

const app = {
    title: 'This is my App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm()
    }
}

const empty = () => {
    app.options = [];
    renderForm()
}


const user = {
    name: 'Christina',
    age: 25,
    location: 'Novi'
}

const userName = 'Cole';
const userAge = 25;
const userLocation = 'Austin'



const appRoot = document.getElementById('app');




const renderForm = () => {
    const template = (
        <div>
            <h1>Form</h1>
            <p>Fill in data below</p>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
            <button onClick={empty}>Empty options</button>
        </div>
    );

    ReactDOM.render(template, appRoot)
}


renderForm()