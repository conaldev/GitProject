function Remote(code) {
    this.code = code;
    this.changeTiviChannel = function (tivi,channel) {
        tivi.currentChannel += channel;
    }
    this.changeTiviVolume = function (tivi,plus) {
        tivi.currentVolume += plus;
    }
    this.switchOnOff = function (tivi) {
        if(tivi.status) tivi.status=false
        else tivi.status=true;
    }
}
function Tivi(channel,volume,status) {
    this.currentChannel = channel;
    this.currentVolume = volume;
    this.status = status;
    this.changeVolume = function (changePlus) {
        if (changePlus) this.currentVolume++;
        else this.currentVolume--;
    }
    this.changeChannel = function (changeChannel) {
        this.currentChannel = changeChannel;
    }
}
let sony = new Tivi(1,5);
let myRemote = new Remote(1x4y);
sony.status = true;
sony.changeChannel(7);
myRemote.changeTiviChannel(sony,7);
sony.changeVolume(true);
sony.changeVolume(true);
myRemote.switchOnOff(sony);