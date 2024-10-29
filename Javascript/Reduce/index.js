


const numbers =[1,2,3,4,5];
Array.prototype.reduce2 = function(callback,result){
    let i =0;
    if(arguments.length<2){
        i=1;
        result =this[0];

    }
    for( ; i<this.length;i++){
            result = callback(result,this[i],i,this);
    }
    return result;
}
const result = numbers.reduce2((total,number) =>{
    return total + number;
})
console.log(result);