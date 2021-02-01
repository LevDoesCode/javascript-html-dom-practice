let lastX;
let item = document.getElementById("item");
item.addEventListener("mousedown", function(e){
    if(e.button == 0)
    {
        lastX = e.clientX;
        window.addEventListener("mousemove", moved);
    }
})

function moved(e){
    let dist = e.clientX - lastX
    let newWidth = item.offsetWidth + dist;
    item.style.width = newWidth + "px";
    lastX = e.clientX;
}