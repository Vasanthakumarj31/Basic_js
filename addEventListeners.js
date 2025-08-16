<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rock-paper-scissor</title>
    <style>
        body{
            background-color:rgb(25,25,25);
            color:white;
            font-family:arial;
        }
        .title{
             font-weight:bold;
             font-size:40px;
            
        }
        .rock-icon,
        .paper-icon,
        .scissors-icon{
            height:40px;
            width:40px;
            background-color:black;
            border-width:1px;
            border-style: solid;
            border-color:yellow;
            border-radius:60px;
            padding:20px 20px 20px 20px;
            margin-right:10px;
            cursor:pointer;
           
        }
        .game-result{
            font-size:30px;
            font-weight:bold;
            margin-top:50px;
        }
        .reset-score-button,
        .auto-play-button
        {
            border:none;
            background-color:white;
            font-size:15px;
            padding:8px 15px;
            cursor:pointer
            margin-top:20px;
        }
        .score{
            margin-top:50px;
            margin-bottom:20px;
        }
        
    </style>
</head>
<body>
    <p class="title">rock paper scissor</p>
    <button><img src="rock-emoji.png" class="rock-icon
      rock-eventListener"  ></img></button>
   
    <button><img src="paper-emoji.png" class="paper-icon paper-eventListener"></img></button>
    
    <button><img src="scissors-emoji.png" class="scissors-icon scissors-eventListener"></img></button>
       <p class="js-result game-result"></p>
    <p class="js-moves">
            </p>
    <p class="js-score score"></p>
     <button onclick="
       score.wins=0;
       score.losses=0;
       score.tie=0;
       localStorage.removeItem('score');
       updateScore();
    " class="reset-score-button">
        reset score
    </button>
    <button class="auto-play-button"
    onclick ="
       autoPlay();
    "
    >
        Auto play
    </button>
    
      
      <script>
          
          let score = JSON.parse(localStorage.getItem('score'))||{
              wins : 0,
              losses : 0,
              tie : 0
          }

     /*              
      if(score === null){
          score = {
              wins : 0,
              losses : 0,
              tie : 0
          }
      }*/
      
 const rockEvent=document.querySelector('.rock-eventListener');
    rockEvent.addEventListener('click',()=>{
     playerMove('rock');
 });
   
 const paperEvent=document.querySelector('.paper-eventListener');
    paperEvent.addEventListener('click',()=>{
     playerMove('paper');
 });
 const scissorsEvent=document.querySelector('.scissors-eventListener');
     scissorsEvent.addEventListener('click',()=>{
     playerMove('scissors');
 });
 
 
      
    
     function updateResult(){
 document.querySelector('.js-result').innerHTML=` match ${result}`;

     }
     function updateScore(){
         document.querySelector('.js-score').innerHTML=
      `wins:${score.wins},losses:${score.losses},tie:${score.tie}`;
      
     }
     let isplaying=false;    
     let id;
     function autoPlay(){
            if(!isplaying){
     
                 const id= setInterval(function(){
                  const move=pickMove();
                  playerMove(move);
     },1000);
            isplaying=true;
     }
     else{
         clearInterval(id);
         isplaying=false;
     }
     }
      
    
      function  pickMove(){
      const randomNumber=Math.random();
      let computerMove='';
      if(randomNumber >= 0 && randomNumber < 1/3)
      {         
          computerMove='rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove='paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1)
      {
          computerMove='scissors';
      }
      return computerMove;
      
      }
          
      function playerMove(move){
          
      let computerMove=pickMove();      
      let result='';
      if(move === 'scissors')
      {
      if(computerMove === 'rock')
      {
          result='lose';
      }
      else if(computerMove === 'paper')
      {
          result='win';
      }
      else if(computerMove === 'scissors')
      {
          result='tie';
      }
      }
      else if(move === 'paper')
      {
       
      if(computerMove === 'rock')
      {
          result='win';
      }
      else if(computerMove === 'paper')
      {
          result='tie';
      }
      else if(computerMove === 'scissors')
      {
          result='lose';
      }
      }
      else if(move === 'rock')
   {
   
      if(computerMove === 'rock')
      {
          result='tie';
      }
      else if(computerMove === 'paper')
      {
          result='lose';
      }
      else if(computerMove === 'scissors')
      {
          result='win';
      }
  
      
   }
   
   if(result === 'win')
   {
       score.wins += 1;
   }
   else if(result === 'lose')
   {
       score.losses += 1;
   }
   else if(result === 'tie')
   {
       score.tie += 1;
   }
   
   localStorage.setItem('score',JSON.stringify(score));
   document.querySelector('.js-result').innerHTML=`match ${result}`;
  document.querySelector('.js-moves').innerHTML=`you 
        <img src="${move}-emoji.png" 
        class ="${move}-icon">
        <img src="${computerMove}-emoji.png" 
        class ="${computerMove}-icon">
        computer
        `;
      updateScore();
      
      
   
      }
          
      </script>
</body>
</html>
