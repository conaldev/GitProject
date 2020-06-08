
let count=0;
let array=[1,3,5,7,9,11,13,15,17,19];
let newarr= [];
for(let num of array){
    if(array[num]>=10){
        ++count;
        newarr.push(array[num]);
    }
}
console.log(count,newarr);

