const jokeContainer = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Dad Joke API from icanhazdadjoke.com
const url = "https://icanhazdadjoke.com/";

jokeBtn.addEventListener("click", ()=>{
fetch(url,{headers:{
            Accept : 'application/json',
      },
    }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(jokeContainer.innerText = "Unable to fetch Joke from API ☹");
  })
  .then((responseJson) => {
    jokeContainer.innerText = responseJson.joke;
  })
  .catch((error) => {
    console.log(error)
  });
})