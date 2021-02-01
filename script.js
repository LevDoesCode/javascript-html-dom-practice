
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

window.addEventListener("click", function(e){
    let dot = document.createElement("div");
    dot.className = "dot lol";
    dot.style.left = (e.pageX - 4)  + "px";
    dot.style.top = (e.pageY - 4) + "px";
    document.body.appendChild(dot);
})