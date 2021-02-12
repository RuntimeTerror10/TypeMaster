/*Generate a random keyCode
function randomKeyCode() {
  return Math.floor(Math.random() * (90 - 65)) + 65;
}
*/
/*show traget key
function showRandomKey() {
  let keycode = randomKeyCode();
  let key = document.querySelector(`.key[data-key="${keycode}"]`);

  key.classList.add("target");
}
*/
/* main game mech

window.addEventListener("keydown", function (e) {
  let enteredKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(enteredKey);
  let current = randomKeyCode();
  showRandomKey();
  let key = document.querySelector(`.key[data-key="${current}"]`);
  console.log(key);
  if (enteredKey == key) {
    key.classList.remove("target");
  }
});
*/
var randKey = generateRandomKey();
var score = document.querySelector(".score");
var highScore = 0;
var highScoreDisp = document.querySelector(".hi-sc");

window.addEventListener("keydown", function (e) {
  let enteredKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(enteredKey);
  let targetKeyCode = randKey;
  let targetKey = document.querySelector(`.key[data-key="${targetKeyCode}"]`);
  console.log(targetKey);
  if (enteredKey == targetKey) {
    targetKey.classList.remove("target");
    let nextKey = generateRandomKey();
    randKey = nextKey;
    score.innerText++;
    console.log(score);
  } else {
    if (highScore < Number(score.innerText)) {
      highScore = score.innerText;
      highScoreDisp.innerText = highScore;
    }
    score.innerText = 0;
    alert("Ahh !! Lost the streak :( \n Try again !!");
  }
});

function generateRandomKey() {
  let keycode = Math.floor(Math.random() * (90 - 65)) + 65;
  let key = document.querySelector(`.key[data-key="${keycode}"]`);

  key.classList.add("target");
  return keycode;
}
