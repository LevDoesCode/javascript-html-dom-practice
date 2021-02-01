let dem;
dem = document.getElementById('demo');
if( dem != undefined )
{
    dem.innerHTML = "Hello World";
}

let btn = document.getElementById("btn");
btn.addEventListener("click", once);
function once(){
    document.getElementById("btn").textContent = "You clicked the button";
    // btn.textContent = "You clicked the button";
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", one);
btn2.addEventListener("mouseout", two);

function one(){
    document.getElementById("btn2").textContent
     = "Clicked Button 2";
}

function two(){
    alert(this.id);
}