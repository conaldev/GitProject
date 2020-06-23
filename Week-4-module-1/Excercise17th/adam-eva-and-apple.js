function Apple() {
    this.weight = 10;
    this.decrease = function () {
        this.weight--;
    }
    this.isEmpty = function () {
        if(this.weight<=0) return true;
        else return false;
    }
    this.getWeight = function () {
        return this.weight;
    }
}
function Human() {
    this.name = "";
    this.gender = "";
    this.weight = 0;
    this.isMale = function () {        
        if(this.name === "Adam") return true;
        else return  false;
    }//conaldev
    this.setGender = function () {
        if(this.isMale()) this.gender = "Male";
        else this.gender = "Female";
    }
    this.checkApple = function (Apple) {
        if(!Apple.isEmpty()) return  true;
        else return false;
    }//conaldev
    this.eat = function (Apple) {
        Apple.decrease();
        this.weight++;
    }
    this.say = function(string){
        console.log(string)
    }
    this.getName =function () {
        return this.name;
    }
    this.setName = function (string) {
        this.name=string;
    }//conaldev
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function(weight){
        this.weight =weight;
    }
}
let apple = new Apple();
let Adam = new Human();
Adam.setName("Adam");
Adam.setGender();
Adam.setWeight(60);
console.log("Tên: "+Adam.getName()+" có cân nặng là: "+Adam.getWeight()+" giới tính là: " + Adam.gender);
let Eva = new Human();
Eva.setName("Eva");
Eva.setGender();
Eva.setWeight(40)
console.log("Tên: "+Eva.getName()+" có cân nặng là: "+Eva.getWeight()+" giới tính là: " + Eva.gender);
console.log("Ăn táo thôi :D "); //conaldev
let turnAdam = true;
while (Adam.checkApple(apple)) {
    if(turnAdam === true){
        turnAdam = false;
        Adam.eat(apple);
        console.log("Adam eat apple. Adam nặng "+Adam.getWeight() + " táo nặng "+apple.weight)
    }
    else {
        turnAdam=true;
        Eva.eat(apple);
        console.log("Eva eat apple. Eva nặng "+Eva.getWeight() + " táo nặng "+apple.weight)
    }
}