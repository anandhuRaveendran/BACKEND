const axios = require('axios');

async function fetchWithAxios(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

fetchWithAxios('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data));