function initialize(){
    countersOut = document.getElementById("ctrs");
    counterList = [];
}

function addCounter(){
    var tmpCtr = {};
    tmpCtr.counter = 0;
    tmpCtr.started = false;

    tmpCtr.startButton = document.createElement("button");
    tmpCtr.startButton.innerHTML = "start counter";
    tmpCtr.startButton.myCounter = tmpCtr;

    tmpCtr.startButton.addEventListener("click", function(){
        if(!this.myCounter.started){
            this.myCounter.started = true;
            this.myCounter.timerId = setInterval(function(){
                tmpCtr.counter++;
                display();
            }, 1000);
        }
    })
    tmpCtr.stopButton = document.createElement("button");
    tmpCtr.stopButton.innerHTML = "Stop Counter";
    tmpCtr.stopButton.myCounter = tmpCtr;
    tmpCtr.stopButton.addEventListener("click", function(){
        clearInterval(this.myCounter.timerId);
        this.myCounter.started = false;
    });

    tmpCtr.counterDisplay = document.createElement("span");
    tmpCtr.counterDisplay.innerHTML = " " + 0;

    countersOut.appendChild(document.createElement("hr"));
    countersOut.appendChild(tmpCtr.startButton);
    countersOut.appendChild(tmpCtr.stopButton);
    countersOut.appendChild(tmpCtr.counterDisplay);

    counterList.push(tmpCtr);
}

function display(){
    for(var i = 0; i < counterList.length; i++){
        counterList[i].counterDisplay.innerHTML = " " + counterList[i].counter;
    }
}