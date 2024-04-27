let button = document.querySelector(".btn button");
let jokePara = document.querySelector(".box p");

async function getJoke(){
   const jokeData = await fetch('https://icanhazdadjoke.com/', {
      headers: {
         'Accept': 'application/json'
      }
   });
   const jokeText = await jokeData.json();
   jokePara.innerHTML = jokeText.joke;
}

document.addEventListener('DOMContentLoaded', getJoke);
button.addEventListener('click', getJoke);