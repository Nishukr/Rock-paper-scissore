let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
}

//logic for showWinner 
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        console.log("You lose!");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }

}

//logic for when game Draw
const drawGame=()=>{
    console.log("Game was Draw")
    msg.innerText="Game was Draw!";
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice) 

    //when user and computer fight with each other

    if(userChoice===compChoice){
        //Draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);//they show who is winner
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)

    })
})