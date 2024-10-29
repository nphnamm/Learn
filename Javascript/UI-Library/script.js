// import html from './core.js'
// const cars = ['BMW', 'Porsche','Mercedes']

// const isSuccess = true;

// const output = html`
//     <h1>${false}</h1>
//     <ul> 
//     ${cars.map(car => `<li>${car}</li>`)}
//     </ul>
// `
// console.log(output);

import {attach} from  './store.js'
import App from './component/App.js'


// console.log(document.getElementById('root'));
attach(App, document.getElementById('root'));
