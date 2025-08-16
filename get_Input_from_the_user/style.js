//how to get the user input
//there are 2 ways to get the command prompt
//windows prompt
//HTML textbox
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("h1id").textContent = hello ${username}
    console.log(username);
}
let username;
username = window.prompt("what is your name :");
console.log(username)
