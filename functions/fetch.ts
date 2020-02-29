import fetch from 'node-fetch'
const URL2 = 'http://api.icndb.com/jokes/random';

fetch(URL2)
  .then(response => response.json())
  .then(myJson => console.log(myJson.value.joke));