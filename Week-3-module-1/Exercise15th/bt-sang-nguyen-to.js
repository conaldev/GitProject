const Num = 10000;
function primeNums(Num) {
    let check = [];
    for (let i=2;i<=Num;++i) {
        check[i] = true;
    }//ConalDev
    for (let i = 2; i*i <= Num; i++) {
        if (check[i] === true) {
          for (let j = i*i; j <= Num; j += i) {
            check[j] = false;
          }
        }
      }
    let arr = [];
    let index =0;
    for (let i=2;i<= Num;i++) {
        if(check[i]===true) {
            arr[index]=i;
            ++index;
        }
    }//MinhConal
    console.log(arr);
}
primeNums(Num);
//Sàng Nguyên tố