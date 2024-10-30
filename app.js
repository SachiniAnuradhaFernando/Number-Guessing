let randomnum = Math.floor(Math.random() * 10) + 1;
let chance = 3;

function Guess() {
    let input = parseInt(document.getElementById("input").value);
    let winloss = document.getElementById("winloss");
    let lowhigher = document.getElementById("lowhigher");
    let leftnum = document.getElementById("leftnum");

    if (chance > 0) {
        if (randomnum === input) {
            winloss.innerHTML = "YOU WON THE GAME!";
            lowhigher.innerHTML = "Your Guessed the correct number!";
        } else {
            chance--;
            leftnum.innerHTML = "Chances you have left: " + chance;
            if (randomnum > input) {
                lowhigher.innerHTML = "Your guess number is too low";
            } else {
                lowhigher.innerHTML = "Your guess number is too high";
            }
        }
        
        if (chance === 0 && randomnum !== input) {
            winloss.innerHTML = "EWWW  MODAYA! GAME OVER!";
            
        }
    }
}