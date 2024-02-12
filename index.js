
function computerChoice() {
  const choice = ["snake", "water", "gun"];

  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}

function determineWinner(userChoice,compChoice) {
  if (userChoice === compChoice) {
    return "Its a tie!";
  } else if (
    (userChoice === "snake" && compChoice === "water") ||
    (userChoice === "water" && compChoice === "gun") ||
    (userChoice === "gun" && compChoice === "snake")
  ) {
    return "You win!";
  } else {
    return "You lost!";
  }
}
function playGame() {
    document.getElementById('message').innerText="";

const userChoice = document.getElementById("userChoice").value.toLowerCase();
if(!userChoice){
   
    return
}

  if (
    userChoice !== "snake" &&
    userChoice !== "water" &&
    userChoice !== "gun"
  ) {
    docuinment.getElementById("message").innerText="Invalid choice. Please enter snake, water, or gun.";
    return;
  }
  const compChoice = computerChoice();



  const result = determineWinner(userChoice, compChoice);
document.getElementById('message').innerText=result
}

function clearMessage(){
    document.getElementById('message').innerText="";
}