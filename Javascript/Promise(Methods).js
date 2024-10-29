

var promise = new Promise(
    function(resolve,reject){
        resolve('Success');
    }
);

var promise = Promise.resolve('Success!');

promise
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err',err);
    })

var promise1= new Promise(
        function(resolve){
            setTimeout(function(){
                resolve([1]);
            },2000);
        }
    
    )    
var promise2= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },5000);
    }

)
Promise.all([promise1, promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];
        console.log(result.concat(result2));
    })