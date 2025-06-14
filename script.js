let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);  // generate random numbers among 0,1,2
    return options[randIdx];
};

const drawGame = () => {
     msg.innerText = "Game Was Draw.Play Again.";
     msg.style.backgroundColor = "blue";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            // compChoice paper,scissor
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            // compChoice stone,scissor
            userWin = compChoice === "scissor" ? false : true ;
        }else{
            userWin = compChoice === "stone" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});