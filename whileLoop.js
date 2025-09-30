//while loop =  repeat some code while some condition is true
let loggedIn = false;
let username;
let password;
while(!loggedIn){
    username = window.prompt("Enter your name : ");
    password = window.prompt("Enter your password : ");
    if(username === "vasanth" && password === "2000"){
        loggedIn = true;
        console.log("you are logged In");
    }else{
        console.log("Invalid credentials!please try again");
}
}
