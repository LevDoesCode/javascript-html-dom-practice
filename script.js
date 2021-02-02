window.addEventListener("touchmove", function(e){
    for(let touch of e.touches)
    {
        let fingers = touch;
        let dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (fingers.pageX - 4) + "px";
        dot.style.top = (fingers.pageY - 4) + "px";
        document.body.appendChild(dot);
    }
    e.preventDefault();
}, {passive: false})