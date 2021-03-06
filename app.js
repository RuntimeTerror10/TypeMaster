var randKey = generateRandomKey();
var score = document.querySelector(".score");
var highScore = 0;
var highScoreDisp = document.querySelector(".high-score");

window.addEventListener("keydown", (e) => {
  let enteredKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  let targetKeyCode = randKey;
  let targetKey = document.querySelector(`.key[data-key="${targetKeyCode}"]`);

  /*comparing the entered key and the target*/

  if (enteredKey == targetKey) {
    targetKey.classList.remove("target");
    let nextKey = generateRandomKey();
    randKey = nextKey;
    score.innerText++;
  } else {
    if (highScore < Number(score.innerText)) {
      /*checking if current score is greater than high score*/
      highScore = score.innerText;
      highScoreDisp.innerText = highScore;
    }
    score.innerText = 0;
    alert("Ahh !! Lost the streak :( \n Try again !!");
  }
});

/* Generate Random key */

function generateRandomKey() {
  let keycode = Math.floor(Math.random() * (90 - 65)) + 65;
  let key = document.querySelector(`.key[data-key="${keycode}"]`);

  key.classList.add("target");
  return keycode;
}
