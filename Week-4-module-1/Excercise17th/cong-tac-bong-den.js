function ElectricLamp() {
    this.status = false;
    this.turnOn = function () {
        if (!this.status)
            this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }//conaldev
}
function SwitchButton() {
    this.lamp = "";
    this.connectToLamp = function (ElectricLamp) {
        this.lamp = ElectricLamp;
    }
    this.switchOn = function () {
        this.lamp.turnOn();
    }    
    this.switchOff = function () {
        this.lamp.turnOff();
    }
}

let button = new SwitchButton();
let BedroomLamp = new ElectricLamp();
button.connectToLamp(BedroomLamp);
for(let i =1 ;i<=10;i++){
    button.switchOn();
    console.log(BedroomLamp.status);
    button.switchOff();
    console.log(BedroomLamp.status);
}
