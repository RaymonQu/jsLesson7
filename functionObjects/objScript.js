const TIMER_OFF = -1;

function initialize(){
    counterOut = document.getElementById("ctrout");
    counter = 0;
    counterTimer = TIMER_OFF;
}

function display(){
    counterOut.innerHTMl = counter;
    console.log(counterOut.innerHTMl);
}

function count(){
    counter++;
    counterOut.innerHTMl = counter;
    display();
}

function startCounter(){
    if(counterTimer == TIMER_OFF){
        counter = setInterval(count, 1000);
    }
}

function stopCounter(){
    clearInterval(counterTimer);
    counterTimer = TIMER_OFF;
}