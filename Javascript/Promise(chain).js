
// var promise = new Promise(

//     function(resolve, reject){


//         resolve();
//     }
// )

// promise
//     .then(function(){
//         return new Promise(function(resolve){
//             setTimeout(resolve,3000);
//         })
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//         return 3;
//     })
//     .then(function(data){
//         console.log(data);
        
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log('Done!');
//     })
// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve,ms);
//     });
// }
// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);

//     });
// function hell(value, cb) {
//     console.log(value);
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell :<
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         console.log(value );
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value);
//         return value + 1;

//     })
//     .then(function (value) {
//         console.log(value);
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });