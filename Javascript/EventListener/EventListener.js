
// 1 xu ly nhieu viec khi 1 even xay ra
//2. lang nghe va huy bo lang nghe
var btn = document.getElementById('btn');

// btn.onclick = function(){

//     console.log('Viec 1');

//     console.log('Viec 2 ');


//     alert('Viec 3')
// }

// setTimeout(function(){

//     btn.onclick = function(){}
// },3000)
function viec1(){
    console.log('Viec 1');

}
function viec2(){
    console.log('Viec 2');

}

btn.addEventListener('click',viec1);
btn.addEventListener('click',viec2);
setTimeout(function(){
    btn.removeEventListener('click',viec1);
},3000);