const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
    const options = {
        headers: {
            Accept: 'application/json',
          },
    };

    const res = await fetch('https://icanhazdadjoke.com', options);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

// Получание через async/await https://humor-jokes-and-memes.p.rapidapi.com
//  async function generateJoke() {
//      const options = {
//          method: 'GET',
//          headers: {
//              'X-RapidAPI-Key': 'a248fb9cd9msh84acc231f34e97ep1f53e1jsn5b26db888e52',
//              'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
//          }
//      };

//      const res = await fetch('https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket', options);

//      const data = await res.json()

//      jokeEl.innerHTML = data.joke
//  }

// Получение через .then https://humor-jokes-and-memes.p.rapidapi.com
// function generateJoke()
// {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "a248fb9cd9msh84acc231f34e97ep1f53e1jsn5b26db888e52",
//       "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
//     },
//   };

//   fetch(
//     "https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket",
//     options
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
