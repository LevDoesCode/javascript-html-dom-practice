
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

window.addEventListener("mousemove", function(e){
    let dot = document.createElement("div");
    dot.className = "dot lol";
    dot.style.left = (e.pageX - 4)  + "px";
    dot.style.top = (e.pageY - 4) + "px";
    if(e.pageY - 4 > 50)
        document.body.appendChild(dot);
})

let buttonLarger = document.getElementById("larger");
buttonLarger.addEventListener("mouseover", function(e){
    let dot = document.getElementsByClassName("dot");
    for(let myDot of dot){
        myDot.style.height = "16px";
        myDot.style.width = "16px";
        myDot.style.borderRadius = "8px";
    }
})

buttonLarger.addEventListener("mouseout", function(e){
    let dot = document.getElementsByClassName("dot");
    for(let myDot of dot){
        myDot.style.height = "8px";
        myDot.style.width = "8px";
        myDot.style.borderRadius = "4px";
    }
})