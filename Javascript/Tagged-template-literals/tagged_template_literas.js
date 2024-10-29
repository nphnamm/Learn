function highlight([first,...strings],...values){
    return values.reduce((acc,curr) => [...acc,`<span>${curr}</span>`,strings.shift()],
    [first]
    ).join('');
}


var brand = 'F8';
var course = 'Javascript'

const html = highlight`Learn Programing ${course} at ${brand} !`;


console.log(html);

var test = document.querySelector('.box')
test.innerHTML(html);
