let dem;
dem = document.getElementById('demo');
if( dem != undefined )
{
    dem.innerHTML = "Hello World";
}

// Using a getElementBy function
dem = document.getElementsByClassName('demo-class');
console.log(dem);

// Creating elements from JS
let node = document.createElement("div");
let kid1 = document.createElement("p");
let kid2 = document.createTextNode("hey");
let kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

// Node list from Element
let list = node.childNodes;

console.log(list);

list.forEach(
  function(currentValue, currentIndex, listObj)
  {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'myThisArg'
);

// Node list using a query and selector
dem = document.querySelectorAll('.demo-class');
console.log(dem);

dem.forEach
(
    function(node, index, listObj)
    {
        node.innerHTML += " " + (index+1);
    }
)

document.write('Test text');
console.log(document.childNodes);

// Finding elements using HTML Object Collections as seen in the list
// https://www.w3schools.com/js/js_htmldom_document.asp

let x = document.forms['frm1'];
console.log(x);
console.log(x.elements[0]);
console.log(x.innerText);


