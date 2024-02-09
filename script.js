
function playRound(playerRound, computerRound){
    
    let p = document.createElement('p');

    if(playerRound == "rock" && computerRound == "paper"){
        computerScore++;
        console.clear();
        console.log("You Lose! Paper beats Rock");
        p.textContent = "Computer Won!";
        p.classList.add('content');
        node.appendChild(p);
    // game();

        displayScore(playerScore, computerScore);
    }else if(playerRound == "rock" && computerRound == "rock"){
        computerScore++;
        playerScore++;
        console.clear();
        console.log("It's a Tie!");
        p.textContent = "It's a Tie!";
        p.classList.add('content');
        node.appendChild(p);
        displayScore(playerScore, computerScore);
    }else if(playerRound == "rock" && computerRound == "scissor"){
        playerScore++;
        console.clear();
        console.log("You Won! Rock beats Scissor");
        displayScore(playerScore, computerScore);
    } 
    else if(playerRound == "paper" && computerRound == "paper"){
        computerScore++;
        playerScore++;
        console.clear();
        console.log("It's a Tie!");
        displayScore(playerScore, computerScore);
    }else if(playerRound == "paper" && computerRound == "rock"){
        playerScore++;
        console.clear();
        console.log("You Won! Paper beats Rock");
        displayScore(playerScore, computerScore);
    }else if(playerRound == "paper" && computerRound == "scissor"){
        computerScore++;
        console.clear();
        console.log("You Lose! Scissor beats Paper");
        displayScore(playerScore, computerScore);
    }
    else if(playerRound == "scissor" && computerRound == "paper"){
        playerScore++;
        console.clear();
        console.log("You Won! Scissor beats Paper!");
        displayScore(playerScore, computerScore);
    }else if(playerRound == "scissor" && computerRound == "rock"){
        computerScore++;
        console.clear();
        console.log("You Lose! Rock beats Scissor");
        displayScore(playerScore, computerScore);
    }else if(playerRound == "scissor" && computerRound == "scissor"){
        computerScore++;
        playerScore++;
        console.clear();
        console.log("It's a Tie!");
        displayScore(playerScore, computerScore);
    }else{
        return "Enter a valid choice cunt!";
    }  
}

  let playerScore = 0;
  let computerScore = 0;
//   let pChoice, cChoice; 
// game();
const node = document.querySelector('.results');
    
function game(){
    // for(let i = 1; i<=5; i++){
    //     // player's choice
    //     const playerRound = prompt("Enter - Rock, Paper or Scissor").toLowerCase();
    //     // console.log(playerRound);

    //     // computer's choice
    //     const choice = ["rock", "paper", "scissor"];
    //     const random = Math.floor(Math.random() * choice.length);
    //     const computerRound = choice[random];
    //     // console.log(computerRound);
    //     playRound(playerRound, computerRound);
    // }
   
    // p.textContent = "Computer Won";
    // p.classList.add('content');
    // node.appendChild(p);

   if(computerScore>playerScore){
    // p.textContent = "Computer Won";
    // p.classList.add('content');
    // node.appendChild(p);

    console.log("Computer won!");
    console.log("Your score is: "+playerScore);
    console.log("Computer's score is: "+computerScore);
   }else if(playerScore > computerScore){
    console.log("You won!");
    console.log("Your score is: "+playerScore);
    console.log("Computer's score is: "+computerScore);
   }else{
    console.log("It's a tie!");
    console.log("Your score is: "+playerScore);
    console.log("Computer's score is: "+computerScore);
   }
    
}

function displayScore(playerScore, computerScore){
    console.log("Your score is: "+playerScore);
    console.log("Computer's score is: "+computerScore);
    node.innerHTML = ""
    let pScore = document.createElement('p');
    pScore.textContent = "Player Score is: " + playerScore;
    node.append(pScore);
    
    let cScore = document.createElement('p');
    cScore.textContent = "Player Score is: " + computerScore;
    node.append(cScore);
    
}

function cChoice(){
//computer's random options
const computerChoice = ["rock", "paper", "Scessor"];
let random = Math.floor(Math.random() * computerChoice.length);
// console.log("ComputerRound is - "+ computerChoice[random]);

//storing computer's choice
return computerChoice[random];
}


//button's click events
const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", function () {
    console.clear();
    console.log("player selected Rock");
    pChoice = "rock";
    // console.log("Computer selected "+cChoice());
    playRound("rock", cChoice());
});

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function(){
    console.clear();
    console.log("player selected Paper");
    pChoice = "paper";
    // console.log("Computer selected "+cChoice());

    playRound("paper", cChoice());

});

const btnScessor = document.querySelector(".btnScissor");
btnScessor.addEventListener("click", function(){
    console.clear();
    console.log("player selected Scissor");
    pChoice = "scissor";
    // console.log("Computer selected "+cChoice());

    playRound("scissor", cChoice());

});


