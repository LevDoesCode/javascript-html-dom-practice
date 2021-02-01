
let button = document.getElementById("btn");

function whichButton(e){
    if(e.button == 0){
        alert("Left Button");
    }
    else if (e.button == 1){
        alert("Middle Button");
    }
    else if (e.button == 2){
        alert("Right Button");
    }
    console.log(e);
}
button.addEventListener("mousedown", whichButton);