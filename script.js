/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/


const a = 1;

const b = 2;

const c = 3;

const d = 4;

const e = 5;

const sum = a + b + c + d + e;

const media = sum / 5;

const sumContainer = document.querySelector(".sum-container");

sumContainer.innerHTML += "La mia somma è di " + sum;

const mediaContainer = document.querySelector(".media-container");

mediaContainer.innerHTML += "La mia media è di " + media;

