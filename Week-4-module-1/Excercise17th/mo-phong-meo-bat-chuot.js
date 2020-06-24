function Rat(name,weight,speed,status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.say = function () {
          console.log("chít, chít");
    }
}
function Cat(name,weight,maxSpeed) {
    this.name = name;
    this.weight =weight;
    this.maxSpeed = maxSpeed;
    this.say = function () {
        console.log("meo meo");
    }
    this.catchMouse = function (mouse) {
        if(this.maxSpeed>mouse.speed) {
            console.log("Bắt được chuột rồi!");
            return true;
        }
        else {
            console.log("Không bắt được :(");
            return  false;
        }
    }
    this.eatMouse = function (mouse) {
        if(mouse.status && this.catchMouse(mouse)){
            this.weight+=mouse.weight;
        }
    }
}
let Jerry = new Rat("Jerry",1,10,true);
let Tom = new Cat("Tom",5,20);
console.log("The weight of Tom before: "+Tom.weight);
Tom.catchMouse(Jerry);
Tom.eatMouse(Jerry);
console.log("The weight of Tom after: "+Tom.weight);