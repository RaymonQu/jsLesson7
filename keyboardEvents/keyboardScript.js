const FORWARD = 38, BACKWARD = 40;

function initialize(){
    keyLogOut = document.getElementById("log");
    keyLog = "";
    speedInput = document.getElementById("speedometer");

    xCoord = 250;
    yCoord = 340;
}

function display(){
    purpleCar = document.getElementById("pcar");
    keyLogOut.innerHTML = keyLog;
    purpleCar.style.top = yCoord + "px";
    purpleCar.style.left = xCoord + "px";
}

function logKey(e){
    var spd = parseInt(speedInput.value);
    var dir = "";
    if(e.which == FORWARD){
        yCoord -= spd;
        dir = "foward";
    }
    else if(e.which == BACKWARD){
        yCoord += spd;
        dir = "backward";
    }
    keyLog = "The Car moved " + dir + ".<hr />" + keyLog;
    var str = "which: " + e.which + "<br />";
    str += "key: " + e.key + "<br />";
    str += "code: " + e.code + "<hr />";

    keyLog = str + keyLog;
    display();
}