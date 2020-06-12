let arr=[5,6,2,7,3,9,99,5,33,51];
let max=-99999;
let index=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max,max/arr.length);