let randomnum = Math.floor(Math.random() * 10) + 1;
let chance = 3;

function GuessNumber() {
    let getinput = parseInt(document.getElementById("getinput").value);
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    if (chance > 0) {
        if (randomnum === getinput) {
            a.innerHTML = "YOU WON THE GAME!";
            b.innerHTML = "Your Guessed the correct number!";
        } else {
            chance--;
            c.innerHTML = "Chances you have left: " + chance;
            if (randomnum > getinput) {
                b.innerHTML = "Your guess number is too low";
            } else {
                b.innerHTML = "Your guess number is too high";
            }
        }
        
        if (chance === 0 && randomnum !== getinput) {
            a.innerHTML = "EWWW  MODAYA! GAME OVER!";
            
        }
    }
}