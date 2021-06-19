/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //Variables
  let pintas = ["♦", "♥", "♠", "♣"];
  let num = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  //Function Randomizer
  function randomizer() {
    let ranpint = Math.floor(Math.random() * pintas.length);
    return pintas[ranpint];
  }

  function randomizer2() {
    let rannum = Math.floor(Math.random() * num.length);
    return rannum;
  }

  //Function link
  document.getElementById("number-left").innerHTML = randomizer2();
  document.getElementById("pinta").innerHTML = randomizer();
  document.getElementById("number-right").innerHTML = randomizer2();
};
