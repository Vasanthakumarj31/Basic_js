//Number guessing game
let min = 1;
let max = 100;
let answer = Math.floor(Math.random()*(max - min + 1)) + min;
let attempts = 0;
let guess;
let isRunning = true;
while(isRunning){
    guess = window.prompt("Enter a number : ");
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }else if(guess<min || guess>max){
        window.alert("Enter a number between 1 to 100");
    }else{
        attempts++;
        if(guess>answer){
            window.alert("Your answer is too large");
        }else if(guess<answer){
            window.alert("your answer is too short")
        }else{
            window.alert(your guess is correct,the answer is ${answer} and the attempts you have made is ${attempts});
            isRunning = false;
        }
    }
}
