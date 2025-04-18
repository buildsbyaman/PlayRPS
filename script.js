document.addEventListener("DOMContentLoaded", () => {

    let choices = document.querySelectorAll(".choice");

    let user_score = document.querySelector("#user-score");
    let comp_score = document.querySelector("#computer-score");
    let total_plays = document.querySelector("#total-plays");
    let user_count = 0;
    let comp_count = 0;
    let total_count = 0;

    let result_msg = document.querySelector("#current-result");
    
    const movePlay = (userchoice, compchoice) => {
        total_count++;
        total_plays.innerText = `Total Plays - ${total_count}`;
        if(userchoice === compchoice) {
            result_msg.style.color = "black";
            result_msg.innerText = "It's a draw!";
        }else if(userchoice === "rock" && compchoice === "scissors") {
            result_msg.innerText = "You win! Rock beats Scissors!";
            result_msg.style.color = "green";
            user_count++;
        }else if(userchoice === "paper" && compchoice === "rock") {
            result_msg.innerText = "You win! Paper beats Rock!";
            result_msg.style.color = "green";
            user_count++;
        }else if(userchoice === "scissors" && compchoice === "paper") {
            result_msg.innerText = "You win! Scissors beats Paper!";
            result_msg.style.color = "green";
            user_count++;
        }else if(userchoice === "rock" && compchoice === "paper") {
            result_msg.innerText = "You lose! Paper beats Rock!";
            result_msg.style.color = "red";
            comp_count++;
        }else if(userchoice === "paper" && compchoice === "scissors") {
            result_msg.innerText = "You lose! Scissors beats Paper!";
            result_msg.style.color = "red";
            comp_count++;
        }else if(userchoice === "scissors" && compchoice === "rock") {
            result_msg.innerText = "You lose! Rock beats Scissors!";
            result_msg.style.color = "red";
            comp_count++;
        }
        user_score.innerText = user_count;
        comp_score.innerText = comp_count;
    }

    const compguess = () => {
        let compchoice = Math.floor(Math.random()*3);
        let choices = ["rock", "paper", "scissors"];
        return choices[compchoice];
    }

    const playerplay = (e) => {
        userchoice = e.target.id;
        compchoice = compguess();
        movePlay(userchoice, compchoice);
    }

    choices.forEach((choice) => {
        choice.addEventListener("click",(e) => {
            playerplay(e);
        }
     );
    })

});