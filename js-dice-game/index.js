let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let imgPlayer1 = document.querySelector(".img1");
imgPlayer1.setAttribute("src", randomImageSource1);

document.querySelector(".img2").setAttribute("src", randomImageSource2);

let result = document.querySelector("h1#result");

if (randomNumber1 < randomNumber2) {
  result.innerHTML = "Player 2 Wins!";
} else if (randomNumber2 < randomNumber1) {
  result.innerHTML = "Player 1 Wins!";
} else {
  result.innerHTML = "Draw!";
}
