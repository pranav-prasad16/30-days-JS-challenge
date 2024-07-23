//Task - 1,2
const message = `Hey this task is done!`;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = 2 > 1;
    if (success) resolve(`${message}`);
    else reject('Operation failed!');
  }, 2000);
});

myPromise
  .then((message) => console.log('Success,', message))
  .catch((error) => console.log('Error:', error));

//Task - 3,4,5,6,7
const randomUserURL = `https://api.freeapi.app/api/v1/public/randomusers/user/random`;

fetch(randomUserURL)
  .then((response) => {
    if (!response.ok) throw new Error('Response cant be fetched');
    return response.json();
  })
  .then((json) =>
    console.log(
      `The random name fetched from the API is: ${json.data.name.title} ${json.data.name.first} ${json.data.name.last}`
    )
  )
  .catch((error) => console.log('Error is: ', error));

const randomJokeURL = `https://api.freeapi.app/api/v1/public/randomjokes/joke/random`;
async function fetchRandomJoke(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Fetching random joke failed');
    const jokeData = await response.json();
    console.log('Random joke is: ', jokeData.data.content);
  } catch (error) {
    console.log('Error is: ', error);
  }
}

fetchRandomJoke(randomJokeURL);
