let pScore = 0;
let cScore = 0;
/*resets the score to 0*/
const reset = () => {
let pScore = 0;
document.getElementById("pScore").innerHTML = 0;
let cScore = 0;
document.getElementById("cScore").innerHTML = 0;
};
const getUserChoice = (userChoice) => {
    if (userChoice === 'fire' | userChoice === 'water' | userChoice === 'grass') {
        return userChoice;
    }
    else {
        return 'error, how did you manage this';
    }
    /*sets the computer choice to random to randomize what the computer throws out*/
}
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "fire";
        case 1:
            return "water";
        case 2:
            return "grass";
    }
}

let userPokemonChoice = "";
/*the rule for the draw feature where if the computer and player's choice match up it will draw*/
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        if (userChoice === 'fire') {
            document.getElementById("yourPokemon").src = 'charmander2.png';
            document.getElementById("computerPokemon").src = 'charmander2.png';
            return "draw";
        }
        if (userChoice === 'water') {
            document.getElementById("yourPokemon").src = 'squirtle2.png';
            document.getElementById("computerPokemon").src = 'squirtle2.png';
            return "draw";
        }
        if (userChoice === 'grass') {
            document.getElementById("yourPokemon").src = 'bulbasaur2 (1).png';
            document.getElementById("computerPokemon").src = 'bulbasaur2 (1).png';
            return "draw";
        }
    }
    /*if the player chooses Charmander then the first rule set is if the computer chooses squirtle then the player loses*/
    if (userChoice === 'fire') {
        document.getElementById("yourPokemon").src = 'charmander2.png';
        if (computerChoice === 'water') {
            document.getElementById("computerPokemon").src = 'squirtle2.png';
            document.getElementById("cScore").innerHTML = cScore++;
            document.getElementById("announcement").innerHTML = "Your Pokemon Fainted, You Lost!";
            return 'you lost';
            /*the else is if the computer chooses bulbasaur then the player wins and gets a point*/
        } else {
            document.getElementById("pScore").innerHTML = pScore++;
            document.getElementById("computerPokemon").src = 'bulbasaur2 (1).png';
            document.getElementById("announcement").innerHTML = "Trainer's Pokemon Fainted, You Win!";
            document.getElementById("pScore").innerHTML = pScore++;
            return "you won";
            
        }
    }
    /*if the player chooses Squirtle then the second rule set is if the computer chooses bulbasaur then the player loses*/
    if (userChoice === 'water') {
        document.getElementById("yourPokemon").src = 'squirtle2.png';
        if (computerChoice === 'grass') {
            document.getElementById("computerPokemon").src = 'bulbasaur2 (1).png';
            document.getElementById("cScore").innerHTML = cScore++;
            document.getElementById("announcement").innerHTML = "Your Pokemon Fainted, You Lost!";
            return 'you lost';
            /*the else is if the computer chooses charmander then the player wins and gets a point*/
        } else {
            document.getElementById("computerPokemon").src = 'charmander2.png';
            document.getElementById("pScore").innerHTML = pScore++;
            document.getElementById("announcement").innerHTML = "Trainer's Pokemon Fainted, You Win!";
            return "you won";
        }
    }
/*if the player chooses bulbasaur then the first rule set is if the computer chooses charmander then the player loses*/
    if (userChoice === 'grass') {
        document.getElementById("yourPokemon").src = 'bulbasaur2 (1).png';
        if (computerChoice === 'fire') {
            document.getElementById("computerPokemon").src = 'charmander2.png';
            document.getElementById("cScore").innerHTML = cScore++;
            document.getElementById("announcement").innerHTML = "Your Pokemon Fainted, You Lost!";
            return 'you lost';
            /*the else is if the computer chooses squirtle then the player wins and gets a point*/
        } else {
            document.getElementById("computerPokemon").src = 'squirtle2.png';
            document.getElementById("announcement").innerHTML = "Trainer's Pokemon Fainted, You Win!";
            document.getElementById("pScore").innerHTML = pScore++;
            
            return "you won";
        }
    }
}
/*this is to get the players choice at the beginning where the player chooses and clicks on a pokemon and tells the console if the player won or lost*/
const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    document.getElementById("yourPokemon").src = userPokemonChoice
    console.log("You threw: " + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};