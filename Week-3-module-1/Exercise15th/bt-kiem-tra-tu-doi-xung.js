

let str="roto";
let str2="redder"
let str3="osjfoeiwnbo"
function isPalindrome(stringInput,first,last) {
    if(first<last){
        if(stringInput[first]!=stringInput[last])
            return false;
        ++first;
        --last;
        return isPalindrome(stringInput,first,last);
    }
    else return true;
}
console.log(isPalindrome(str3,0,str3.length -1));