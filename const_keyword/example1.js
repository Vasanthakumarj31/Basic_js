//const -  a variable that can't be changed
const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    circumference = 2 * PI* radius;
    document.getElementById("h3id").textContent = circumference+"cm"
}
