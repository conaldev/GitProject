function Mobile(phoneName,battery) {
    this.name = phoneName;
    this.inboxMessages = [];
    this.sentMessages = [];
    this.draftMessage = "";
    this.battery = battery;
    this.turnOn = function () {
        if (!this.status && this.battery > 0) {
            this.status = true;
            this.descreaseBattery();
            console.log(this.name + ' was turned on.');
        }
    }
    this.turnOff = function () {
        if (this.status && this.battery > 0) {
            this.status = false;
            this.descreaseBattery();
            console.log(this.name + ' was turn off.');
        }
    }
    this.getStatus = function () {
        this.descreaseBattery();
        return this.status;
    }
    this.chargeBattery = function () {
        console.log(this.name + ' was charged.');
        this.battery++;
    }
    this.getBatteryInfo = function () {
        if (this.status && this.battery > 0) {
            return this.battery;
            this.descreaseBattery();
        }
    }
    this.sendMessage = function (phoneName, messageContent) {
        if (this.status && this.battery > 0) {
            if (phoneName.status && phoneName.battery > 0){
                phoneName.receiveMessage(messageContent);
                this.descreaseBattery();
                console.log('The message was sent to ' + phoneName.name);
                this.saveSentMessage(messageContent);
            }else{
                console.log('Message was not sent. Please check status or battery of ' + phoneName.name);
            }
        }
    }
    this.saveDraftMessage = function (messageContent,) {
        if (this.status && this.battery > 0) {
            this.draftMessage = messageContent;
            console.log('Draft message was save');
            this.descreaseBattery();
        }
    }
    this.saveSentMessage = function (messageContent) {
        if (this.status && this.battery > 0) {
            this.sentMessages.push(messageContent);
            console.log('Sent message was saved');
            this.descreaseBattery();
        }
    }
    this.getInboxMessages = function () {
        if (this.status && this.battery > 0) {
            return this.inboxMessages;
            this.descreaseBattery();
        }
    }
    this.receiveMessage = function (messageContent) {
        if (this.status && this.battery > 0) {
            this.inboxMessages.push(messageContent);
            this.descreaseBattery();
    }
    }
    this.descreaseBattery = function () {
        if (this.battery > 0) {
            this.battery--;
        }
    }
    this.getSentMessages = function () {
        if (this.status && this.battery > 0) {
            this.descreaseBattery();
            return this.sentMessages;
        }
    }
}
let nokia = new Mobile('Nokia',70);
let iPhone = new Mobile('iPhone',80);
nokia.turnOn();
iPhone.turnOn();
nokia.sendMessage(iPhone, 'HELLO APPLE');
nokia.sendMessage(iPhone, 'Are you hear me?');
console.log('Nokia Sent Messages: ' + nokia.getSentMessages());
console.log('iPhone Inbox Messages: ' + iPhone.getInboxMessages());
console.log('Nokia battery: ' + nokia.getBatteryInfo());
console.log('iPhone battery: ' + iPhone.getBatteryInfo());
iPhone.turnOff();
console.log('Trang thai cua iPhone: ' + iPhone.getStatus());
nokia.sendMessage(iPhone,'Alo,alo???');
iPhone.turnOn();
iPhone.sendMessage(nokia,'Shut up');
console.log('iPhone Sent Messages: ' + iPhone.getSentMessages());
console.log('nokia Inbox Messages: ' + nokia.getInboxMessages());