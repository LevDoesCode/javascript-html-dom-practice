document.write('<br>Test text 1');

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

console.log(document.childNodes);

// Finding elements using HTML Object Collections as seen in the list
// https://www.w3schools.com/js/js_htmldom_document.asp

let x = document.forms['frm1'];
console.log(x);
console.log(x.elements[0]);
console.log(x.innerText);

document.getElementById('date').innerHTML = Date();

document.write('<br>Test text 2');

document.getElementById('image').src = 'https://source.unsplash.com/480x320/'

document.body.style.outline = '5px dashed #DC143C'

let sum = document.getElementById("btn1");
sum.setAttribute("onclick", "(document.getElementById('id1')).style.color = 'red'; (this).style.color = 'red'");

console.log(sum.attributes);

