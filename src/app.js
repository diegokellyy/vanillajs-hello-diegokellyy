import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  
  //write your code here
  const palos = ["♥", "♦", "♣", "♠"];

  const numeros = [
    "A", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "J", "Q", "K"
  ];
  const indicePalo = Math.floor(Math.random() * palos.length);
  const palo = palos[indicePalo];

  const indiceNumero = Math.floor(Math.random() * numeros.length);
  const numero = numeros[indiceNumero];

  console.log(palo);
  console.log(numero);

  document.querySelector("#iconoArriba").innerHTML = palo;
  document.querySelector("#numero").innerHTML = numero;
  document.querySelector("#iconoBajo").innerHTML = palo;

  if (palo === "♥" || palo === "♦") {
    document.querySelector(".card").style.color = "red";
  } else{
    document.querySelector(".card").style.color= "black";
  }
};
