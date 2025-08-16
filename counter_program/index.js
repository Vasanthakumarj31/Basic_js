//counter program
let count = 0;
document.getElementById("increaseBTN").onclick = function(){
    count++;
    document.getElementById("counterLabel").textContent = count;
}
document.getElementById("decreaseBTN").onclick = function(){
    count--;
    document.getElementById("counterLabel").textContent = count;
}
document.getElementById("resetBTN").onclick = function(){
    count = 0;
    document.getElementById("counterLabel").textContent = count;
}
