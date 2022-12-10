

let a = [6, 8, 7, 9, 5];

function average(arr){

    if(arr.length === 0){
        return 0;
    }
        
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
 
console.log(average(a));
