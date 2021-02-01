let cat = document.getElementById("cat");
function keydown(e){
    const keyName = e.key;
    console.log(parseInt(cat.style.fontSize) + 10);
    if(keyName == "ArrowUp"){
        cat.style.fontSize = parseInt(cat.style.fontSize) + 10;
    }
    else if(keyName == "ArrowDown"){
        cat.style.fontSize = Math.max(parseInt(cat.style.fontSize) - 10, 10);
    }
}
document.addEventListener("keydown", keydown);