console.log('app.js is running')

const title = 'Welcome to Texas!'
const subtitle = 'We are happy to have you.'

const template = (
    <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
);

const user = {
    name: 'Christina',
    age: 25,
    location: 'Novi'
}

const userName = 'Cole';
const userAge = 25;
const userLocation = 'Austin'



let count = 0;
const addOne = () => {
    this.count++
}
const subOne = () => {
    this.count--
}
const reset = () => {
    count = 0
}

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subOne}>-1</button>
        <button onClick={reset}>-1</button>
    </div>
);
console.log(count)

//ARROW FUNCTION PRACTICE

// const multiplier = {
//     numbers: [1, 2, 3, 4, 5],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((num) => num * this.multiplyBy)
//     }
// }

// console.log(multiplier.multiply())



const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)

