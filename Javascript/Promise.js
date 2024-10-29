
// 1. Pendding. //chờ
// 2. fulfilled // success
// 3. Rejected // fail 
var promise = new Promise (
    //Excutor
    function (resolve, reject) {
        //Logic
        //resolve()
        //reject()
        resolve();
        reject();
    }


);

promise 
    .then(function(){
        console.log('Successully')
    })
    .catch(function(){
        console.log('Failure')
    })
    .finally(function(){
        console.log('Finally')
    });