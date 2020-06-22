
let s="06:40:03AM";

let hh=+s.slice(0,2);
let mm=s.slice(3,5);
let ss=s.slice(6,8);
let time=s.slice(-2);
if(time=="AM") {
    if(hh==12) hh="00";
    console.log(hh+ ":"+mm+":"+ss) ;
}
else {
    if(hh<12) hh+=12;
    console.log(hh +":"+mm+":"+ss);
}