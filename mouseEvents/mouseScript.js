function initialize(){
    eventOutput = document.getElementById("evout");
}

function react(e, color){
    if(e.type == "contextmenu"){
        e.preventDefault();
    }
    var str = "(" + e.clientX + ", " + e.clientY + ")<br />";
    str += "target: " + e.target + "<br />";
    str += "button: " + e.button + "<br />";
    str += "type: " + e.type + "<br />";
    eventOutput.innerHTML = str;
    e.target.style.backgroundColor = color;
    console.log("YOU CLICKED");
}